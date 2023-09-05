import { ServiceRequest } from "../Services/ServiceRequest";

export interface ForgotPasswordRequest extends ServiceRequest {
    Email?: string;
}