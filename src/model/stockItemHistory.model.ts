import { AllowNull, AutoIncrement, Column, DataType, BelongsTo, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import StockItem from './stockItem.model';

@Table
export default class StockItemHistory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @ForeignKey(() => StockItem)
  @Column
  stockItemId: bigint;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  data: Date;

  @AllowNull(false)
  @Column
  startPrice: number;

  @AllowNull(false)
  @Column
  endPrice: number;

  @AllowNull(false)
  @Column
  price: number;

  @BelongsTo(() => StockItem)
  stockItem: StockItem;
}
