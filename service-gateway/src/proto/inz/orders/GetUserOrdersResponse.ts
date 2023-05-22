// Original file: ../proto/orders/service.proto

import type { Order as _inz_orders_Order, Order__Output as _inz_orders_Order__Output } from '../../inz/orders/Order';

export interface GetUserOrdersResponse {
  'user_id'?: (number);
  'orders'?: (_inz_orders_Order)[];
}

export interface GetUserOrdersResponse__Output {
  'user_id': (number);
  'orders': (_inz_orders_Order__Output)[];
}
