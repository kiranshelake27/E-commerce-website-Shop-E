// customization using pipe //


import { Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name:"dash_to_space"
})
 export class SpaceCoverterPipe implements PipeTransform // pipetransfrom interface
{
    transform(value:string):string {
        return value.replace("-"," ")
        
    }

}