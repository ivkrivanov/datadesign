
import { Decorators, StringEditor, WX } from "@serenity-is/corelib";
import { isEmptyOrNull, replaceAll, startsWith, localText, trimToNull } from "@serenity-is/corelib/q";

@Decorators.registerEditor('Company.PhoneEditor')
export class PhoneEditor extends StringEditor {
    constructor(input: JQuery) {
        super(input);

        this.addValidationRule(this.uniqueName, e => {
            var value = trimToNull(this.get_value());
            if (value == null) {
                return null;
            }
            return PhoneEditor.validate(value, this.multiple);
        });

        input.bind('change', e => {
            if (!WX.hasOriginalEvent(e)) {
                return;
            }
            this.formatValue();
        });

        input.bind('blur', e => {
            if (this.element.hasClass('valid')) {
                this.formatValue();
            }
        });
    }

    protected formatValue(): void {
        this.element.val(this.getFormattedValue());
    }

    protected getFormattedValue(): string {
        var value = this.element.val();
        if (this.multiple) {
            return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone);
        }
        return PhoneEditor.formatPhone(value);
    }

    @Decorators.option()
    public multiple: boolean;

    get_value() {
        return this.getFormattedValue();
    }

    set_value(value: string) {
        this.element.val(value);
    }

    static validate(phone: string, isMultiple: boolean) {
        var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone));
        if (valid) {
            return null;
        }
        return localText((isMultiple ? 'Validation.StorePhoneMultiple' : 'Validation.StorePhone'));
    }

    static isValidPhone(phone: string) {
        if (isEmptyOrNull(phone)) {
            return false;
        }
        phone = replaceAll(replaceAll(phone, ' ', ''), '-', '');
        if (phone.length < 10) {
            return false;
        }

        if (startsWith(phone, '0')) {
            phone = phone.substring(1);
        }

        if (startsWith(phone, '(') && phone.charAt(4) === ')') {
            phone = phone.substr(1, 3) + phone.substring(5);
        }

        if (phone.length !== 12) {
            return false;
        }

        if (startsWith(phone, '0')) {
            return false;
        }

        for (var i = 0; i < phone.length; i++) {
            var c = phone.charAt(i);
            if (c < '0' || c > '9') {
                return false;
            }
        }

        return true;
    }

    static formatPhone(phone) {
        if (!PhoneEditor.isValidPhone(phone)) {
            return phone;
        }
        phone = replaceAll(replaceAll(replaceAll(replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
        if (startsWith(phone, '0')) {
            phone = phone.substring(1);
        }
        phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2) + phone.substr(10, 2);
        return phone;
    }

    static formatMulti(phone: string, format: (s: string) => string) {
        var phones = replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
        var result = '';
        for (var x of phones) {
            var s = trimToNull(x);
            if (s == null) {
                continue;
            }
            if (result.length > 0) {
                result += ', ';
            }
            result += format(s);
        }
        return result;
    }

    static isValidMulti(phone: string, check: (s: string) => boolean) {
        if (isEmptyOrNull(phone)) {
            return false;
        }
        var phones = replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
        var anyValid = false;
        for (var $t1 = 0; $t1 < phones.length; $t1++) {
            var x = phones[$t1];
            var s = trimToNull(x);
            if (s == null) {
                continue;
            }
            if (!check(s)) {
                return false;
            }
            anyValid = true;
        }
        if (!anyValid) {
            return false;
        }
        return true;
    }
}
