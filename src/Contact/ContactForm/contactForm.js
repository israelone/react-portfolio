import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 350px;

  height: -moz-fit-content;

  margin: 50px auto;
  border: 2px solid black;
  margin-bottom: 10px;
`;

const InputContainer = styled.i`
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
  display: grid;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  border-bottom: 1px solid black;
  width: 98%;
  font-size: 20px;
  padding: 0;
`;

const Label = styled.label`
  font-size: 14px;
  margin: 5px 0px;
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
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

const ContactForm = () => {
  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <Label>Name:</Label>
          <Input type={"text"}></Input>
        </InputContainer>

        <InputContainer>
          <Label>Email:</Label>
          <Input type={"text"}></Input>
        </InputContainer>

        <InputContainer>
          <Label>Phone Number:</Label>
          <Input type={"number"}></Input>
        </InputContainer>

        <InputContainer>
          <Label>Message:</Label>
          <TextArea />
        </InputContainer>
        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
