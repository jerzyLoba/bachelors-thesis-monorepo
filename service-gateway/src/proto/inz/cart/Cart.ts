// Original file: ../proto/cart/service.proto

import type { Product as _inz_products_Product, Product__Output as _inz_products_Product__Output } from '../../inz/products/Product';
import type { Long } from '@grpc/proto-loader';

export interface Cart {
  'cart_id'?: (string);
  'user_id'?: (string);
  'products'?: (_inz_products_Product)[];
  'updated_at'?: (number | string | Long);
}

export interface Cart__Output {
  'cart_id': (string);
  'user_id': (string);
  'products': (_inz_products_Product__Output)[];
  'updated_at': (string);
}
