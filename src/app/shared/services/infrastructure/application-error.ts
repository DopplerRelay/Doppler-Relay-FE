export class  ApplicationError extends Error {
    // API Errors
    static readonly VALIDATION_ERROR = 100;
    static readonly INVALID_INTERVAL_DATE = 101;
    static readonly USER_REGISTRATION_ERROR = 102;
    static readonly DEFAULT_DOMAIN_SHOULD_BE_ACTIVE = 103;
    static readonly UNAUTHORIZED = 104;
    static readonly INVALID_TOKEN = 105;
    static readonly AUTHENTICATION_ERROR = 106;
    static readonly INVALID_TOKEN_EXPIRED = 107;
    static readonly FORBIDDEN_NO_ENOUGH_PRIVILEGES = 108;
    static readonly FORBIDDEN_WRONG_ACCOUNT = 109;
    static readonly FORBIDDEN_PENDING_ACTIVATION = 110;
    static readonly FORBIDDEN_PENDING_ACTIVATION_REQUIRED = 111;
    static readonly FORBIDDEN_UNEXPECTED_TOKEN_FORMAT = 112;
    static readonly FORBIDDEN_TEMPORAL_TOKEN = 113;
    static readonly FORBIDDEN_TEMPORAL_TOKEN_REQUIRED = 114;
    static readonly FORBIDDEN_INTERNAL_ADMIN_TOKEN_REQUIRED = 115;
    static readonly ROUTE_NOT_FOUND = 116;
    static readonly ENTITY_NOT_FOUND = 117;
    static readonly UNEXPECTED_ERROR = 118;
    static readonly NOT_IMPLEMENTED = 119;

    // FE errors
    public static PROCESSING_SERVER_RESPONSE: number = 200;

    constructor(public code: number, message?: string) {
        super(message);
    }
}