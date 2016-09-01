namespace MovieTutorial.MovieDB {
    export interface PersonRow {
        PersonId?: number;
        Firstname?: string;
        Lastname?: string;
        Fullname?: string;
        BirthDate?: string;
        BirthPlace?: string;
        Gender?: Gender;
        Height?: number;
        PrimaryImage?: string;
        GalleryImages?: string;
    }

    export namespace PersonRow {
        export const idProperty = 'PersonId';
        export const nameProperty = 'Fullname';
        export const localTextPrefix = 'MovieDB.Person';
        export const lookupKey = 'MovieDB.Person';

        export function getLookup(): Q.Lookup<PersonRow> {
            return Q.getLookup<PersonRow>('MovieDB.Person');
        }

        export namespace Fields {
            export declare const PersonId: string;
            export declare const Firstname: string;
            export declare const Lastname: string;
            export declare const Fullname: string;
            export declare const BirthDate: string;
            export declare const BirthPlace: string;
            export declare const Gender: string;
            export declare const Height: string;
            export declare const PrimaryImage: string;
            export declare const GalleryImages: string;
        }

        ['PersonId', 'Firstname', 'Lastname', 'Fullname', 'BirthDate', 'BirthPlace', 'Gender', 'Height', 'PrimaryImage', 'GalleryImages'].forEach(x => (<any>Fields)[x] = x);
    }
}

