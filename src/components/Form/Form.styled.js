import styled from '@emotion/styled';
import { Form, Field} from 'formik';

  export const FormInput = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid orange;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px gray;
  padding: 20px;
  background-color: rgb(239, 239, 239);
`;


export const FormLabel = styled.label`
font-weight: 500;
padding: 10px;
padding: 3px;
`;


export const Input = styled(Field)`
width: fit-content;
margin-top: 15px;
margin-bottom: 15px;
margin-left: 15px;
border-radius: 5px;
border-color: grey;
`;