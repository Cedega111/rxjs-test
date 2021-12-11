import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './components/solution.component';

const solutionRoutes: Routes = [
  {
    path: '',
    component: SolutionComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(solutionRoutes)
  ],
  exports: [RouterModule]
})
export class SolutionRoutingModule {}