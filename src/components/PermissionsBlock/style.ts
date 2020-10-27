import styled, {css} from 'styled-components';
import {Title} from '../general.styles';

export const PermissionsBlockWrapper = styled.div`
  ${({theme}) => css`
    padding-bottom: 20px;
    border-bottom: 2px solid ${theme.color.background};

    ${Title} {
      margin: 20px 0 15px;
    }
  `}
`;

export const PermissionsBlockFields = styled.div`
  ${({theme}) => css`
    display: flex;
  `}
`;

export const PermissionsItemLabel = styled.label`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    margin-right: 12px;
  `}
`;

export const PermissionsItemIcon = styled.label`
  ${({theme}) => css`
    margin-right: 8px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }

    svg {
      display: block;
      width: 15px;
      height: 15px;
    }
  `}
`;

export const PermissionsItemText = styled.p`
  ${({theme}) => css`
    &.active {
      font-weight: bold;
    }
  `}
`;
