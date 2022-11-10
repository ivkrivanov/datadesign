namespace Store.Store {

    @Serenity.Decorators.registerFormatter()
    export class EmployeesListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = EmployeesRow.getLookup().itemById;
            let z: EmployeesRow;
            return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
        }
    }
}