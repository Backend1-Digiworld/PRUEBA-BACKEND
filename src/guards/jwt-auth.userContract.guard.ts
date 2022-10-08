import { AuthGuard } from '@nestjs/passport';
import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';


@Injectable()
export class UserJwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return super.canActivate(context);
    }
    
    handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        //console.log(user)
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
