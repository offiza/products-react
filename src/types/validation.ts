export default interface ValidationType {
  minLength?: number;
  maxLength?: number;
  length?: number;
  stringOnly?: boolean;
  numberOnly?: boolean;
  isEmpty?: boolean;
  regExp?: RegExp;
} 