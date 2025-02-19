import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReturnsRoutingModule } from './returns-routing.module';
import { ReturnsPageComponent } from './components/returns-page/returns-page.component';
import { ReturnCardComponent } from './components/return-card/return-card.component';
import { ReturnCommentComponent } from './components/return-comment/return-comment.component';
import { ReturnsService } from './services/returns.service';
import { MockReturnsService } from './services/mock-returns.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReturnsRoutingModule,
    ReturnsPageComponent,
    ReturnCardComponent,
    ReturnCommentComponent
  ],
  providers: [
    { provide: ReturnsService, useClass: MockReturnsService }
  ]
})
export class ReturnsModule { } 