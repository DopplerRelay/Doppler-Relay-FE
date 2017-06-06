import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";

@Injectable()
export class ErrorHandlerService {

  nextError: Subject<ApplicationError> = new Subject<ApplicationError>();

  constructor() { }

  executeSafely(func: () => void, handleError?: (param: ApplicationError) => void): void {
    try {
      func();
    }
    catch (error) {
      console.error(error);

      let applicationError = error as ApplicationError;

      if (!applicationError) {
        applicationError = new ApplicationError(ApplicationError.UNEXPECTED_ERROR);
      }

      if (handleError != null) {
        handleError(applicationError)
      } else {
        this.nextError.next(applicationError);
      }
    }
  }
}
