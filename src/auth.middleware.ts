/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('AuthMiddleware invoked...');
    next();
  }
}
