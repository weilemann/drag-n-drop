import { DroppableProvided } from "react-beautiful-dnd";
import styled from "styled-components";

type ContainerProps = {
    isDraggingOver: boolean
}

export const Container = styled.div`
    margin: 8px;
    border: 1px solid #999;
    border-radius: 5px;
`;

export const Title = styled.h3`
    padding: 8px;
`;

export const TaskList = styled.div<ContainerProps>`
    padding: 8px;
    background-color: ${props => props.isDraggingOver ? '#c7f2e3' : '#fff'};
    transition: background-color 0.4s ease;
`;