import { AllowNull, AutoIncrement, Column, BelongsTo, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './user.model';

@Table
export default class UserStock extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @ForeignKey(() => User)
  @Column
  userId: bigint;

  @AllowNull(false)
  @Column
  unitPrice: number;

  @AllowNull(false)
  @Column
  count: number;

  @AllowNull(false)
  @Column
  totalPrice: bigint;

  @BelongsTo(() => User)
  user: User;
}
