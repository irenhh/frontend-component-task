import styled, {css} from 'styled-components';
import {Title} from '../general.styles';

export const PermissionsBlockWrapper = styled.div`
  ${({theme}) => css`
    padding-bottom: 20px;
    border-bottom: 2px solid ${theme.color.background};

    &:last-of-type {
      border: 0;
      padding-bottom: 0;
    }

    ${Title} {
      margin: 20px 0 15px;
    }
  `}
`;

export const PermissionsBlockFields = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PermissionsItemLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const PermissionsItemIcon = styled.label`
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
`;

export const PermissionsItemText = styled.p`
  &.active {
    font-weight: bold;
  }
`;
