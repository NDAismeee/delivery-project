export class Consigner {
    consignerID?: number;
    consignerName?: String;

    constructor(consignerID, consignerName) {
        if (consignerID != null) this.consignerID = consignerID;
        if (consignerName != null) this.consignerName = consignerName;
    }
}