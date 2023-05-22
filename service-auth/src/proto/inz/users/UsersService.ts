// Original file: ../proto/users/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserIdRequest as _inz_users_GetUserIdRequest, GetUserIdRequest__Output as _inz_users_GetUserIdRequest__Output } from '../../inz/users/GetUserIdRequest';
import type { GetUserIdResponse as _inz_users_GetUserIdResponse, GetUserIdResponse__Output as _inz_users_GetUserIdResponse__Output } from '../../inz/users/GetUserIdResponse';
import type { LoginRequest as _inz_users_LoginRequest, LoginRequest__Output as _inz_users_LoginRequest__Output } from '../../inz/users/LoginRequest';
import type { LoginResponse as _inz_users_LoginResponse, LoginResponse__Output as _inz_users_LoginResponse__Output } from '../../inz/users/LoginResponse';
import type { RegisterRequest as _inz_users_RegisterRequest, RegisterRequest__Output as _inz_users_RegisterRequest__Output } from '../../inz/users/RegisterRequest';
import type { RegisterResponse as _inz_users_RegisterResponse, RegisterResponse__Output as _inz_users_RegisterResponse__Output } from '../../inz/users/RegisterResponse';

export interface UsersServiceClient extends grpc.Client {
  GetUserId(argument: _inz_users_GetUserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_users_GetUserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_users_GetUserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserId(argument: _inz_users_GetUserIdRequest, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_users_GetUserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_users_GetUserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_users_GetUserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  getUserId(argument: _inz_users_GetUserIdRequest, callback: grpc.requestCallback<_inz_users_GetUserIdResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _inz_users_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_users_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_users_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _inz_users_LoginRequest, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_users_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_users_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_users_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _inz_users_LoginRequest, callback: grpc.requestCallback<_inz_users_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _inz_users_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_users_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_users_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _inz_users_RegisterRequest, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_users_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_users_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_users_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _inz_users_RegisterRequest, callback: grpc.requestCallback<_inz_users_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUserId: grpc.handleUnaryCall<_inz_users_GetUserIdRequest__Output, _inz_users_GetUserIdResponse>;
  
  Login: grpc.handleUnaryCall<_inz_users_LoginRequest__Output, _inz_users_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_inz_users_RegisterRequest__Output, _inz_users_RegisterResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  GetUserId: MethodDefinition<_inz_users_GetUserIdRequest, _inz_users_GetUserIdResponse, _inz_users_GetUserIdRequest__Output, _inz_users_GetUserIdResponse__Output>
  Login: MethodDefinition<_inz_users_LoginRequest, _inz_users_LoginResponse, _inz_users_LoginRequest__Output, _inz_users_LoginResponse__Output>
  Register: MethodDefinition<_inz_users_RegisterRequest, _inz_users_RegisterResponse, _inz_users_RegisterRequest__Output, _inz_users_RegisterResponse__Output>
}
