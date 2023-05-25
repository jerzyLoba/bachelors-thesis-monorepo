// Original file: ../proto/orders/service.proto

export const PaymentMethod = {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
} as const;

export type PaymentMethod =
  | 'CREDIT_CARD'
  | 1
  | 'BANK_TRANSFER'
  | 2

export type PaymentMethod__Output = typeof PaymentMethod[keyof typeof PaymentMethod]
