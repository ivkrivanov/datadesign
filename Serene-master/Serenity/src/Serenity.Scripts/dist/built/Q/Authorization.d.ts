import { UserDefinition } from "./UserDefinition";
export declare namespace Authorization {
    function hasPermission(permission: string): boolean;
    function validatePermission(permission: string): void;
}
export declare namespace Authorization {
    let isLoggedIn: boolean;
    let username: string;
    let userDefinition: UserDefinition;
}
