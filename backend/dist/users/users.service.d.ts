import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    private readonly logger;
    private readonly salt;
    create(createUserDTO: CreateUserDto): Promise<{
        offers: any[];
        wishes: any[];
        wishlists: any[];
        username: string;
        about: string;
        avatar: string;
        email: string;
        password: string;
    } & User>;
    findOne(search: string): Promise<User>;
    findUserById(id: number): Promise<{
        id: number;
        username: string;
        about: string;
        avatar: string;
        email: string;
        wishes: import("../wishes/wish.entity").Wish[];
        offers: import("../offers/offer.entity").Offer[];
        wishlists: import("../wishlists/wishlist.entity").WishList[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUsers(query: string): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        about: string;
        avatar: string;
        email: string;
        wishes: import("../wishes/wish.entity").Wish[];
        offers: import("../offers/offer.entity").Offer[];
        wishlists: import("../wishlists/wishlist.entity").WishList[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findWishes(username: string): Promise<import("../wishes/wish.entity").Wish[]>;
}
