// Original file: ../proto/users/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserIdRequest as _inz_GetUserIdRequest, GetUserIdRequest__Output as _inz_GetUserIdRequest__Output } from '../inz/GetUserIdRequest';
import type { GetUserIdResponse as _inz_GetUserIdResponse, GetUserIdResponse__Output as _inz_GetUserIdResponse__Output } from '../inz/GetUserIdResponse';
import type { LoginRequest as _inz_LoginRequest, LoginRequest__Output as _inz_LoginRequest__Output } from '../inz/LoginRequest';
import type { LoginResponse as _inz_LoginResponse, LoginResponse__Output as _inz_LoginResponse__Output } from '../inz/LoginResponse';
import type { RegisterRequest as _inz_RegisterRequest, RegisterRequest__Output as _inz_RegisterRequest__Output } from '../inz/RegisterRequest';
import type { RegisterResponse as _inz_RegisterResponse, RegisterResponse__Output as _inz_RegisterResponse__Output } from '../inz/RegisterResponse';

export interface UsersServiceClient extends grpc.Client {
  GetUserId(argument: _inz_GetUserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_GetUserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_GetUserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_GetUserIdRequest, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_GetUserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_GetUserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_GetUserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_GetUserIdRequest, callback: grpc.requestCallback<_inz_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _inz_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_LoginRequest, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_LoginRequest, callback: grpc.requestCallback<_inz_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _inz_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_RegisterRequest, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_RegisterRequest, callback: grpc.requestCallback<_inz_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUserId: grpc.handleUnaryCall<_inz_GetUserIdRequest__Output, _inz_GetUserIdResponse>;
  
  Login: grpc.handleUnaryCall<_inz_LoginRequest__Output, _inz_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_inz_RegisterRequest__Output, _inz_RegisterResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  GetUserId: MethodDefinition<_inz_GetUserIdRequest, _inz_GetUserIdResponse, _inz_GetUserIdRequest__Output, _inz_GetUserIdResponse__Output>
  Login: MethodDefinition<_inz_LoginRequest, _inz_LoginResponse, _inz_LoginRequest__Output, _inz_LoginResponse__Output>
  Register: MethodDefinition<_inz_RegisterRequest, _inz_RegisterResponse, _inz_RegisterRequest__Output, _inz_RegisterResponse__Output>
}
