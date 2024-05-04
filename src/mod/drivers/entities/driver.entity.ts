import { Travel } from "src/mod/travels/entities/travel.entity"
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class Driver {
    @PrimaryColumn({type: 'varchar', length: 20})
    id: string //DNI

    @Column({ type: 'varchar', length: 150, nullable: false })
    names: string

    @Column({ type: 'char', length: 10, nullable: false })
    phone: string

    @Column({ type: 'boolean', default: true })
    status: boolean

    @Column({ type: 'text', nullable: true })
    photo?: string

    @OneToMany(()=> Travel, travel => travel.driver)
    travels: Travel[]
}
