// Original file: ../proto/orders/service.proto

import type { PaymentMethod as _inz_orders_PaymentMethod, PaymentMethod__Output as _inz_orders_PaymentMethod__Output } from '../../inz/orders/PaymentMethod';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../google/protobuf/Timestamp';

export interface Order {
  'order_id'?: (number);
  'order_status'?: (string);
  'payment_method'?: (_inz_orders_PaymentMethod);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Order__Output {
  'order_id': (number);
  'order_status': (string);
  'payment_method': (_inz_orders_PaymentMethod__Output);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
