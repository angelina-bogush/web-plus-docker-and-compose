import { Wish } from 'src/wishes/wish.entity';
import { User } from 'src/users/user.entity';
export declare class WishList {
    id: number;
    name: string;
    description: string;
    image: string;
    items: Wish[];
    owner: User;
    createdAt: Date;
    updatedAt: Date;
}
