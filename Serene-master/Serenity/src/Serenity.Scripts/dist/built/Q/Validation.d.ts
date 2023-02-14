/// <reference types="jquery.validation" />
export declare function getHighlightTarget(el: HTMLElement): HTMLElement;
export declare function baseValidateOptions(): JQueryValidation.ValidationOptions;
export declare function validateForm(form: JQuery, opt: JQueryValidation.ValidationOptions): JQueryValidation.Validator;
export declare function addValidationRule(element: JQuery, eventClass: string, rule: (p1: JQuery) => string): JQuery;
export declare function removeValidationRule(element: JQuery, eventClass: string): JQuery;
