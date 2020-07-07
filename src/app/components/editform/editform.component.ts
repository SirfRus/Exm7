import { Component, OnInit, Input } from '@angular/core';
import { listype } from '../../services/listype';
import { DbserviceService } from '../../services/editdb.service'
import { FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  constructor( private dbs: DbserviceService) {    
    this.id = new FormControl("", [Validators.required]);
    this.Name = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9а-яА-Я]+$")]);
    this.Articul = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9а-яА-Я]+$")]);
    this.Category = new FormControl("", [Validators.required]);
    this.Price = new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]);
    this.Prod = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9а-яА-Я]+$")]);
    this.Weight = new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]);
    this.Count = new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]);       
  }

  ngOnInit(): void {  
    setInterval(() => {

      if (this.editid != undefined) {
        this.checker = true;        
      }
    },200)
  }
  

  getErrorMessage() {
    if (this.Name.hasError('required')) {
      return 'Введдите название';
    }

    return this.Name.hasError('email') ? 'Некорректное название' : '';
  }
      
  id: FormControl;
  Name: FormControl;
  Articul: FormControl;
  Category: FormControl;
  Price: FormControl;
  Prod: FormControl;
  Weight: FormControl;
  Count: FormControl     

  @Input() editid;   
    
  records: listype[];
  checker: boolean = false;  

  addrecord() {    
    let id;
    this.dbs.getProdlist().subscribe(
      (response) => {
        this.records = response;
        id = this.records.length > 0 ? this.records[this.records.length - 1].id + 1 : 0;
      }
    )
    this.dbs.addProd({
      id: id,
      name: this.Name.value,
      articul: this.Articul.value,
      category: this.Category.value,
      price: this.Price.value,
      prod: this.Prod.value,
      weight: this.Weight.value,
      count: this.Count.value
    })
  }   

  acceptrecord() {
    this.checker = false;    
    this.dbs.modProd( this.editid, {
      id: this.editid,
      name: this.Name.value,
      articul: this.Articul.value,
      category: this.Category.value,
      price: this.Price.value,
      prod: this.Prod.value,
      weight: this.Weight.value,
      count: this.Count.value
    })    
    this.editid = undefined;
  }
    
}

