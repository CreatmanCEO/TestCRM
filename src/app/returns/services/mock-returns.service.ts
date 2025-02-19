import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReturnProduct } from '../models/returns.interface';

@Injectable({
  providedIn: 'root'
})
export class MockReturnsService {
  private mockData: ReturnProduct[] = [
    {
      id: '1',
      name: 'Футболка белая',
      color: 'Белый',
      size: 'M',
      quantity: 1,
      price: 1789,
      supplier: '22-24',
      returnStatus: null,
      comment: '',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      name: 'Джинсы',
      color: 'Синий',
      size: '32',
      quantity: 1,
      price: 1789,
      supplier: '22-24',
      returnStatus: null,
      comment: '',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      name: 'Куртка',
      color: 'Черный',
      size: 'L',
      quantity: 1,
      price: 1789,
      supplier: '22-24',
      returnStatus: null,
      comment: '',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  getReturns(): Observable<ReturnProduct[]> {
    return of(this.mockData);
  }

  updateReturnStatus(id: string, status: 'returned' | 'not_returned'): Observable<ReturnProduct> {
    const product = this.mockData.find(item => item.id === id);
    if (product) {
      product.returnStatus = status;
    }
    return of(product!);
  }

  updateComment(id: string, comment: string): Observable<ReturnProduct> {
    const product = this.mockData.find(item => item.id === id);
    if (product) {
      product.comment = comment;
    }
    return of(product!);
  }
} 