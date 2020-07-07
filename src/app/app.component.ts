import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frolov1020';

  editId;
  checker: boolean = false;

  getId(id) {
    this.editId = id;        
  }
}
