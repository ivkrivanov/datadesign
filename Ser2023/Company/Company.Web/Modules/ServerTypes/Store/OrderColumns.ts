import { ShippingState } from "./ShippingState";
import { ShipperFormatter } from "@/Store/Shippers/ShipperFormatter";

export class OrderColumns {
    static columnsKey = 'Store.Order';
}

[ShippingState, ShipperFormatter]; // referenced types