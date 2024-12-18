import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'pregunta1-1', component: Pregunta1Component },
  { path: 'pregunta1-2', component: Pregunta2Component },
  { path: 'pregunta2', component: PostsComponent },
  { path: '', redirectTo: '/pregunta1-1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
