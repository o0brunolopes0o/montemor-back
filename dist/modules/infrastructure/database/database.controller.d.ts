import { DatabaseService } from './database.service';
export declare class DatabaseController {
    private readonly appService;
    constructor(appService: DatabaseService);
    testConnection(): Promise<string>;
}
