import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listype} from '../../services/listype';
import { DbserviceService } from '../../services/editdb.service'

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  constructor( private dbs: DbserviceService) {       
  }

  ngOnInit(): void {   
    
    setInterval( () => {     
      this.dbs.getProdlist().subscribe (
        (response) => {            
          this.ProdList = response;  
          this.delid = response[response.length - 1].id;  
        }     
      )                         
    }, 200)        
  } 

  ProdList: listype[];
  delid: number;

  @Output() id = new EventEmitter<number>();    
  categoryinp: string;
  countinp: number;

  editrec(id): void {    
    this.id.emit(id);    
  }

  delrec(id: number): void {
    this.dbs.delProd(id);       
  }

  addrec() {
    let id;    
    this.dbs.getProdlist().subscribe(
      (response) => {        
        id = response.length > 0 ? response[response.length - 1].id + 1 : 0;        
      }
    )
    this.dbs.addProd({
      id: id,
      name: "Название",
      articul: "Артикул",
      category: "Мебель",
      price: 0,
      prod: "Производитель",
      weight: 0,
      count: 0
    })
  }

  delastrec() {    
    this.dbs.delProd(this.delid);   
  }

  sortedData;

}