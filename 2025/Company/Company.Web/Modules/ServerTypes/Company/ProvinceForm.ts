import { StringEditor, LookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CountryDialog } from "../../Company/Country/CountryDialog";

export interface ProvinceForm {
    ProvinceCode: StringEditor;
    CountryId: LookupEditor;
    ProvinceName: StringEditor;
}

export class ProvinceForm extends PrefixedContext {
    static readonly formKey = 'Company.Province';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ProvinceForm.init)  {
            ProvinceForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(ProvinceForm, [
                'ProvinceCode', w0,
                'CountryId', w1,
                'ProvinceName', w0
            ]);
        }
    }
}

queueMicrotask(() => [CountryDialog]); // referenced dialogs