import { Injectable } from "@nestjs/common";
import { ConsignerDTO } from "src/dto/consigner.dto";
import { Consigner } from "src/models/consigner.model";

@Injectable()
export class ConsignerService {
    private id;

    private consigners: Consigner[] = []

    getConsignerInformationByID(id: number): Consigner {
        return this.consigners.find(item => id === item.consignerID);
    }

    getAllConsigner(): Consigner[] {
        return this.consigners;
    }

    createConsigner(consignerDTO: ConsignerDTO): String {
        this.id += 1;
        const consigner: Consigner = {
            consignerID: this.id,
            ...consignerDTO
        }

        const index = this.consigners.findIndex(item => item.consignerName === consigner.consignerName);
        if (index !== -1) {
            this.id -= 1;
            return "Already had this consigner";
        }else {
            this.consigners.push(consigner);
            return "Create successfully";
        }
    }
    deleteConsignerByID(id: number): String {
        const index = this.consigners.findIndex(item => item.consignerID === id);
        if (index !== -1) {
            this.consigners.splice(index);
            return "Delete success"
        }
        return "Doesn't have this consigner";
    }

    updateConsiger(consignerDTO: ConsignerDTO, id: number): String {
        const index = this.consigners.findIndex(item => item.consignerID === id);
        if (index !== -1) {
            this.consigners[index].consignerName = consignerDTO.consignerName;
            return "Update success"
        }
        return "Doesn't have this consigner";
    }
}