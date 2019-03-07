import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  Contato: ContatoSalvar;
  ListaContatos: ContatoSalvar[] = [];
  index: any;

  constructor() {
      this.Inicio();
  }

  Inicio() {
      this.index = 0;
      this.Contato = {
          Nome: '',
          Num: '',
      }
  }
  SaveRecord() {
      console.log(this.Contato);
      if (this.index != 0) {
          this.index = 0;
      }
      else {
          this.ListaContatos.push(this.Contato);
      }
      this.Inicio();
  }

  EditRecord(i: any) {
      console.log(i);
      this.index = i;
      this.Contato = this.ListaContatos[i];
  }

  DeleteRecord(i: any) {
      console.log(i);
      this.ListaContatos.splice(i, 1);
  }
}

  /*
  myValue;
  edit(k){
    this.model2.name = this.contatos[k].nome;
    this.model2.position = this.contatos[k].num;
    this.myValue = k;

  }
  Atualiza(){
    let k= this.myValue;
    for(let i=0; i<this.contatos.length;i++){
      if(i==k){
        this.contatos[i]= this.model2;
        this.model2 = {};
      
      }

    }
*/
interface ContatoSalvar {
    Nome: string;
    Num: string;
}

 
  
