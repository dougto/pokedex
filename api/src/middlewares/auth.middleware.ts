import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // This middleware would contain authentication logic
    // Usually, in a real world application, auth tokens are fetched when the client provides the username and the password
    // This token is stored in the client side, and it is used to authenticate in many different parts of the app
    // When making a request to the pokemon service, the client would send this token in the request, and it would be validated here

    next();
  }
}
