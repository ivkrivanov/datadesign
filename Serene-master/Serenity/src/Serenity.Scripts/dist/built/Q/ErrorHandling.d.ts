export declare namespace ErrorHandling {
    function showServiceError(error: Serenity.ServiceError): void;
    function runtimeErrorHandler(message: string, filename?: string, lineno?: number, colno?: number, error?: Error): void;
}
