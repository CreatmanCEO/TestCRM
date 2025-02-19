import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ReturnsService } from '../../services/returns.service';
import { ReturnProduct } from '../../models/returns.interface';
import { ReturnCardComponent } from '../return-card/return-card.component';

@Component({
  selector: 'app-returns-page',
  templateUrl: './returns-page.component.html',
  styleUrls: ['./returns-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReturnCardComponent]
})
export class ReturnsPageComponent implements OnInit, OnDestroy {
  returns$: Observable<ReturnProduct[]>;
  private destroy$ = new Subject<void>();

  constructor(private returnsService: ReturnsService) {
    this.returns$ = this.returnsService.getReturns();
  }

  ngOnInit(): void {}

  onStatusChanged(event: { id: string; status: 'returned' | 'not_returned' }): void {
    this.returnsService.updateReturnStatus(event.id, event.status)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  onCommentChanged(event: { id: string; comment: string }): void {
    this.returnsService.updateComment(event.id, event.comment)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
} 