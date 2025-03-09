import { fieldsProxy } from "@serenity-is/corelib";

export interface NoteRow {
    NoteId?: number;
    EntityType?: string;
    EntityId?: string;
    Text?: string;
    InsertUserId?: number;
    InsertDate?: string;
    InsertUserDisplayName?: string;
}

export abstract class NoteRow {
    static readonly idProperty = 'NoteId';
    static readonly nameProperty = 'EntityType';
    static readonly localTextPrefix = 'Company.Note';
    static readonly deletePermission = 'Company:General';
    static readonly insertPermission = 'Company:General';
    static readonly readPermission = 'Company:General';
    static readonly updatePermission = 'Company:General';

    static readonly Fields = fieldsProxy<NoteRow>();
}