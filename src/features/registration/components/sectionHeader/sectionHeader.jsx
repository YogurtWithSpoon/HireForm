import React from "react";
import { ErrorLabel } from "./errorlabel.styled";
import { SectionHeaderContainer } from "./sectionHeaderContainer.styled";
import { FormHeader } from "./sectionHeader.styled";

function SectionHeader({ children, error, errorText }) {
  return (
    <SectionHeaderContainer>
      <FormHeader>{children}</FormHeader>
      {error && <ErrorLabel>{errorText}</ErrorLabel>}
    </SectionHeaderContainer>
  );
}

export default SectionHeader;
