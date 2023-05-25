// Original file: ../proto/orders/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserOrdersRequest as _inz_orders_GetUserOrdersRequest, GetUserOrdersRequest__Output as _inz_orders_GetUserOrdersRequest__Output } from '../../inz/orders/GetUserOrdersRequest';
import type { GetUserOrdersResponse as _inz_orders_GetUserOrdersResponse, GetUserOrdersResponse__Output as _inz_orders_GetUserOrdersResponse__Output } from '../../inz/orders/GetUserOrdersResponse';
import type { PlaceOrderRequest as _inz_orders_PlaceOrderRequest, PlaceOrderRequest__Output as _inz_orders_PlaceOrderRequest__Output } from '../../inz/orders/PlaceOrderRequest';
import type { PlaceOrderResponse as _inz_orders_PlaceOrderResponse, PlaceOrderResponse__Output as _inz_orders_PlaceOrderResponse__Output } from '../../inz/orders/PlaceOrderResponse';

export interface OrdersServiceClient extends grpc.Client {
  GetUserOrders(argument: _inz_orders_GetUserOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetUserOrders(argument: _inz_orders_GetUserOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetUserOrders(argument: _inz_orders_GetUserOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetUserOrders(argument: _inz_orders_GetUserOrdersRequest, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  getUserOrders(argument: _inz_orders_GetUserOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  getUserOrders(argument: _inz_orders_GetUserOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  getUserOrders(argument: _inz_orders_GetUserOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  getUserOrders(argument: _inz_orders_GetUserOrdersRequest, callback: grpc.requestCallback<_inz_orders_GetUserOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  PlaceOrder(argument: _inz_orders_PlaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  PlaceOrder(argument: _inz_orders_PlaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  PlaceOrder(argument: _inz_orders_PlaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  PlaceOrder(argument: _inz_orders_PlaceOrderRequest, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  placeOrder(argument: _inz_orders_PlaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  placeOrder(argument: _inz_orders_PlaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  placeOrder(argument: _inz_orders_PlaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  placeOrder(argument: _inz_orders_PlaceOrderRequest, callback: grpc.requestCallback<_inz_orders_PlaceOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrdersServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUserOrders: grpc.handleUnaryCall<_inz_orders_GetUserOrdersRequest__Output, _inz_orders_GetUserOrdersResponse>;
  
  PlaceOrder: grpc.handleUnaryCall<_inz_orders_PlaceOrderRequest__Output, _inz_orders_PlaceOrderResponse>;
  
}

export interface OrdersServiceDefinition extends grpc.ServiceDefinition {
  GetUserOrders: MethodDefinition<_inz_orders_GetUserOrdersRequest, _inz_orders_GetUserOrdersResponse, _inz_orders_GetUserOrdersRequest__Output, _inz_orders_GetUserOrdersResponse__Output>
  PlaceOrder: MethodDefinition<_inz_orders_PlaceOrderRequest, _inz_orders_PlaceOrderResponse, _inz_orders_PlaceOrderRequest__Output, _inz_orders_PlaceOrderResponse__Output>
}
