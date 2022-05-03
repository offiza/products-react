import React, { useEffect, useState } from 'react';
import ValidationType from '../types/validation';


export const useValidate = (value: string | number, validations: ValidationType) => {
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [regExpError, setRegExpError] = useState(false);
  const [stringOnlyError, setStringOnlyError] = useState(false);
  const [numberOnlyError, setNumberOnlyError] = useState(false);


  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value.toString().length === 0 ?
            setIsEmptyError(true) : setIsEmptyError(false)
          break;
        case 'minLength':
          if (validations && validations.minLength) {
            value.toString().length < validations.minLength ?
              setMinLengthError(true) : setMinLengthError(false)
          }
          break;
        case 'maxLength':
          if (validations && validations.maxLength) {
            value.toString().length < validations.maxLength ?
              setMaxLengthError(true) : setMaxLengthError(false)
          }
          break;
        case 'length':
          if (validations && validations.length) {
            value.toString().length === validations.length ?
              setLengthError(false) : setLengthError(true)
          }
          break;
        case 'regExp':
          if (validations && validations.regExp) {
            validations.regExp.test(value.toString()) ?
              setRegExpError(false) : setRegExpError(true)
          }
          break;
        case 'stringOnly':
          /^([а-яё]+|[a-z]+)$/i.test(value.toString()) ?
            setStringOnlyError(false) : setStringOnlyError(true);
          break;
        case 'numberOnly':
          /([0-9]+)$/i.test(value.toString()) ?
            setNumberOnlyError(false) : setNumberOnlyError(true)
          break;
      }
    }
  }, [value]);

  return {
    isEmptyError,
    minLengthError,
    maxLengthError,
    regExpError,
    stringOnlyError,
    numberOnlyError,
    lengthError
  }
}