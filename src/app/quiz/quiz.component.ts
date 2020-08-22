import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, JsonpClientBackend } from '@angular/common/http';
import { Questions } from './questions';
import { QuestionService } from '../question.service';
import { Question } from './question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuestionService],
})
export class QuizComponent implements OnInit {

  questions: Questions;
  private questionsURL = 'assets/questions.json';
  answer: string;

  constructor(private questionService: QuestionService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getNewQuestions();
  }

  getNewQuestions(): void {
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
    this.http.get<Array<Questions>>(this.questionsURL).subscribe(myObserver);
  }

  onSubmit(value: string): void {
    console.log('value is: ' + value);
    this.answer = value;
    if (this.answer === this.questions.questions[0].answer) {
      window.alert('Yay!!');
      console.log('Yay!!');
    }else{
      window.alert('Incorrect answer..please try again!');
    }
  }

}
