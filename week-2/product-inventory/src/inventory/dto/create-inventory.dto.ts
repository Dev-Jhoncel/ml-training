import { Decimal } from '@prisma/client/runtime/library';

export class CreateInventoryDto {
  product_id: number;
  product_name: string;
  description: string;
  quantity: number;
  price: Decimal;
  type_id: number;
  supplier_id: number;
  operator_id: number;
}
