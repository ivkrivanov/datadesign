export declare namespace UploadHelper {
    function addUploadInput(options: UploadInputOptions): JQuery;
    function checkImageConstraints(file: UploadResponse, opt: FileUploadConstraints): boolean;
    function fileNameSizeDisplay(name: string, bytes: number): string;
    function fileSizeDisplay(bytes: number): string;
    function hasImageExtension(filename: string): boolean;
    function thumbFileName(filename: string): string;
    function dbFileUrl(filename: string): string;
    function colorBox(link: JQuery, options: any): void;
    function populateFileSymbols(container: JQuery, items: UploadedFile[], displayOriginalName?: boolean, urlPrefix?: string): void;
}
export interface UploadedFile {
    Filename?: string;
    OriginalName?: string;
}
export interface UploadInputOptions {
    container?: JQuery;
    zone?: JQuery;
    progress?: JQuery;
    inputName?: string;
    allowMultiple?: boolean;
    fileDone?: (p1: UploadResponse, p2: string, p3: any) => void;
}
export interface UploadResponse {
    TemporaryFile: string;
    Size: number;
    IsImage: boolean;
    Width: number;
    Height: number;
}
export interface FileUploadConstraints {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    minSize?: number;
    maxSize?: number;
    allowNonImage?: boolean;
    originalNameProperty?: string;
}
