import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../../interfaces/ITask';

import {
    Container,
    Handle,
} from './styles';

type Props = {
    task: ITask,
    [rest: string]: any;
}

export const Task = (props: Props) => {
    const { task, index, content } = props;
    
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {/* <Handle {...provided.dragHandleProps} /> */}
                    {task.content}
                </Container>
            )}
        </Draggable>
    )
}