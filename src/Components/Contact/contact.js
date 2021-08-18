import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 50px 0;
  background-color: #f2f3f9;
`;

const FormContainer = styled.div`
  width: 350px;
  height: -moz-fit-content;
  margin: 50px auto;
  border: 2px solid black;
  background-color: white;
  color: #094067;
  border-radius: 10px;
`;

const FormHeader = styled.h2`
  text-align: center;
  letter-spacing: 5px;
`;

const InputContainer = styled.i`
  background-color: white;
  border-radius: 5px;
  margin: 10px 0;
  display: grid;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }

  font-size: 20px;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  margin: 5px 0px;
  font-weight: bold;
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
  padding: 10px;
`;

const TextArea = styled.textarea`
  width: 273px;
  height: 134px;
`;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  width: 60px;
  height: 25px;
`;

const Contact = () => {
  return (
    <Container>
      <FormContainer id="contact">
        <Form>
          <FormHeader>Contact Me</FormHeader>
          <InputContainer>
            <Label>Name:</Label>
            <Input
              placeholder={'John Doe'}
              required={true}
              type={'text'}
            ></Input>
          </InputContainer>

          <InputContainer>
            <Label>Email:</Label>
            <Input
              placeholder={'name@domain.com'}
              required={true}
              type={'text'}
            ></Input>
          </InputContainer>

          <InputContainer>
            <Label>Phone Number:</Label>
            <Input placeholder={'(123)456-7890'} type={'number'}></Input>
          </InputContainer>

          <InputContainer>
            <Label>Message:</Label>
            <TextArea />
          </InputContainer>
          <Button>Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};
export default Contact;
