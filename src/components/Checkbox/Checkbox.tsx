import { FC } from "react";
import { ICheckbox } from "@/interfaces";
import { CheckboxLabel, CheckboxInput, Checkmark } from "./styles";

const Checkbox: FC<ICheckbox> = (props) => {
  const { id, name, checked, onChange } = props;

  return (
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Checkmark className="checkmark" />
    </CheckboxLabel>
  );
};

export default Checkbox;
