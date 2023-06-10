import { Controller } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateSubscriberDto } from './subscriber.dto';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @GrpcMethod('SubscriberService', 'AddSubscriber')
  async addSubscriberGrpcMethod(createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.addSubscriber(createSubscriberDto);
  }

  @GrpcMethod('SubscriberService', 'GetAllSubscribers')
  async getAllSubscribersGrpcMethod() {
    return {
      data: await this.subscriberService.getAllSubscriber(),
    };
  }
}
