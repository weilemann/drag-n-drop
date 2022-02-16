import styled from "styled-components";

type ContainerProps = {
    isDragging: boolean
}

export const Container = styled.div<ContainerProps>`
    border: 1px solid #999;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => props.isDragging ? '#c7cff2' : '#fff'};
    transition: background-color 0.4s ease;
`;