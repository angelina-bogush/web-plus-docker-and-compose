import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { HashService } from 'src/hash/hash.service';
import { SignUpDto } from './dto/signUpDto';
export type TUser = Omit<User, 'password'>;
export type TToken = {
    access_token: string;
};
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private configService;
    private readonly hashService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService, hashService: HashService);
    validate(username: string, password: string): Promise<User>;
    signup(signUpDto: SignUpDto): Promise<TUser>;
    signin(user: TUser): Promise<{
        access_token: string;
    }>;
}
