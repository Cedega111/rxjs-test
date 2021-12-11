import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolutionComponent } from './components/solution.component';
import { SolutionRoutingModule } from './solution-routing.module';

@NgModule({
  imports: [
    SolutionRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SolutionComponent
  ],
})
export class SolutionModule { }
