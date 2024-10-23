import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tipo_vacina' })
export class VacinaTipo {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'nome', nullable: true })
    nome: string;
}
