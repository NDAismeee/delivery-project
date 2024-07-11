export class Warehouse {
    warehouseID?: number;
    warehouseName?: string;
    warehouseAddress?: string;
    
    constructor(warehouseID, warehouseName, warehouseAddress) {
        if (warehouseID !== null) this.warehouseID = warehouseID;
        if (warehouseName !== null) this.warehouseName = warehouseName;
        if (warehouseAddress !== null) this.warehouseAddress= warehouseAddress;
    }
}
