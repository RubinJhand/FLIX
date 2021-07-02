import { useState } from 'react';

const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const inputReset = () => {
    setInputValue(initialValue);
  };

  const bind = {
    value: inputValue,
    onChange: (e) => {
      setInputValue(e.target.value);
    }
  };

  return [inputValue, bind, inputReset];
};

export default useInput;
