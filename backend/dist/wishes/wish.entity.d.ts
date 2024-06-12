import { User } from 'src/users/user.entity';
import { Offer } from 'src/offers/offer.entity';
export declare class Wish {
    id: number;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    description: string;
    offers: Offer[];
    copied: number;
    createdAt: Date;
    updatedAt: Date;
}
