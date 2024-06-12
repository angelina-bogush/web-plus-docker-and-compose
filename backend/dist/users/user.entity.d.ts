import { Wish } from 'src/wishes/wish.entity';
import { Offer } from 'src/offers/offer.entity';
import { WishList } from 'src/wishlists/wishlist.entity';
export declare class User {
    id: number;
    username: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
    wishes: Wish[];
    offers: Offer[];
    wishlists: WishList[];
    createdAt: Date;
    updatedAt: Date;
}
