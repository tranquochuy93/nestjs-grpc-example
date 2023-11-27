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
    const res = []
    for (let i = 0; i < 100000; i++) {
      res.push({
        id: 1,
        name: 'Name11111111adfadsfdsafdafsalfld;sầdfadsfdsfsdfsfsdfdsfsfdsfsdfsdf',
        email: 'email@dgmail.onesdfsfsdfsfsfsdfsdfsfdsfsdfsfsdfdf',
      });
    }
    return res;
  }
}
