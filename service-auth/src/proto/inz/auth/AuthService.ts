// Original file: ../proto/auth/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GenerateTokenRequest as _inz_auth_GenerateTokenRequest, GenerateTokenRequest__Output as _inz_auth_GenerateTokenRequest__Output } from '../../inz/auth/GenerateTokenRequest';
import type { GenerateTokenResponse as _inz_auth_GenerateTokenResponse, GenerateTokenResponse__Output as _inz_auth_GenerateTokenResponse__Output } from '../../inz/auth/GenerateTokenResponse';
import type { InavlidateTokenRequest as _inz_auth_InavlidateTokenRequest, InavlidateTokenRequest__Output as _inz_auth_InavlidateTokenRequest__Output } from '../../inz/auth/InavlidateTokenRequest';
import type { InavlidateTokenResponse as _inz_auth_InavlidateTokenResponse, InavlidateTokenResponse__Output as _inz_auth_InavlidateTokenResponse__Output } from '../../inz/auth/InavlidateTokenResponse';
import type { ValidateTokenRequest as _inz_auth_ValidateTokenRequest, ValidateTokenRequest__Output as _inz_auth_ValidateTokenRequest__Output } from '../../inz/auth/ValidateTokenRequest';
import type { ValidateTokenResponse as _inz_auth_ValidateTokenResponse, ValidateTokenResponse__Output as _inz_auth_ValidateTokenResponse__Output } from '../../inz/auth/ValidateTokenResponse';

export interface AuthServiceClient extends grpc.Client {
  GenerateToken(argument: _inz_auth_GenerateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_auth_GenerateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_auth_GenerateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_auth_GenerateTokenRequest, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_auth_GenerateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_auth_GenerateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_auth_GenerateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_auth_GenerateTokenRequest, callback: grpc.requestCallback<_inz_auth_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  
  InavlidateToken(argument: _inz_auth_InavlidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InavlidateToken(argument: _inz_auth_InavlidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InavlidateToken(argument: _inz_auth_InavlidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InavlidateToken(argument: _inz_auth_InavlidateTokenRequest, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  inavlidateToken(argument: _inz_auth_InavlidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  inavlidateToken(argument: _inz_auth_InavlidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  inavlidateToken(argument: _inz_auth_InavlidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  inavlidateToken(argument: _inz_auth_InavlidateTokenRequest, callback: grpc.requestCallback<_inz_auth_InavlidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
  ValidateToken(argument: _inz_auth_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_auth_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_auth_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_auth_ValidateTokenRequest, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_auth_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_auth_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_auth_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_auth_ValidateTokenRequest, callback: grpc.requestCallback<_inz_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GenerateToken: grpc.handleUnaryCall<_inz_auth_GenerateTokenRequest__Output, _inz_auth_GenerateTokenResponse>;
  
  InavlidateToken: grpc.handleUnaryCall<_inz_auth_InavlidateTokenRequest__Output, _inz_auth_InavlidateTokenResponse>;
  
  ValidateToken: grpc.handleUnaryCall<_inz_auth_ValidateTokenRequest__Output, _inz_auth_ValidateTokenResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GenerateToken: MethodDefinition<_inz_auth_GenerateTokenRequest, _inz_auth_GenerateTokenResponse, _inz_auth_GenerateTokenRequest__Output, _inz_auth_GenerateTokenResponse__Output>
  InavlidateToken: MethodDefinition<_inz_auth_InavlidateTokenRequest, _inz_auth_InavlidateTokenResponse, _inz_auth_InavlidateTokenRequest__Output, _inz_auth_InavlidateTokenResponse__Output>
  ValidateToken: MethodDefinition<_inz_auth_ValidateTokenRequest, _inz_auth_ValidateTokenResponse, _inz_auth_ValidateTokenRequest__Output, _inz_auth_ValidateTokenResponse__Output>
}
