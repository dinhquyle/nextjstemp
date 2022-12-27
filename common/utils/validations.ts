import { TValidators } from "../types";

interface IValidations {
  [key: string]: {
    regex?: RegExp;
    message: string;
    message_after?: string;
  };
}

const validations: IValidations = {
  required: {
    message: `This field is required`,
  },
  phone: {
    regex:
      /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
    message: `Invalid phone number`,
  },
  minSize: {
    message: `Minimum `,
    message_after: ` characters required`,
  },
  maxSize: {
    message: `Maximum `,
    message_after: ` characters allowed`,
  },
  zip: {
    regex: /^\d{6}$|^\d{5}$|^\d{5}|^\d{3}-\d{4}$/,
    message: `Invalid zip format`,
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: `Invalid email address`,
  },
  furigana: {
    regex: /^(?:[ぁ-ゞ|ァ-ヾ\s]+)*$/,
    message: `Invalid furigana text`,
  },
  katakana: {
    regex: /^(?:[ァ-ヾ\s]+)*$/,
    message: `Invalid furigana text`,
  },
  integer: {
    regex: /^[\-\+]?\d+$/,
    message: `Invalid number`,
  },
  number: {
    // Number, including positive, negative, and floating decimal. credit: orefalo
    regex: /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
    message: `Invalid floating decimal number`,
  },
  letter: {
    regex: /^[a-zA-Z\ \']+$/,
    message: `Letter only`,
  },
};

const isValidated = (
  valueInput: string | string[] | undefined,
  validators?: TValidators
): string => {
  if (validators) {
    for (const [key, value] of Object.entries(validators)) {
      switch (key) {
        case `required`:
          if (value) {
            if (Array.isArray(valueInput)) {
              if (valueInput.length === 0) return validations[key].message;
            } else if (typeof valueInput === `undefined` || valueInput === ``) {
              return validations[key].message;
            }
          }
          break;
        case `minSize`:
          if (valueInput && valueInput.length < value) {
            return (
              validations[key].message + value + validations[key].message_after
            );
          }
          break;
        case `maxSize`:
          if (valueInput && valueInput.length > value) {
            return (
              validations[key].message + value + validations[key].message_after
            );
          }
          break;
        default:
          if (
            valueInput &&
            typeof valueInput === `string` &&
            !validations[key]?.regex?.test(valueInput)
          ) {
            return validations[key].message;
          }
      }
    }
  }
  return ``;
};

export { validations, isValidated };
