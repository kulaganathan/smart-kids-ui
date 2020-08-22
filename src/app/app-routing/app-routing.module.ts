import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';
import { TwoDigitMathComponent } from '../two-digit-math/two-digit-math.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'app-two-digit-math', component: TwoDigitMathComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
