import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CartServiceClient as _inz_cart_CartServiceClient, CartServiceDefinition as _inz_cart_CartServiceDefinition } from './inz/cart/CartService';
import type { OrdersServiceClient as _inz_orders_OrdersServiceClient, OrdersServiceDefinition as _inz_orders_OrdersServiceDefinition } from './inz/orders/OrdersService';
import type { ProductsServiceClient as _inz_products_ProductsServiceClient, ProductsServiceDefinition as _inz_products_ProductsServiceDefinition } from './inz/products/ProductsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  inz: {
    cart: {
      AddToCartRequest: MessageTypeDefinition
      AddToCartResponse: MessageTypeDefinition
      Cart: MessageTypeDefinition
      CartService: SubtypeConstructor<typeof grpc.Client, _inz_cart_CartServiceClient> & { service: _inz_cart_CartServiceDefinition }
      GetCartRequest: MessageTypeDefinition
      GetCartResponse: MessageTypeDefinition
      RemoveFromCartRequest: MessageTypeDefinition
      RemoveFromCartResponse: MessageTypeDefinition
    }
    orders: {
      GetUserOrdersRequest: MessageTypeDefinition
      GetUserOrdersResponse: MessageTypeDefinition
      Order: MessageTypeDefinition
      OrderStatus: EnumTypeDefinition
      OrdersService: SubtypeConstructor<typeof grpc.Client, _inz_orders_OrdersServiceClient> & { service: _inz_orders_OrdersServiceDefinition }
      PaymentMethod: EnumTypeDefinition
      PlaceOrderRequest: MessageTypeDefinition
      PlaceOrderResponse: MessageTypeDefinition
    }
    products: {
      DescreaseProductQuantityRequest: MessageTypeDefinition
      DescreaseProductQuantityResponse: MessageTypeDefinition
      ExtendedProduct: MessageTypeDefinition
      GetProductDetailsRequest: MessageTypeDefinition
      GetProductDetailsResponse: MessageTypeDefinition
      GetProductsRequest: MessageTypeDefinition
      GetProductsResponse: MessageTypeDefinition
      Product: MessageTypeDefinition
      ProductParamsRequest: MessageTypeDefinition
      ProductParamsResponse: MessageTypeDefinition
      ProductsService: SubtypeConstructor<typeof grpc.Client, _inz_products_ProductsServiceClient> & { service: _inz_products_ProductsServiceDefinition }
    }
  }
}

