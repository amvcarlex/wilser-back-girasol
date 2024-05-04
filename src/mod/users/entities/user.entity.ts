import { Exclude } from 'class-transformer';
import { ROLES } from 'src/mod/auth/enum/access.enum';
import { Ticket } from 'src/mod/tickets/entities/ticket.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: 150, nullable: true })
    names: string

    @Column({ type: 'char', length: 9, nullable: true })
    dni: string
    
    @Column({ type: 'char', length: 9, nullable: true })
    phone: number
    
    @Column({ type: 'varchar', length: 150, nullable: false, unique: true })
    username: string
    
    @Exclude()
    @Column({ type: 'varchar', length: 180, nullable: false })
    password: string
    
    @Column({type: 'boolean', default: true})
    status: string
    
    @Column({ type: 'enum', enum: ROLES, default: ROLES.BASIC })
    role: ROLES

    @OneToMany(() =>Ticket, ticket => ticket.user)
    tickets: Ticket[]

}
