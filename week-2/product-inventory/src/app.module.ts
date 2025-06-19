import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LevelModule } from './level/level.module';
import { TypeModule } from './type/type.module';
import { SupplierModule } from './supplier/supplier.module';
import { OperatorModule } from './operator/operator.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    PrismaModule,
    LevelModule,
    TypeModule,
    SupplierModule,
    OperatorModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
