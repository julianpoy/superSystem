import { Pipe, PipeTransform } from '@angular/core';

//This pipe will take json, and make it into an array for *ngFor
//See: http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({
  name: 'jsonNgfor'
})
export class JsonNgforPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let keys = [];
      for (let key in value) {
        keys.push({key: key, value: value[key]});
      }
      return keys;
  }

}
