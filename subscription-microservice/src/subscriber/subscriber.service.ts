import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './subscriber.dto';

@Injectable()
export class SubscriberService {
  async addSubscriber(createSubscriberDto: CreateSubscriberDto) {
    return {
      id: 1,
      name: 'Name',
      email: 'email@dgmail.one',
    };
  }

  async getAllSubscriber() {
    return [
      {
        id: 1,
        name: 'Name',
        email: 'email@dgmail.one',
        phones: [{ number: '123455' }],
      },
    ];
  }
}
