import { UsersService } from '../service/user.service';
import { User } from '../entity/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<void>;
    remove(id: string): Promise<void>;
}
