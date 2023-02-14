/// <reference types="jquery.validation" />
import { Widget } from "../Widgets/Widget";
export declare namespace ValidationHelper {
    function asyncSubmit(form: JQuery, validateBeforeSave: () => boolean, submitHandler: () => void): boolean;
    function submit(form: JQuery, validateBeforeSave: () => boolean, submitHandler: () => void): boolean;
    function getValidator(element: JQuery): JQueryValidation.Validator;
}
export declare namespace VX {
    function addValidationRule(element: JQuery, eventClass: string, rule: (p1: JQuery) => string): JQuery;
    function removeValidationRule(element: JQuery, eventClass: string): JQuery;
    function validateElement(validator: JQueryValidation.Validator, widget: Widget<any>): boolean;
}
