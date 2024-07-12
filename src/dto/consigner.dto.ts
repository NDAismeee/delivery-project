import { IsString } from 'class-validator'

export class ConsignerDTO {
    @IsString()
    consignerName?: String;
}