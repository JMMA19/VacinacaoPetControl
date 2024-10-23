import { Pet } from "src/pet/entity/pet.entity";
import { VacinaTipo } from "src/vacina-tipo/entity/vacina-tipo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Vacina' })
export class Vacina {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'observações'})
    obs: string;

    @Column({ name: 'tipo de vacina'})
    tipo: string;

    @Column({ name: 'data da vaicna', type: 'timestamp', nullable: true })
    dataDeVacina: Date;

    @ManyToOne(type => Pet, { eager: true })
    @JoinColumn({ name: 'id_pet' })
    pet: Pet;
}
