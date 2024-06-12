import { Wish } from './wish.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateWishDto } from './dto/createWishDto';
import { UpdateWishDto } from './dto/updateWishDto';
export declare class WishesService {
    private readonly wishRepository;
    private readonly userService;
    constructor(wishRepository: Repository<Wish>, userService: UsersService);
    create(id: number, createWishDto: CreateWishDto): Promise<Wish>;
    findOne(id: number): Promise<Wish>;
    findTop(records: number): Promise<Wish[]>;
    findLast(records: number): Promise<Wish[]>;
    update(wishId: number, updateWishDto: UpdateWishDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(wishId: number, userId: number): Promise<Wish>;
    copy(wishId: number, userId: number): Promise<{
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
    find(giftsId: number[]): Promise<Wish[]>;
}
