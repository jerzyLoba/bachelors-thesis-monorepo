import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _inz_auth_AuthServiceClient, AuthServiceDefinition as _inz_auth_AuthServiceDefinition } from './inz/auth/AuthService';
import type { CartServiceClient as _inz_cart_CartServiceClient, CartServiceDefinition as _inz_cart_CartServiceDefinition } from './inz/cart/CartService';
import type { OrdersServiceClient as _inz_orders_OrdersServiceClient, OrdersServiceDefinition as _inz_orders_OrdersServiceDefinition } from './inz/orders/OrdersService';
import type { ProductsServiceClient as _inz_products_ProductsServiceClient, ProductsServiceDefinition as _inz_products_ProductsServiceDefinition } from './inz/products/ProductsService';
import type { UsersServiceClient as _inz_users_UsersServiceClient, UsersServiceDefinition as _inz_users_UsersServiceDefinition } from './inz/users/UsersService';

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
    auth: {
      AuthService: SubtypeConstructor<typeof grpc.Client, _inz_auth_AuthServiceClient> & { service: _inz_auth_AuthServiceDefinition }
      GenerateTokenRequest: MessageTypeDefinition
      GenerateTokenResponse: MessageTypeDefinition
      InavlidateTokenRequest: MessageTypeDefinition
      InavlidateTokenResponse: MessageTypeDefinition
      ValidateTokenRequest: MessageTypeDefinition
      ValidateTokenResponse: MessageTypeDefinition
    }
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
    users: {
      GetUserIdRequest: MessageTypeDefinition
      GetUserIdResponse: MessageTypeDefinition
      LoginRequest: MessageTypeDefinition
      LoginResponse: MessageTypeDefinition
      RegisterRequest: MessageTypeDefinition
      RegisterResponse: MessageTypeDefinition
      UsersService: SubtypeConstructor<typeof grpc.Client, _inz_users_UsersServiceClient> & { service: _inz_users_UsersServiceDefinition }
    }
  }
}

