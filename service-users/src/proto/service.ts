import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _inz_auth_AuthServiceClient, AuthServiceDefinition as _inz_auth_AuthServiceDefinition } from './inz/auth/AuthService';
import type { UsersServiceClient as _inz_users_UsersServiceClient, UsersServiceDefinition as _inz_users_UsersServiceDefinition } from './inz/users/UsersService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inz: {
    auth: {
      AuthService: SubtypeConstructor<typeof grpc.Client, _inz_auth_AuthServiceClient> & { service: _inz_auth_AuthServiceDefinition }
      GenerateTokenRequest: MessageTypeDefinition
      GenerateTokenResponse: MessageTypeDefinition
      InavlidateTokenRequest: MessageTypeDefinition
      InavlidateTokenResponse: MessageTypeDefinition
      ValidateTokenRequest: MessageTypeDefinition
      ValidateTokenResponse: MessageTypeDefinition
    }
    users: {
      GetUserIdRequest: MessageTypeDefinition
      GetUserIdResponse: MessageTypeDefinition
      LoginRequest: MessageTypeDefinition
      LoginResponse: MessageTypeDefinition
      RegisterRequest: MessageTypeDefinition
      RegisterResponse: MessageTypeDefinition
      UsersService: SubtypeConstructor<typeof grpc.Client, _inz_users_UsersServiceClient> & { service: _inz_users_UsersServiceDefinition }
    }
  }
}

