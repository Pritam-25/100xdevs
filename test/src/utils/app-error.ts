class AppError extends Error {
    statusCode: number;
    details?: object; // Store additional error details as an object

    constructor(message: string, statusCode: number, details?: object) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor)
    }
}

export default AppError;
