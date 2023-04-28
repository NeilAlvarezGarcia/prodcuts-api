import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("int", { default: 0 })
  quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;
}

export default Product;
