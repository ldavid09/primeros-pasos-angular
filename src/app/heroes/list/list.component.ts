import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listHero:string[] = ['Hulk', 'Spiderman', 'Iroman', 'Thor', 'Captain Marvel'];
  public deleteHero?:string;

  delete():void {
    this.deleteHero= this.listHero.pop();
  }


}
