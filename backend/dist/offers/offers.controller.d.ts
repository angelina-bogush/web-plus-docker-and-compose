import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/createOfferDto';
import { IUserRequest } from 'src/users/users.controller';
import { Offer } from './offer.entity';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    create(createOfferDto: CreateOfferDto, { user }: IUserRequest): Promise<Offer>;
    findAll(): Promise<Offer[]>;
    findOne(id: number): Promise<Offer>;
}
