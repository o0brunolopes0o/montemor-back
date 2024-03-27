import { Controller, Get, Post, Delete, Param, Body, Put, UseGuards } from '@nestjs/common';
import { JobService } from '../service/job.service';
import { Job } from '../entity/job.entity';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateJobDto } from "../dto/create-job.dto";
import { UpdateJobDto } from '../dto/update-job.dto';
import { GetJobDto } from '../dto/get-job.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Job')
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: GetJobDto })
  @Get('/get')
  findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @ApiOkResponse({ type: GetJobDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Job> {
    return this.jobService.findOne(id);
  }

  @Post('/create')
  @ApiBody({ type: CreateJobDto })
  create(@Body() user: Job): Promise<Job> {
    return this.jobService.create(user);
  }

  @Put('/update:id')
  @ApiBody({ type: UpdateJobDto })
  update(@Param('id') id: string, @Body() user: Job): Promise<void> {
    return this.jobService.update(id, user);
  }

  @Delete('/delete:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.jobService.remove(id);
  }
}