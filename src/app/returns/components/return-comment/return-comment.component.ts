import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-return-comment',
  templateUrl: './return-comment.component.html',
  styleUrls: ['./return-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReturnCommentComponent {
  @Input() set comment(value: string) {
    this.commentControl.setValue(value, { emitEvent: false });
  }
  @Output() commentChanged = new EventEmitter<string>();

  commentControl = new FormControl('');

  constructor() {
    this.commentControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.commentChanged.emit(value || '');
    });
  }
} 