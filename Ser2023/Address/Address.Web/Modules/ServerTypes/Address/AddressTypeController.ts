import { RouteData } from "../Microsoft/AspNetCore.Routing.RouteData";
import { ModelStateDictionary } from "../Microsoft/AspNetCore.Mvc.ModelBinding.ModelStateDictionary";
import { ControllerContext } from "../Microsoft/AspNetCore.Mvc.ControllerContext";
import { ClaimsPrincipal } from "../System/Security.Claims.ClaimsPrincipal";

export interface AddressTypeController {
    RouteData?: RouteData;
    ModelState?: ModelStateDictionary;
    ControllerContext?: ControllerContext;
    User?: ClaimsPrincipal;
}
