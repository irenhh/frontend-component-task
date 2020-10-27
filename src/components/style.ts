import styled, {css} from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 25px;
  padding: 10px;
`;

export const FieldWrapper = styled.div`
  ${({theme}) => css`
    padding: 20px;
    background-color: ${theme.color.white};
  `}
`;

export const SubmitButton = styled.button`
  ${({theme}) => css`
    background-color: ${theme.color.red};
    color: ${theme.color.white};
    text-transform: uppercase;
    padding: 10px;
    min-width: 150px;
    margin-top: 30px;
    font-weight: bold;
    transition: background-color ${theme.transition.duration} ${theme.transition.ease},
      color ${theme.transition.duration} ${theme.transition.ease};

    &:hover {
      background-color: ${theme.color.darkRed};
    }
  `}
`;
