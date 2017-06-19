import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from "app/shared/services/infrastructure/error-handler/error-handler.service";
import { ApplicationError } from "app/shared/services/infrastructure/application-error";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  currentError = "";

  constructor() { }

  ngOnInit() {
    ErrorHandlerService.nextError.subscribe(error => {
      switch (error.code)
      {
        case ApplicationError.UNAUTHORIZED: this.currentError = "You need to login to perform this action"; break;
        default: this.currentError = "An error occured performing this action";
      }
    });
  }

}
