// Original file: ../proto/products/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetProductDetailsRequest as _inz_GetProductDetailsRequest, GetProductDetailsRequest__Output as _inz_GetProductDetailsRequest__Output } from '../inz/GetProductDetailsRequest';
import type { GetProductDetailsResponse as _inz_GetProductDetailsResponse, GetProductDetailsResponse__Output as _inz_GetProductDetailsResponse__Output } from '../inz/GetProductDetailsResponse';
import type { GetProductsRequest as _inz_GetProductsRequest, GetProductsRequest__Output as _inz_GetProductsRequest__Output } from '../inz/GetProductsRequest';
import type { GetProductsResponse as _inz_GetProductsResponse, GetProductsResponse__Output as _inz_GetProductsResponse__Output } from '../inz/GetProductsResponse';

export interface ProductsServiceClient extends grpc.Client {
  GetProductDetails(argument: _inz_GetProductDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_GetProductDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_GetProductDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  GetProductDetails(argument: _inz_GetProductDetailsRequest, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_GetProductDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_GetProductDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_GetProductDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  getProductDetails(argument: _inz_GetProductDetailsRequest, callback: grpc.requestCallback<_inz_GetProductDetailsResponse__Output>): grpc.ClientUnaryCall;
  
  GetProducts(argument: _inz_GetProductsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_GetProductsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_GetProductsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  GetProducts(argument: _inz_GetProductsRequest, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_GetProductsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_GetProductsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_GetProductsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  getProducts(argument: _inz_GetProductsRequest, callback: grpc.requestCallback<_inz_GetProductsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetProductDetails: grpc.handleUnaryCall<_inz_GetProductDetailsRequest__Output, _inz_GetProductDetailsResponse>;
  
  GetProducts: grpc.handleUnaryCall<_inz_GetProductsRequest__Output, _inz_GetProductsResponse>;
  
}

export interface ProductsServiceDefinition extends grpc.ServiceDefinition {
  GetProductDetails: MethodDefinition<_inz_GetProductDetailsRequest, _inz_GetProductDetailsResponse, _inz_GetProductDetailsRequest__Output, _inz_GetProductDetailsResponse__Output>
  GetProducts: MethodDefinition<_inz_GetProductsRequest, _inz_GetProductsResponse, _inz_GetProductsRequest__Output, _inz_GetProductsResponse__Output>
}
