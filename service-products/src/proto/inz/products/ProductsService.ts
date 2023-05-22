// Original file: ../proto/products/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetProductDetailsRequest as _inz_products_GetProductDetailsRequest, GetProductDetailsRequest__Output as _inz_products_GetProductDetailsRequest__Output } from '../../inz/products/GetProductDetailsRequest';
import type { GetProductDetailsResponse as _inz_products_GetProductDetailsResponse, GetProductDetailsResponse__Output as _inz_products_GetProductDetailsResponse__Output } from '../../inz/products/GetProductDetailsResponse';
import type { GetProductsRequest as _inz_products_GetProductsRequest, GetProductsRequest__Output as _inz_products_GetProductsRequest__Output } from '../../inz/products/GetProductsRequest';
import type { GetProductsResponse as _inz_products_GetProductsResponse, GetProductsResponse__Output as _inz_products_GetProductsResponse__Output } from '../../inz/products/GetProductsResponse';

export interface ProductsServiceClient extends grpc.Client {
  GetProductDetails(argument: _inz_products_GetProductDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_products_GetProductDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_products_GetProductDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_products_GetProductDetailsRequest, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_products_GetProductDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_products_GetProductDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_products_GetProductDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_products_GetProductDetailsRequest, callback: grpc.requestCallback<_inz_products_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  
  GetProducts(argument: _inz_products_GetProductsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_products_GetProductsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_products_GetProductsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_products_GetProductsRequest, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_products_GetProductsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_products_GetProductsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_products_GetProductsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_products_GetProductsRequest, callback: grpc.requestCallback<_inz_products_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetProductDetails: grpc.handleUnaryCall<_inz_products_GetProductDetailsRequest__Output, _inz_products_GetProductDetailsResponse>;
  
  GetProducts: grpc.handleUnaryCall<_inz_products_GetProductsRequest__Output, _inz_products_GetProductsResponse>;
  
}

export interface ProductsServiceDefinition extends grpc.ServiceDefinition {
  GetProductDetails: MethodDefinition<_inz_products_GetProductDetailsRequest, _inz_products_GetProductDetailsResponse, _inz_products_GetProductDetailsRequest__Output, _inz_products_GetProductDetailsResponse__Output>
  GetProducts: MethodDefinition<_inz_products_GetProductsRequest, _inz_products_GetProductsResponse, _inz_products_GetProductsRequest__Output, _inz_products_GetProductsResponse__Output>
}
