import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Job from './entity/job.entity';
import { JobController } from './controller/job.controller';
import { JobService } from './service/job.service';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [JobController],
  providers: [JobService],
})

export class JobModule { }