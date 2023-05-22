import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CartServiceClient as _inz_cart_CartServiceClient, CartServiceDefinition as _inz_cart_CartServiceDefinition } from './inz/cart/CartService';
import type { ProductsServiceClient as _inz_products_ProductsServiceClient, ProductsServiceDefinition as _inz_products_ProductsServiceDefinition } from './inz/products/ProductsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
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

