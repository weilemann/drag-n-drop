import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { initialData } from '../../mock/initialData';
import { Column } from '../../components/Column';
import { Container } from './styles';

interface IData {
  tasks: any,
  columns: any,
  columnOrder: any[]
}

export const Board = () => {
  const [data, setData] = useState<IData>(initialData)

  const onDragStart = () => {
    document.body.style.color = "#0968a0";
    document.body.style.transition = "background-color 0.4s ease";
  };

  const onDragUpdate = (update: DropResult) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(237, 231, 218, ${opacity})`
  };

  const onDragEnd = (result: DropResult) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit"

    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds }

      const newState = { ...data, columns: { ...data.columns, [newColumn.id]: newColumn } }

      setData(newState);
      return;
    }
    
    // Moving from one list to another`
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {...data, columns: {...data.columns, [newStart.id]: newStart, [newFinish.id]: newFinish}}

    setData(newState)
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Container>
        {
          data.columnOrder.map((columnId: any) => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </Container>
    </DragDropContext>
  )
}