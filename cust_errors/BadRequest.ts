import { AppError } from './AppError';
export class BadRequest extends AppError {
    constructor(OriginalError?: any) {
        super();
    }
}