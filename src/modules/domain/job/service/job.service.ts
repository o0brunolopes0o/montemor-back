import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../entity/job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  findOne(id: string): Promise<Job> {
    return this.jobRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.jobRepository.delete(id);
  }

  async create(job: Job): Promise<Job> {
    job.codigo_vaga = await this.generateJobCode();
    return this.jobRepository.save(job);
  }

  async update(id: string, job: Job): Promise<void> {
    await this.jobRepository.update(id, job);
  }

  private async generateJobCode(): Promise<number> {
    const lastJob = await this.jobRepository
      .createQueryBuilder('job')
      .orderBy('job.codigo_vaga', 'DESC')
      .getOne();

    let lastCodigo = lastJob ? lastJob.codigo_vaga : 0;
    return ++lastCodigo;
  }
}