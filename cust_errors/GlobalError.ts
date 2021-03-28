import { ErrorHandler } from "@angular/core";

export class GlobalError implements ErrorHandler {
    handleError(error: any) {
        console.log('+++++++++++++++++++Unexpected error occured-----------');
    }
}