import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bom dia';


  contatos = [
    {nome:"lucas",num:"6543767685"},
    {nome:"Renato",num:"2465654764"}
    ]
    
    model:any={};
    model2:any={};
  add(){
    this.contatos.push(this.model);
    this.model = {};
    console.log("Cadastrado com Sucesso")

  }
  delete(i){
    this.contatos.splice(i,1);
    console.log("Deletado com sucesso")
    
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
  }

 
  
