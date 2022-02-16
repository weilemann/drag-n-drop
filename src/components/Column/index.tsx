import { Task } from '../Task';
import { Droppable } from 'react-beautiful-dnd';
import { ITask } from '../../interfaces/ITask';
import { IColumn } from '../../interfaces/IColumn';

import {
    Container, 
    Title,
    TaskList,
} from './styles';

type Props = {
    column: IColumn
    tasks: ITask[]
};

export const Column = (props: Props) => {
    const {tasks, column} = props;

    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}