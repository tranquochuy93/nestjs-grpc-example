import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: {
  //     port: configService.get('PORT'),
  //   },
  // });

  // const user = configService.get('RABBITMQ_USER');
  // const password = configService.get('RABBITMQ_PASSWORD');
  // const host = configService.get('RABBITMQ_HOST');
  // const queueName = configService.get('RABBITMQ_QUEUE_NAME');
  //
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`amqp://${user}:${password}@${host}`],
  //     queue: queueName,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'subscribers',
      protoPath: join(process.cwd(), 'src/subscriber/subscribers.proto'),
      url: configService.get('GRPC_CONNECTION_URL'),
      loader: {
        arrays: true,
      },
      // maxReceiveMessageLength: 2 * 1024 * 1024 * 1024,
      // maxSendMessageLength: 2 * 1024 * 1024 * 1024,
      channelOptions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'grpc.default_compression_algorithm': 2,
        'grpc.default_compression_level': 2,
      },
    },
  });

  await app.listen(5001);
  await app.startAllMicroservices();
}
bootstrap();
