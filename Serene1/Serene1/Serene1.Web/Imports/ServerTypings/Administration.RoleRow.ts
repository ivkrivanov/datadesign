﻿namespace Serene1.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = '';

        export function getLookup(): Q.Lookup<RoleRow> {
            return Q.getLookup<RoleRow>('');
        }

        export declare const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId"
        }
    }
}

