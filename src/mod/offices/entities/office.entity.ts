import { Schedule } from "src/mod/schedules/entities/schedule.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/* Oficinas */
@Entity()
export class Office {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 180, nullable: false})
    name: string

    @Column({type: 'boolean', default: true})
    status: boolean

    @OneToMany(()=>Schedule, schedule => schedule.office)
    schedules: Schedule[]
}
