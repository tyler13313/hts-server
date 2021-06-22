import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import StockItem from './stockItem.model';
import User from './user.model';

@Table
export default class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  type: 'buy' | 'sell';

  @ForeignKey(() => StockItem)
  @Column
  stockItemId: bigint;

  @ForeignKey(() => User)
  @Column
  userId: BigInt;

  @AllowNull(false)
  @Column
  unitPrice: number;

  @AllowNull(false)
  @Column
  count: number;

  @AllowNull(false)
  @Column
  totalPrice: BigInt;

  @BelongsTo(() => StockItem)
  stockItem: StockItem;

  @BelongsTo(() => User)
  user: User;
}
