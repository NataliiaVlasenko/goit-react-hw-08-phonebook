import styled from '@emotion/styled';
import { Form, Field} from 'formik';

  export const FormInput = styled(Form)`
  gap: 20px;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;


export const FormLabel = styled.label`
font-weight: 500;
padding: 10px;
`;


export const Input = styled(Field)`
margin-left: 20px;
`;