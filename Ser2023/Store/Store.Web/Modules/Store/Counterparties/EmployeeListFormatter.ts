import { Decorators, Formatter } from "@serenity-is/corelib";
import { FormatterContext } from "@serenity-is/sleekgrid";
import { EmployeesRow } from "../../ServerTypes/Store";

@Decorators.registerFormatter('Store.Store.EmployeeListFormatter')
export class EmployeeListFormatter implements Formatter {
    format(ctx: FormatterContext) {
        var idList = ctx.value as string[];
        if (!idList || !idList.length)
            return "";

        var byId = EmployeesRow.getLookup().itemById;
        let z: EmployeesRow;
        return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
    }
}
