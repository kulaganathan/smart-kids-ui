import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../quiz/questions';

@Component({
  selector: 'app-two-digit-math',
  templateUrl: './two-digit-math.component.html',
  styleUrls: ['./two-digit-math.component.css']
})
export class TwoDigitMathComponent implements OnInit {

  questions: Questions;
  private questionsURL = 'assets/questions.json';
  answer: string;

  constructor(private http: HttpClient) {
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

  onSubmit(value1: string, value2: string): void {
    console.log('value is: ' + (value1 + value2));
    this.answer = (value1 + value2);
    if (this.answer === this.questions.questions[0].answer) {
      window.alert('Yay!!');
      console.log('Yay!!');
    } else {
      window.alert('Incorrect answer..please try again!');
    }
  }


}
