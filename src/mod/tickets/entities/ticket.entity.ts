import { User } from "src/mod/users/entities/user.entity"
import { STATUS } from "../enums/type.enum"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Travel } from "src/mod/travels/entities/travel.entity"

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'enum', enum: STATUS, default: STATUS.AVAILABLE })
    status: STATUS

    @ManyToOne(() => Travel, travel => travel.tickets, { cascade: true, nullable: false })
    @JoinColumn({ name: 'travel' })
    travel: Partial<Travel>

    @ManyToOne(() => User, user => user.tickets, { cascade: true, nullable: true })
    @JoinColumn({ name: 'user' })
    user?: Partial<User>
}
