import styled, {css} from 'styled-components';

export const FormContainer = styled.div`
  ${({theme}) => css`
    margin-bottom: 25px;
  `}
`;

export const FieldWrapper = styled.div`
  ${({theme}) => css`
    padding: 15px;
    box-shadow: 0 2px 4px 0 rgba(107, 111, 119, 1);
  `}
`;

export const SubmitButton = styled.button`
  ${({theme}) => css`
    background-color: ${theme.color.red};
    color: ${theme.color.white};
    text-transform: uppercase;
    padding: 10px;
    min-width: 150px;
  `}
`;
