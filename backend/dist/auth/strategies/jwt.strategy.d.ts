import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
interface jwtPayload {
    id: string;
    username: string;
}
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: jwtPayload): Promise<{
        id: string;
        username: string;
    }>;
}
export {};
