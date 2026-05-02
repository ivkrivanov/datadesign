import { fieldsProxy } from "@serenity-is/corelib/q";

export interface NotesRow {
    NoteId?: number;
    EntityType?: string;
    EntityId?: number;
    Text?: string;
    InsertUserId?: number;
    InsertDate?: string;
    InsertUserDisplayName?: string;
}

export abstract class NotesRow {
    static readonly idProperty = 'NoteId';
    static readonly nameProperty = 'EntityType';
    static readonly localTextPrefix = 'Store.Notes';
    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<NotesRow>();
}
