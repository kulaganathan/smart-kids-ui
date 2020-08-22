import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Questions } from './quiz/questions';

@Injectable()
export class QuestionService {

  private questions: Questions;
  private questionsURL = 'assets/questions.json';
  
  constructor(private httpClient: HttpClient) {
    const myObserver = {
      next: x => {
        console.log(x);
        this.questions = x as Questions;
        console.log(this.questions);
      },
      error: err => console.log(err),
      complete: () => {
        console.log('completed');
      }
    };
    this.httpClient.get<Array<Questions>>(this.questionsURL);
    console.log('May be this will get printed first.');
  }

  getQuestion(): Questions {
    return this.questions;
  }

}
