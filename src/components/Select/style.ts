import styled, {css} from 'styled-components';
import {Title} from '../general.styles';

export const SelectWrapper = styled.div`
  ${({theme}) => css`
    margin-bottom: 20px;
  `}
`;

export const SelectLabel = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;

    ${Title} {
      margin-right: 8px;
    }
  `}
`;

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 100px;
`;

export const CustomSelect = styled.button`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${theme.color.background};
    padding: 5px 10px;
    width: 100%;
    font-weight: bold;
    background-color: ${theme.color.white};
    text-align: left;
    text-transform: capitalize;
    transition: background-color ${theme.transition.duration} ${theme.transition.ease};

    svg {
      transition: transform ${theme.transition.duration} ${theme.transition.ease};
    }

    &.active {
      svg {
        transform: rotate(-180deg);
      }
    }

    &:hover {
      background-color: ${theme.color.background};
    }
  `}
`;

export const CustomSelectList = styled.ul`
  ${({theme}) => css`
    position: absolute;
    background-color: ${theme.color.background};
    width: 100%;
  `}
`;

export const CustomSelectOption = styled.li`
  ${({theme}) => css`
    padding: 3px 6px;
    cursor: pointer;
    transition: background-color ${theme.transition.duration} ${theme.transition.ease};

    &:last-of-type {
      padding-bottom: 6px;
    }

    &:hover {
      background-color: ${theme.color.red};
    }
  `}
`;
