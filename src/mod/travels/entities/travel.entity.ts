import { Driver } from "src/mod/drivers/entities/driver.entity"
import { Shift } from "src/mod/shifts/entities/shift.entity"
import { Ticket } from "src/mod/tickets/entities/ticket.entity"
import { Vehicle } from "src/mod/vehicles/entities/vehicle.entity"
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Travel {

    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => Vehicle, vehicle => vehicle.travels, { cascade: true, nullable: false })
    @JoinColumn({ name: 'vehicle' })
    vehicle: Partial<Vehicle>

    @ManyToOne(() => Driver, drive => drive.travels, { cascade: true, nullable: false })
    @JoinColumn({ name: 'driver' })
    driver: Partial<Driver>

    @ManyToOne(() => Shift, shift => shift.travels, { cascade: true, nullable: false })
    @JoinColumn([
        {name: 'exit', referencedColumnName: 'exit'},
        {name: 'schedule', referencedColumnName: 'schedule'}
    ])
    shift: Partial<Shift>

    @OneToMany(()=> Ticket, ticket=> ticket.travel)
    tickets: Ticket[]
}
