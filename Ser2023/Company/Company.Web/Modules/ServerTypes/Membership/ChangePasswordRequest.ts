import { ServiceRequest } from "../Services/ServiceRequest";

export interface ChangePasswordRequest extends ServiceRequest {
    OldPassword?: string;
    NewPassword?: string;
    ConfirmPassword?: string;
}