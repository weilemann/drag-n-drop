import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../../interfaces/ITask';

import {
    Container, 
} from './styles';

type Props = {
    task: ITask,
    [rest: string]: any;
}

export const Task = (props: Props) => {
    const { task, index } = props;
    
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {task.content}
                </Container>
            )}
        </Draggable>
    )
}