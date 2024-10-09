import { Decorators, Formatter } from "@serenity-is/corelib";
import { replaceAll, htmlEncode } from "@serenity-is/corelib/q";
import { FormatterContext } from "@serenity-is/sleekgrid";

@Decorators.registerFormatter('Company.Store.ShipperFormatter')
export class ShipperFormatter implements Formatter {
    format(ctx: FormatterContext) {

        return "<span class='shipper-symbol shipper-" +
            replaceAll((ctx.value || '').toString(), ' ', '') +
            "'>" + htmlEncode(ctx.value) + '</span>';

        //if (!ctx.value)
        //    return ctx.escape();

        //return `<i class="text-info ${faIcon(ctx.value == "Speedy Express" ? "plane" :
        //    (ctx.value == "Federal Shipping" ? "ship" : "truck"))}  text-opacity-75"></i> ${ctx.escape()}`;
    }
}
