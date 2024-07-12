import { Injectable } from "@nestjs/common";
import { WarehouseDTO } from "src/dto/warehouse.dto";
import { Warehouse } from "src/models/warehouse.model";


@Injectable()
export class WarehouseService {

    private id = 3;

    private warehouses: Warehouse[] = [
        {warehouseID: 1,
        warehouseName: 'Le Chan',
        warehouseAddress: '30 Hai Ba Trung, Le Chan, HP',     
        },
        {warehouseID: 2,
        warehouseName: 'Ngo Quyen',
        warehouseAddress: '72 Lach Tray, Ngo Quyen, HP'
        },
        {warehouseID: 3,
        warehouseName: 'Hoang Van Thu',
        warehouseAddress: '224 Hoang Mai, Hoang Van Thu, Hoang Mai, HN'
        }
    ]

    getWarehouseInformation(wID: number): Warehouse {
        return this.warehouses.find(item => item.warehouseID === wID);
    }

    getAllWarehouses(): Warehouse[] {
        return this.warehouses;
    }

    createWarehouse(warehouseDTO: WarehouseDTO): String {
        this.id += 1;
        const warehouse: Warehouse = {
            warehouseID: this.id,
            ...warehouseDTO
        }
        const index = this.warehouses.findIndex(item => item.warehouseID === warehouse.warehouseID);
        if (index !== -1) {
            this.id -= 1;
            return 'Already has this warehouse';
        }else {
            this.warehouses.push(warehouse);
            return 'warehouse added successfully';
        }
    }

    deleteWarehouse(wID: number): boolean {
        const index = this.warehouses.findIndex(item => item.warehouseID === wID);
        if (index !== -1) {
            this.warehouses.splice(index, 1);
            return true;
        }
        return false;
    }

    updateWarehouse(warehouseDTO: WarehouseDTO, id: number): String {
        const index = this.warehouses.findIndex(item => item.warehouseID === id);
        if (index !== -1) {
            this.warehouses[index].warehouseName = warehouseDTO.warehouseName;
            this.warehouses[index].warehouseAddress = warehouseDTO.warehouseAddress;
            return 'Update successfully';
        }
        return 'Do not have this warehouse';
    }
}