namespace Ledger.Infra {
    export interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
        TenantId?: number;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'Infra.Note';

        export namespace Fields {
            export declare const NoteId: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const InsertUserDisplayName: string;
            export declare const TenantId: string;
        }

        ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}

