export class  ApplicationError extends Error {
    public static UNEXPECTED: number = 100;
    public static UNAUTHORIZED: number = 101;
    public static INVALID_SERVER_RESPONSE: number = 102;

    constructor(public code: number, message?: string) {
        super(message);
    }
}