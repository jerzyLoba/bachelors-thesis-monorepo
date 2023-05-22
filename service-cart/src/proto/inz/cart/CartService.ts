// Original file: ../proto/cart/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddToCartRequest as _inz_cart_AddToCartRequest, AddToCartRequest__Output as _inz_cart_AddToCartRequest__Output } from '../../inz/cart/AddToCartRequest';
import type { AddToCartResponse as _inz_cart_AddToCartResponse, AddToCartResponse__Output as _inz_cart_AddToCartResponse__Output } from '../../inz/cart/AddToCartResponse';
import type { GetCartRequest as _inz_cart_GetCartRequest, GetCartRequest__Output as _inz_cart_GetCartRequest__Output } from '../../inz/cart/GetCartRequest';
import type { GetCartResponse as _inz_cart_GetCartResponse, GetCartResponse__Output as _inz_cart_GetCartResponse__Output } from '../../inz/cart/GetCartResponse';
import type { RemoveFromCartRequest as _inz_cart_RemoveFromCartRequest, RemoveFromCartRequest__Output as _inz_cart_RemoveFromCartRequest__Output } from '../../inz/cart/RemoveFromCartRequest';
import type { RemoveFromCartResponse as _inz_cart_RemoveFromCartResponse, RemoveFromCartResponse__Output as _inz_cart_RemoveFromCartResponse__Output } from '../../inz/cart/RemoveFromCartResponse';

export interface CartServiceClient extends grpc.Client {
  AddToCart(argument: _inz_cart_AddToCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  AddToCart(argument: _inz_cart_AddToCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  AddToCart(argument: _inz_cart_AddToCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  AddToCart(argument: _inz_cart_AddToCartRequest, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  addToCart(argument: _inz_cart_AddToCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  addToCart(argument: _inz_cart_AddToCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  addToCart(argument: _inz_cart_AddToCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  addToCart(argument: _inz_cart_AddToCartRequest, callback: grpc.requestCallback<_inz_cart_AddToCartResponse__Output>): grpc.ClientUnaryCall;
  
  GetCart(argument: _inz_cart_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _inz_cart_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _inz_cart_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _inz_cart_GetCartRequest, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  getCart(argument: _inz_cart_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  getCart(argument: _inz_cart_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  getCart(argument: _inz_cart_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  getCart(argument: _inz_cart_GetCartRequest, callback: grpc.requestCallback<_inz_cart_GetCartResponse__Output>): grpc.ClientUnaryCall;
  
  RemoveFromCart(argument: _inz_cart_RemoveFromCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  RemoveFromCart(argument: _inz_cart_RemoveFromCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  RemoveFromCart(argument: _inz_cart_RemoveFromCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  RemoveFromCart(argument: _inz_cart_RemoveFromCartRequest, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  removeFromCart(argument: _inz_cart_RemoveFromCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  removeFromCart(argument: _inz_cart_RemoveFromCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  removeFromCart(argument: _inz_cart_RemoveFromCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  removeFromCart(argument: _inz_cart_RemoveFromCartRequest, callback: grpc.requestCallback<_inz_cart_RemoveFromCartResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CartServiceHandlers extends grpc.UntypedServiceImplementation {
  AddToCart: grpc.handleUnaryCall<_inz_cart_AddToCartRequest__Output, _inz_cart_AddToCartResponse>;
  
  GetCart: grpc.handleUnaryCall<_inz_cart_GetCartRequest__Output, _inz_cart_GetCartResponse>;
  
  RemoveFromCart: grpc.handleUnaryCall<_inz_cart_RemoveFromCartRequest__Output, _inz_cart_RemoveFromCartResponse>;
  
}

export interface CartServiceDefinition extends grpc.ServiceDefinition {
  AddToCart: MethodDefinition<_inz_cart_AddToCartRequest, _inz_cart_AddToCartResponse, _inz_cart_AddToCartRequest__Output, _inz_cart_AddToCartResponse__Output>
  GetCart: MethodDefinition<_inz_cart_GetCartRequest, _inz_cart_GetCartResponse, _inz_cart_GetCartRequest__Output, _inz_cart_GetCartResponse__Output>
  RemoveFromCart: MethodDefinition<_inz_cart_RemoveFromCartRequest, _inz_cart_RemoveFromCartResponse, _inz_cart_RemoveFromCartRequest__Output, _inz_cart_RemoveFromCartResponse__Output>
}
