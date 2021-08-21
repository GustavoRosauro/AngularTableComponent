import { Component } from '@angular/core';
import { TabelaComponent } from './component/tabela/tabela.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  headers:Array<string> = new Array<string>();
  items:any[] = [];
  constructor(){
    this.headers = ['nome','idade']
    this.items = [
        {nome:'Gustavo',idade:29},
        {nome:'Amanda',idade:25}
      ]    
  }
}
