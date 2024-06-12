import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/createWishDto';
import { UpdateWishDto } from './dto/updateWishDto';
import { IUserRequest } from 'src/users/users.controller';
import { Wish } from './wish.entity';
export declare class WishesController {
    private readonly wishService;
    constructor(wishService: WishesService);
    create({ user }: IUserRequest, createWishDto: CreateWishDto): Promise<Wish>;
    findLast(): Promise<Wish[]>;
    findTop(): Promise<Wish[]>;
    findOne(id: number): Promise<Wish>;
    copy(id: number, { user }: IUserRequest): Promise<{
        owner: {
            id: number;
            username: string;
            about: string;
            avatar: string;
            email: string;
            wishes: Wish[];
            offers: import("../offers/offer.entity").Offer[];
            wishlists: import("../wishlists/wishlist.entity").WishList[];
            createdAt: Date;
            updatedAt: Date;
        };
        name: string;
        link: string;
        image: string;
        price: number;
        raised: number;
        description: string;
        offers: import("../offers/offer.entity").Offer[];
        createdAt: Date;
        updatedAt: Date;
    } & Wish>;
    update(id: number, updateWishDto: UpdateWishDto): Promise<import("typeorm").UpdateResult>;
    removeOne(id: number, { user }: IUserRequest): Promise<Wish>;
}
