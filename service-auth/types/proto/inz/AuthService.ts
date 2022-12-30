// Original file: ../proto/auth/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GenerateTokenRequest as _inz_GenerateTokenRequest, GenerateTokenRequest__Output as _inz_GenerateTokenRequest__Output } from '../inz/GenerateTokenRequest';
import type { GenerateTokenResponse as _inz_GenerateTokenResponse, GenerateTokenResponse__Output as _inz_GenerateTokenResponse__Output } from '../inz/GenerateTokenResponse';
import type { ValidateTokenRequest as _inz_ValidateTokenRequest, ValidateTokenRequest__Output as _inz_ValidateTokenRequest__Output } from '../inz/ValidateTokenRequest';
import type { ValidateTokenResponse as _inz_ValidateTokenResponse, ValidateTokenResponse__Output as _inz_ValidateTokenResponse__Output } from '../inz/ValidateTokenResponse';

export interface AuthServiceClient extends grpc.Client {
  GenerateToken(argument: _inz_GenerateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_GenerateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_GenerateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _inz_GenerateTokenRequest, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_GenerateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_GenerateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_GenerateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _inz_GenerateTokenRequest, callback: grpc.requestCallback<_inz_GenerateTokenResponse__Output>): grpc.ClientUnaryCall;
  
  ValidateToken(argument: _inz_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _inz_ValidateTokenRequest, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _inz_ValidateTokenRequest, callback: grpc.requestCallback<_inz_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GenerateToken: grpc.handleUnaryCall<_inz_GenerateTokenRequest__Output, _inz_GenerateTokenResponse>;
  
  ValidateToken: grpc.handleUnaryCall<_inz_ValidateTokenRequest__Output, _inz_ValidateTokenResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GenerateToken: MethodDefinition<_inz_GenerateTokenRequest, _inz_GenerateTokenResponse, _inz_GenerateTokenRequest__Output, _inz_GenerateTokenResponse__Output>
  ValidateToken: MethodDefinition<_inz_ValidateTokenRequest, _inz_ValidateTokenResponse, _inz_ValidateTokenRequest__Output, _inz_ValidateTokenResponse__Output>
}
