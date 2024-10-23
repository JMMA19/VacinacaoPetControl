import { User } from "src/users/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pet' })
export class Pet {
    
    @PrimaryGeneratedColumn({ name: 'id_pet' })
    id: number;

    @Column({ name: 'nome', length: 30 })
    nome: string;

    @Column({ name: 'raca', length: 50 })
    raca: string;

    @Column({ name: 'tipo', length: 50 })
    tipo: string;

    @Column({ name: 'idade' })
    idade: number;

    @ManyToOne(type => User, { eager: true })
    @JoinColumn({ name: 'id_user_tutor' })
    tutor: User;
}