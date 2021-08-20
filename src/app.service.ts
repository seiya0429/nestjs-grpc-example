import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUser(req) {
    const users = [
      { id: 1, name: 'hoge' },
      { id: 2, name: 'fuga' },
    ];

    const res = users.filter((user) => user.id === req.id);
    return res.length > 0 ? res[0] : {};
  }
}
