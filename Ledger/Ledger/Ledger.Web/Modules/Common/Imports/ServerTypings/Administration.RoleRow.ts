﻿namespace Ledger.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = 'Administration.Role';

        export function getLookup(): Q.Lookup<RoleRow> {
            return Q.getLookup<RoleRow>('Administration.Role');
        }

        export namespace Fields {
            export declare const RoleId: string;
            export declare const RoleName: string;
            export declare const TenantId: string;
        }

        ['RoleId', 'RoleName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}

