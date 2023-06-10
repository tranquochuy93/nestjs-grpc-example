import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
  Req,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import SubscriberInterface from './subscriber.interface';

@Controller('subscriber')
export class SubscriberController implements OnModuleInit {
  private gRpcService: SubscriberInterface;
  constructor(
    @Inject('SUBSCRIBER_SERVICE')
    private client: ClientGrpc,
  ) {}

  onModuleInit(): any {
    this.gRpcService =
      this.client.getService<SubscriberInterface>('SubscriberService');
  }

  @Get()
  async getSubscribers() {
    return this.gRpcService.getAllSubscribers({});
  }

  @Post()
  async createPost(@Body() body: any) {
    return this.gRpcService.addSubscriber({
      email: body.user.email,
      name: body.user.name,
    });
  }
}
