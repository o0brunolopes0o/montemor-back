import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<void>;
}
