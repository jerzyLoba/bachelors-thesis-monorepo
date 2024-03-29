// Original file: ../proto/cart/service.proto


export interface AddToCartRequest {
  'user_id'?: (number);
  'cart_id'?: (string);
  'product_id'?: (number);
  'quantity'?: (number);
}

export interface AddToCartRequest__Output {
  'user_id': (number);
  'cart_id': (string);
  'product_id': (number);
  'quantity': (number);
}
