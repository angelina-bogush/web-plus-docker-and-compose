import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/createWishlistDto';
import { UpdateWishlistDto } from './dto/updateWishlistDto';
import { WishList } from './wishlist.entity';
import { IUserRequest } from 'src/users/users.controller';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    findAll(): Promise<WishList[]>;
    create(createWishlistDto: CreateWishlistDto, { user }: IUserRequest): Promise<WishList>;
    findOne(id: number): Promise<WishList>;
    update(id: number, updateWishlistDto: UpdateWishlistDto, { user }: IUserRequest): Promise<WishList>;
    deleteOne(id: number, { user }: IUserRequest): Promise<WishList>;
}
