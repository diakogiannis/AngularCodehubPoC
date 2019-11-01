import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'code.hub.ng5.token') });
        return next.handle(authReq);
    }
}
