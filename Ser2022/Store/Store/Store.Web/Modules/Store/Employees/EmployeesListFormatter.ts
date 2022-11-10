namespace Store.Store {

    //@Serenity.Decorators.registerFormatter()
    //export class EmployeesListFormatter implements Slick.Formatter {
    //    format(ctx: Slick.FormatterContext) {
    //        var idList = ctx.value as string[];
    //        if (!idList || !idList.length)
    //            return "";

    //        var byId = EmployeesRow.getLookup().itemById;
    //        let z: EmployeesRow;
    //        return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
    //    }
    //}

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            if (!this.genderProperty) {
                return text;
            }

            var gender = ctx.item[this.genderProperty];
            return "<span class='" + ((gender === Gender.Female) ?
                'employee-symbol female' : 'employee-symbol male') +
                "'>" + text + '</span>';
        }

        @Serenity.Decorators.option()
        public genderProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];
            if (this.genderProperty)
                column.referencedFields.push(this.genderProperty);
        }
    }
}