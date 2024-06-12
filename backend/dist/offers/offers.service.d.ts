import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { UsersService } from 'src/users/users.service';
import { WishesService } from 'src/wishes/wishes.service';
import { CreateOfferDto } from './dto/createOfferDto';
export declare class OffersService {
    private readonly offerRepository;
    private readonly usersService;
    private readonly wishesService;
    constructor(offerRepository: Repository<Offer>, usersService: UsersService, wishesService: WishesService);
    create(createOfferDto: CreateOfferDto, userId: number): Promise<{
        user: {
            id: number;
            username: string;
            about: string;
            avatar: string;
            email: string;
            wishes: import("../wishes/wish.entity").Wish[];
            offers: Offer[];
            wishlists: import("../wishlists/wishlist.entity").WishList[];
            createdAt: Date;
            updatedAt: Date;
        };
        item: import("../wishes/wish.entity").Wish;
        itemId: number;
        amount: number;
        hidden: boolean;
    } & Offer>;
    findOfferById(id: number): Promise<Offer>;
    find(): Promise<Offer[]>;
}
