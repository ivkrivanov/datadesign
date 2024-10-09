import { ShippingState } from "./ShippingState";
import { ShipperFormatter } from "@/Store/Shippers/ShipperFormatter";

export class WaresOrderColumns {
    static columnsKey = 'Store.WaresOrder';
}

[ShippingState, ShipperFormatter]; // referenced types