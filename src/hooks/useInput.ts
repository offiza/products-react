import React, { useEffect, useState } from "react";
import ValidationType from "../types/validation";
import { useValidate } from "./useValidate";

export const useInput = (
  initialValue: string | number,
  validations: ValidationType
) => {
  const [value, setValue] = useState(initialValue);
  const [focus, setFocus] = useState(false);
  const [wasFocused, setWasFocused] = useState(false);
  const validation = useValidate(value, validations);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event: any) => {
    setValue(event?.target.value);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    setWasFocused(true);
  };

  const deepValidate = () => {
    validation.validate();
    setFocus(false);
    setWasFocused(true);
  };

  useEffect(() => {
    if (validation.isEmptyError)
      return setErrorMessage("This field in required");
    if (validation.lengthError)
      return setErrorMessage(`Should contain ${validations.length} characters`);
    if (validation.stringOnlyError)
      return setErrorMessage("Only letters allowed");
    if (validation.numberOnlyError)
      return setErrorMessage("Only numbers allowed");
    if (validation.minLengthError)
      return setErrorMessage(`Min ${validations.minLength} characters`);
    if (validation.maxLengthError)
      return setErrorMessage(`Max ${validations.maxLength} characters`);
    if (validation.regExpError) return setErrorMessage("Wrong data");

    return setErrorMessage("");
  }, [validation]);

  return {
    value,
    focus,
    onChange,
    onBlur,
    onFocus,
    ...validation,
    errorMessage,
    wasFocused,
    deepValidate,
  };
};
