import React from "react";
import { InputContainer } from "./inputContainer.styled";
import { InputLabel } from "./inputLabel.styled";
import { StyledInput } from "./input.styled";
import { ErrorLabel } from "./errorLabel.styled";
import { StyledLabel } from "./label.styled";
import { Chip } from "..";
function Input({
  disabled,
  required,
  error,
  errorLabel,
  label,
  name,
  placeholder,
  type,
  chips,
  value,
  remove,
  ...props
}) {
  return (
    <InputContainer>
      <InputLabel disabled={disabled} htmlFor={name}>
        {label + (required ? " *" : "")}
      </InputLabel>
      {type === "chips" ? (
        <StyledLabel>
          {chips &&
            chips.map((item) => (
              <Chip remove={() => { remove(item) }} key={item}>
                {item}
              </Chip>
            ))}
          <StyledInput secret {...props} value={value} name='skills-input' placeholder="Навыки" />
        </StyledLabel>
      ) : (
        <StyledInput
          error={error}
          name={name}
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      )}
      {error && <ErrorLabel>{errorLabel}</ErrorLabel>}
    </InputContainer>
  );
}

export default Input;
