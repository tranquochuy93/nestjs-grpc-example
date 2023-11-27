import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SubscriberController } from './subscriber.controller';
import { join } from 'path';

@Module({
  imports: [ConfigModule],
  controllers: [SubscriberController],
  providers: [
    {
      provide: 'SUBSCRIBER_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'subscribers',
            protoPath: join(process.cwd(), 'src/subscriber/subscribers.proto'),
            url: configService.get('GRPC_CONNECTION_URL'),
            loader: {
              arrays: true,
            },
            maxReceiveMessageLength: 2 * 1024 * 1024 * 1024,
            // maxSendMessageLength: 2 * 1024 * 1024 * 1024,
            channelOptions: {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              'grpc.default_compression_algorithm': 2,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class SubscriberModule {}
