import { CountryDialog } from "@/Company/Country/CountryDialog";
import { PrefixedContext } from "@serenity-is/corelib";

export interface StateProvinceForm {
}

export class StateProvinceForm extends PrefixedContext {
    static formKey = 'Company.StateProvince';
}

[CountryDialog]; // referenced types