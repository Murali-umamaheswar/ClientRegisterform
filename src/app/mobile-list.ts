import { Byte } from "@angular/compiler/src/util";

export class MobileList {
    constructor(
        public model_id:string,
        public name_of_the_device:string,
        public year_of_the_release:string,
        public price_of_the_device:string,
        public image_of_the_device:Byte[],
        public memory_rom:string,
        public manufacturer:string,
       
    ) {}
}

