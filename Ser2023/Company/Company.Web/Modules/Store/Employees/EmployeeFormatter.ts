import { Decorators, Formatter, IInitializeColumn, ISlickFormatter } from "@serenity-is/corelib";
import { htmlEncode, isTrimmedEmpty } from "@serenity-is/corelib/q";
import { Column, FormatterContext } from "@serenity-is/sleekgrid";
import { Gender } from "../../ServerTypes/Store";

@Decorators.registerFormatter('Company.Store.EmployeeFormatter', [IInitializeColumn])
export class EmployeeFormatter implements Formatter {
    genderProperty: any;
    constructor(public readonly props: { genderProperty?: string } = {}) {
        this.props ??= {};
    }

    format(ctx: FormatterContext) {
        let text = htmlEncode(ctx.value);

        if (!this.genderProperty) {
            return text;
        }

        if (!this.props.genderProperty || isTrimmedEmpty(ctx.value))
            return text;

        var gender = ctx.item[this.genderProperty];
        return "<span class='" + ((gender === Gender.Female) ?
            'employee-symbol female' : 'employee-symbol male') +
            "'>" + text + '</span>';

        //let female = ctx.item[this.props.genderProperty] === Gender.Female;
        //return `<i class="${faIcon(female ?
        //    "female" : "male", female ? "danger" : "primary")} +
        //    ' text-opacity-75"></i>` + text;
    }

    public initializeColumn(column: Column) {
        column.referencedFields = column.referencedFields || [];
        if (this.props.genderProperty)
            column.referencedFields.push(this.props.genderProperty);
    }
}

//@Decorators.registerFormatter('Store.EmployeeFormatter', [ISlickFormatter, IInitializeColumn])
//export class EmployeeFormatter implements Formatter {
//    format(ctx: FormatterContext) {
//        var text = htmlEncode(ctx.value);

//        if (!this.genderProperty || isTrimmedEmpty(ctx.value)) {
//            return text;
//        }

//        var gender = ctx.item[this.genderProperty];
//        return '<i class="fa fa-' + ((gender === Gender.Female) ?
//            'female text-danger' : 'male text-primary') + ' text-opacity-75"></i>' + text;
//    }

//    @Decorators.option()
//    public genderProperty: string;

//    public initializeColumn(column: Column) {
//        column.referencedFields = column.referencedFields || [];
//        if (this.genderProperty)
//            column.referencedFields.push(this.genderProperty);
//    }
//}
