# Protocol Buffers
[Protocol Buffers Documentation](https://protobuf.dev/programming-guides/proto3/)
### optional: An optional field is in one of two possible states:

- the field is set, and contains a value that was explicitly set or parsed from the wire. It will be serialized to the wire.
- the field is unset, and will return the default value. It will not be serialized to the wire.

- If the default value is not specified for an optional element, a type-specific default value is used instead:

  - For strings, the default value is the empty string.
  - For bytes, the default value is empty bytes.
  - For bools, the default value is false.
  - For numeric types, the default value is zero.
  - For enums, the default value is the first defined enum value.

```ts
syntax = "proto3";
message OptionalValue {
  optional Corpus corpus = 1;
  string id = 2;
  string firstName = 3;
  optional string lastName = 4;
  optional int32 age = 5;
}
```

# What is the gRPC
[grpc architecture](https://medium.com/@ssudan16/internals-of-grpc-architecture-afae7450ff5b)
gRPC is an open-source, high-performance, inter-process communication RPC framework built on top of HTTP/2 by Google. It uses Protocol Buffers as the message interchange format which is a platform-neutral, extensible framework for serializing and deserializing structured data.

```
service HealthcheckService {
  rpc Ping (PingRequest) returns (PingResponse) {}
}

message PingRequest {
  string name = 1;
}

message PingResponse {
  string message = 1;
}
```

Above is an example of an IDL which defines a Service HealthCheckService which is basically a collection of remote methods.

The service defines a single method Ping which takes PingRequest as Request and returns PingResponse as Response.

PingRequest and PingResponse are called Messages which are the data structures exchanged between the client and the server containing a series of name-value pairs called fields.

Each field is associated with a unique number that is used to identify them in the binary format. In the above example,

## [Status Code](https://github.com/grpc/grpc/blob/master/doc/statuscodes.md)

## Implement gRPC in NestJS
[Wannago](https://wanago.io/2020/11/30/api-nestjs-microservices-grpc-framework/)

## Trick

