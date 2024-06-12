import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/updateUserDto';
export interface IUserRequest {
    user: {
        id: number;
        username: string;
    };
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOwn({ user }: IUserRequest): Promise<{
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
    update({ user }: IUserRequest, updateUserDto: UpdateUserDto): Promise<{
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
    getOwnWishes({ user }: IUserRequest): Promise<import("../wishes/wish.entity").Wish[]>;
    getByUsername(username: string): Promise<import("./user.entity").User>;
    getUsersWishes(username: string): Promise<import("../wishes/wish.entity").Wish[]>;
    findMany(data: {
        query: string;
    }): Promise<import("./user.entity").User[]>;
}
