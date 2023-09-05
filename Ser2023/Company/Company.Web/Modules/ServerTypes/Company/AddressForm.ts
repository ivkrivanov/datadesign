import { StateProvinceDialog } from "@/Company/StateProvince/StateProvinceDialog";
import { PrefixedContext } from "@serenity-is/corelib";

export interface AddressForm {
}

export class AddressForm extends PrefixedContext {
    static formKey = 'Company.Address';
}

[StateProvinceDialog]; // referenced types