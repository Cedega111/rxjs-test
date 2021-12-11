import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./solution/solution.module').then(m => m.SolutionModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  {
    path: '**', redirectTo: '/solution', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
