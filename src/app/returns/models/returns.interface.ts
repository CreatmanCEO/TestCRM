export interface ReturnProduct {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  supplier: string;
  returnStatus: 'returned' | 'not_returned' | null;
  comment: string;
  imageUrl: string;
} 