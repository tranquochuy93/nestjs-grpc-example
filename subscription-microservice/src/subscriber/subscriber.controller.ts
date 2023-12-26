import { Controller } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateSubscriberDto } from './subscriber.dto';
import { difference } from 'lodash';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @GrpcMethod('SubscriberService', 'addSubscriber')
  async addSubscriberGrpcMethod(createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.addSubscriber(createSubscriberDto);
  }

  @GrpcMethod('SubscriberService', 'getAllSubscribers')
  async getAllSubscribersGrpcMethod() {
    return {
      data: await this.subscriberService.getAllSubscriber(),
    };
  }

  @GrpcMethod('SubscriberService', 'returnOptionalValue')
  async returnOptionalValue() {
    return {
      id: 1,
    };
  }

  @GrpcMethod('SubscriberService', 'returnNullableValue')
  async returnNullableValue() {
    return { response: undefined };
  }
}
