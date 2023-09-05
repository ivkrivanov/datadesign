import { ServiceRequest } from "../Services/ServiceRequest";

export interface ResetPasswordRequest extends ServiceRequest {
    Token?: string;
    NewPassword?: string;
    ConfirmPassword?: string;
}