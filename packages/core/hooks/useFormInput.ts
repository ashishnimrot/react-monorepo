// In useFormInput.js
import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: any): any => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
