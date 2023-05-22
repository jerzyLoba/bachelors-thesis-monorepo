// Original file: ../proto/orders/service.proto

export const OrderStatus = {
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  SENT: 'SENT',
  FINISHED: 'FINISHED',
  CANCELED: 'CANCELED',
} as const;

export type OrderStatus =
  | 'PAYMENT_PENDING'
  | 1
  | 'SENT'
  | 2
  | 'FINISHED'
  | 3
  | 'CANCELED'
  | 4

export type OrderStatus__Output = typeof OrderStatus[keyof typeof OrderStatus]
