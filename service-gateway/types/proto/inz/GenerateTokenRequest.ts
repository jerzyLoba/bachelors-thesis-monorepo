// Original file: ../proto/auth/service.proto


export interface GenerateTokenRequest {
  'user_id'?: (string);
  'role'?: (string);
  'device_id'?: (string);
}

export interface GenerateTokenRequest__Output {
  'user_id': (string);
  'role': (string);
  'device_id': (string);
}
