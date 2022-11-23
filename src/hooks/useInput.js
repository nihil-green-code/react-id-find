import { useState } from "react";

const useInput = (state) => {
  const [value, setValue] = useState(state);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return { value, onChange };
};

export default useInput;
