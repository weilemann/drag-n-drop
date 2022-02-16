import { useState } from 'react';
import { initialData } from './mock/initialData';
import { Column } from './components/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

interface IData {
  tasks: any,
  columns: any,
  columnOrder: any[]
}

const App = () => {
  const [data, setData] = useState<IData>(initialData)

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if(!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
     ) {
      return;
     }

     const column = data.columns[source.droppableId];

     const newTaskIds = Array.from(column.taskIds);
     newTaskIds.splice(source.index, 1);
     newTaskIds.splice(destination.index, 0, draggableId);

     const newColumn = {...column, taskIds: newTaskIds}

     const newState = {...data, columns: {...data.columns, [newColumn.id]: newColumn}}

     setData(newState);
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {
        data.columnOrder.map((columnId: any) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </DragDropContext>
  )
}

export default App;