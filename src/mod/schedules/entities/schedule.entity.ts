import { Office } from "src/mod/offices/entities/office.entity";
import { Shift } from "src/mod/shifts/entities/shift.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/* Cronogramas */
@Entity()
export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'date', nullable: false})
    date: Date

    @Column({type: 'boolean', default: true})
    status: boolean

    @ManyToOne(()=> Office, office => office.schedules, {cascade: true, nullable: false})
    @JoinColumn({name: 'office'})
    office: Partial<Office>

    @OneToMany(()=>Shift, shift => shift.schedule)
    shifts: Shift[]
}
