import { Travel } from "src/mod/travels/entities/travel.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryColumn({ type: 'varchar', length: 20 })
    id: string //placa

    @Column({ type: 'varchar', length: 180, nullable: false })
    brand: string

    @Column({ type: 'integer', nullable: false })
    capacity: number //capacidad

    @Column({ type: 'boolean', default: true })
    status: boolean


    @OneToMany(()=> Travel, travel => travel.vehicle)
    travels: Travel[]
}
