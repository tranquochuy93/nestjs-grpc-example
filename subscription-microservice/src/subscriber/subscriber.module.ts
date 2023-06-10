import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';

@Module({
  imports: [],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
