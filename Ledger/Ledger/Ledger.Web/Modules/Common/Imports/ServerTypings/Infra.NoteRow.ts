namespace Ledger.Infra {
    export interface NoteRow {
        NoteID?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteID';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'Infra.Note';

        export namespace Fields {
            export declare const NoteID: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const InsertUserDisplayName: string;
        }

        ['NoteID', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(x => (<any>Fields)[x] = x);
    }
}

