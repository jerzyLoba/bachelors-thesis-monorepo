import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProductsServiceClient as _inz_ProductsServiceClient, ProductsServiceDefinition as _inz_ProductsServiceDefinition } from './inz/ProductsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inz: {
    ExtendedProduct: MessageTypeDefinition
    GetProductDetailsRequest: MessageTypeDefinition
    GetProductDetailsResponse: MessageTypeDefinition
    GetProductsRequest: MessageTypeDefinition
    GetProductsResponse: MessageTypeDefinition
    Product: MessageTypeDefinition
    ProductParamsRequest: MessageTypeDefinition
    ProductParamsResponse: MessageTypeDefinition
    ProductsService: SubtypeConstructor<typeof grpc.Client, _inz_ProductsServiceClient> & { service: _inz_ProductsServiceDefinition }
  }
}

