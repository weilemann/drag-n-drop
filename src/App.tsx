import { useState } from 'react';
import { initialData } from './mock/initialData';
import { Column } from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';

interface IData {
  tasks: any,
  columns: any,
  columnOrder: any[]
}

const App = () => {
  const [data, setData] = useState<IData>(initialData)

  const onDragEnd = () => {

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