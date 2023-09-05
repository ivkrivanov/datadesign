import { ServiceRequest } from "../Services/ServiceRequest";
import { UserPermissionRow } from "./UserPermissionRow";

export interface UserPermissionUpdateRequest extends ServiceRequest {
    UserID?: number;
    Module?: string;
    Submodule?: string;
    Permissions?: UserPermissionRow[];
}