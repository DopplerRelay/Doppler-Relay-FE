import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";

@Injectable()
export class ErrorHandlerService {

  static nextError: Subject<ApplicationError> = new Subject<ApplicationError>();

  constructor() { }
}

export function HandleError(nextError?: Subject<ApplicationError>) {
    
    return function HandleError(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

      // save a reference to the original method this way we keep the values currently in the
      // descriptor and don't overwrite what another decorator might have done to the descriptor.
      if(descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
      }
      
      let originalMethod = descriptor.value;
  
      descriptor.value = function () {

          try {
            // note usage of originalMethod here
            let result = originalMethod.apply(this, arguments);
            return result;
          }
          catch (error) {
            console.error(error);
            
            let applicationError = error as ApplicationError;
            if (!applicationError) {
              applicationError = new ApplicationError(ApplicationError.UNEXPECTED_ERROR);
            }

            if (nextError) {
              nextError.next(applicationError);
            } else {
              ErrorHandlerService.nextError.next(applicationError);
            }
          }
      };
  
      // return edited descriptor as opposed to overwriting the descriptor
      return descriptor;
    };
};
