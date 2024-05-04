import { Schedule } from "src/mod/schedules/entities/schedule.entity";
import { Travel } from "src/mod/travels/entities/travel.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
/* @Index(['exit', 'schedule'], { unique: true }) */
/* Turnos */
export class Shift {
    @PrimaryColumn({ type: 'float' })
    exit: number

    @PrimaryColumn()
    @JoinColumn({ name: 'schedule' })
    @ManyToOne(() => Schedule, schedule => schedule.shifts, { cascade: true, nullable: false })
    schedule: Partial<Schedule>

    @Column({ type: 'boolean', default: true })
    status: boolean

    
    @OneToMany(()=> Travel, travel => travel.shift)
    travels: Travel[]

}
