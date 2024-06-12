import { Wish } from 'src/wishes/wish.entity';
import { User } from 'src/users/user.entity';
export declare class Offer {
    id: number;
    user: User;
    item: Wish;
    amount: number;
    hidden: boolean;
    createdAt: Date;
    updatedAt: Date;
}
