// Original file: ../proto/cart/service.proto


export interface RemoveFromCartRequest {
  'user_id'?: (string);
  'cart_id'?: (string);
  'product_id'?: (number);
  'quantity'?: (number);
}

export interface RemoveFromCartRequest__Output {
  'user_id': (string);
  'cart_id': (string);
  'product_id': (number);
  'quantity': (number);
}
