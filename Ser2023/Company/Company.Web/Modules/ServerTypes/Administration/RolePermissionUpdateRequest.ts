import { ServiceRequest } from "../Services/ServiceRequest";

export interface RolePermissionUpdateRequest extends ServiceRequest {
    RoleID?: number;
    Module?: string;
    Submodule?: string;
    Permissions?: string[];
}