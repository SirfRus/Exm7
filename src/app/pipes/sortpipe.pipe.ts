import { Pipe, PipeTransform } from '@angular/core';
import { listype } from '../services/listype';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(records: listype[], category: string, count: number = -1): any[] { 
    let filt; 
    if((!category || category === 'Все') && count != -1) {
      filt = records.filter((record) => record.count >= count);
      return filt;     
    }
    else   
    if(category === 'Все' || !category) return records;      
    else
    if(category && category != 'Все' && count != -1) {
      filt = records.filter((record) => record.category == category && record.count >= count);      
      return filt;     
    }   
    else       
    if(category && category !== 'Все' && count === -1) {
      filt = records.filter((record) => record.category == category);
      return filt;     
    }              
  }

}
