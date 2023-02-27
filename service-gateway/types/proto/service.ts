import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _inz_AuthServiceClient, AuthServiceDefinition as _inz_AuthServiceDefinition } from './inz/AuthService';
import type { UsersServiceClient as _inz_UsersServiceClient, UsersServiceDefinition as _inz_UsersServiceDefinition } from './inz/UsersService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inz: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _inz_AuthServiceClient> & { service: _inz_AuthServiceDefinition }
    GenerateTokenRequest: MessageTypeDefinition
    GenerateTokenResponse: MessageTypeDefinition
    GetUserIdRequest: MessageTypeDefinition
    GetUserIdResponse: MessageTypeDefinition
    InavlidateTokenRequest: MessageTypeDefinition
    InavlidateTokenResponse: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    RegisterRequest: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
    UsersService: SubtypeConstructor<typeof grpc.Client, _inz_UsersServiceClient> & { service: _inz_UsersServiceDefinition }
    ValidateTokenRequest: MessageTypeDefinition
    ValidateTokenResponse: MessageTypeDefinition
  }
}

