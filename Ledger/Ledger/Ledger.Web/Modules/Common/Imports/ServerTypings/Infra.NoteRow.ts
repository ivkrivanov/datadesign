namespace Ledger.Infra {
    export interface NoteRow {
        NoteID?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserDisplayName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'Infra.Note';

        export namespace Fields {
            export declare const NoteID: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserDisplayName: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['NoteID', 'EntityType', 'EntityId', 'Text', 'InsertUserDisplayName', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

