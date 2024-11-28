import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 100 ; // Center the form with 
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Radio = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const BeautifulForm = ({changeHandler, submitHandler}) => {
  return (
    <FormContainer>
      <FormTitle>Sign up form</FormTitle>
      <form onSubmit={submitHandler}>
        {/* Input Fields */}
        <FormGroup>
          <Label htmlFor="input1">First Name</Label>
          <Input type="text" id="input1" placeholder="Enter your first name" onChange={changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input2">Last Name</Label>
          <Input type="text" id="input2" placeholder="Enter your last name" onChange={changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input3">Email</Label>
          <Input type="email" id="input3" placeholder="Enter your email" onChange={changeHandler}/>
        </FormGroup>

        {/* Checkbox */}
        <CheckboxGroup>
          <Checkbox type="checkbox" id="checkbox" onChange={changeHandler}/>
          <Label htmlFor="checkbox">Subscribe to newsletter</Label>
        </CheckboxGroup>

        {/* Radio Buttons */}
        <RadioGroup>
          <Radio type="radio" id="radio1" name="option" onChange={changeHandler}/>
          <Label htmlFor="radio1">Male</Label>
        </RadioGroup>
        <RadioGroup>
          <Radio type="radio" id="radio2" name="option" onChange={changeHandler}/>
          <Label htmlFor="radio2">Female</Label>
        </RadioGroup>

        {/* Select Box */}
        <FormGroup>
          <Label htmlFor="select">Select an option</Label>
          <Select id="select" onChange={changeHandler}>
            <option value="option1">Vegetarian</option>
            <option value="option2">Carnivour</option>
            <option value="option3">Pescetarian</option>
          </Select>
        </FormGroup>

        {/* Submit Button */}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

BeautifulForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default BeautifulForm;
