import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @Input()
  headers:Array<string> = new Array<string>();
  @Input()
  items:any[] = [];
  lista:Array<string> = new Array<string>();
  ngOnInit(): void {
    for(let parameter in this.items[0]){
      this.lista.push(parameter);
    }
  }
}
