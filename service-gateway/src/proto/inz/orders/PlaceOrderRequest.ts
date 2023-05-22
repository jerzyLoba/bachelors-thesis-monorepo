// Original file: ../proto/orders/service.proto

import type { PaymentMethod as _inz_orders_PaymentMethod, PaymentMethod__Output as _inz_orders_PaymentMethod__Output } from '../../inz/orders/PaymentMethod';

export interface PlaceOrderRequest {
  'order_id'?: (number);
  'payment_method'?: (_inz_orders_PaymentMethod);
}

export interface PlaceOrderRequest__Output {
  'order_id': (number);
  'payment_method': (_inz_orders_PaymentMethod__Output);
}
