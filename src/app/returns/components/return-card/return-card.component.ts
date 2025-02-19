import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnProduct } from '../../models/returns.interface';
import { ReturnCommentComponent } from '../return-comment/return-comment.component';

@Component({
  selector: 'app-return-card',
  templateUrl: './return-card.component.html',
  styleUrls: ['./return-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReturnCommentComponent]
})
export class ReturnCardComponent {
  @Input() product!: ReturnProduct;
  @Output() statusChanged = new EventEmitter<{ id: string; status: 'returned' | 'not_returned' }>();
  @Output() commentChanged = new EventEmitter<{ id: string; comment: string }>();

  onReturnClick(status: 'returned' | 'not_returned'): void {
    this.statusChanged.emit({ id: this.product.id, status });
  }

  onCommentChanged(comment: string): void {
    this.commentChanged.emit({ id: this.product.id, comment });
  }
} 