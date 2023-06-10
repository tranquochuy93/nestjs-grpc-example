import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [ConfigModule.forRoot(), SubscriberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
