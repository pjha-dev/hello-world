import { AppError } from "./AppError";

export class NotFoundError extends AppError {
    constructor(Originalerror?: any) {
        super();
    }
}