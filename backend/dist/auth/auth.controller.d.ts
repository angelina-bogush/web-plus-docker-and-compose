import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUpDto';
import { TToken, TUser } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signUpDto: SignUpDto): Promise<TUser>;
    signin(req: {
        user: TUser;
    }): Promise<TToken>;
}
