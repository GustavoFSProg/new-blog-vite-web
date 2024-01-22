import React from 'react'
import { Container, InputContainer, StyledInput, Label, ErrorMessage } from './style'

const InputDinamic = ({
  type,
  placeholder,
  value,
  invalid,
  required = false,
  errorMessage,
  onChange,
}) => (
  <Container style={{ height: '2.2rem' }}>
    <InputContainer>
      <StyledInput type={type} value={value} onChange={onChange} required={required} />
      <Label move={!value}>{required ? placeholder + ' *' : placeholder}</Label>
    </InputContainer>
    <ErrorMessage>{invalid ? errorMessage : ''}</ErrorMessage>
  </Container>
)

export default InputDinamic
