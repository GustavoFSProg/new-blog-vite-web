import React from 'react'
import { Container, InputContainer, StyledInput, Label, ErrorMessage } from './style'

interface InputProps {
  type: string
  placeholder: string
  value: string
  invalid?: boolean
  required?: boolean
  errorMessage?: string
  onChange: (event: any) => void
}

const InputDinamic = ({
  type,
  placeholder,
  value,
  invalid,
  required = false,
  errorMessage,
  onChange,
}: InputProps) => (
  <Container>
    <InputContainer>
      <StyledInput type={type} value={value} onChange={onChange} required={required} />
      <Label move={!value}>{required ? placeholder + ' *' : placeholder}</Label>
    </InputContainer>
    <ErrorMessage>{invalid ? errorMessage : ''}</ErrorMessage>
  </Container>
)

export default InputDinamic
