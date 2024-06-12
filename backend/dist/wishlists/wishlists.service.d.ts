import { Repository } from 'typeorm';
import { WishList } from './wishlist.entity';
import { UsersService } from 'src/users/users.service';
import { WishesService } from 'src/wishes/wishes.service';
import { CreateWishlistDto } from './dto/createWishlistDto';
import { UpdateWishlistDto } from './dto/updateWishlistDto';
export declare class WishlistsService {
    private readonly wishlistRepository;
    private readonly usersService;
    private readonly wishService;
    constructor(wishlistRepository: Repository<WishList>, usersService: UsersService, wishService: WishesService);
    find(): Promise<WishList[]>;
    create(createWishlistDto: CreateWishlistDto, userId: number): Promise<WishList>;
    findOne(id: number): Promise<WishList>;
    update(id: number, updateWishlistDto: UpdateWishlistDto, userId: number): Promise<WishList>;
    deleteOne(wishId: number, userId: number): Promise<WishList>;
}
