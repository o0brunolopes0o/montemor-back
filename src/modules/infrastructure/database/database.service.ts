import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
    constructor(public connection: Connection) { }

    public async getRepository<T>(entity: any): Promise<Repository<T>> {
        return this.connection.getRepository(entity);
    }

    public async testConnection(): Promise<string> {
        try {
            await this.connection.query('SELECT 1');
            return 'Connection to the database is successful.';
        } catch (error) {
            return 'Failed to connect to the database.';
        }
    }
}