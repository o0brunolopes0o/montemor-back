import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('vagas')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  codigo_vaga: number;

  @CreateDateColumn()
  criado_em: Date;

  @DeleteDateColumn()
  deletado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;
}

export default Job;