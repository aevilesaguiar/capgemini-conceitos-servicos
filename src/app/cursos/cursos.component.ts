import { CursosService } from './cursos.service';
import { Curso } from './Curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',//nome da nossa estrutura
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos

  //Atributos

  //Atributos
  //Atributos

  public vetorCursos!: Curso[];
   public curso!:Curso; //nosso objeto curso que podemos alterar, deletar
   public id!: number; //é o id do curso para quando quisermos alterar, excluir...
 //é o id do curso para quando quisermos alterar, excluir...

//construtor
  constructor(public servico:CursosService) { };//para que possamos ter acesso aos nossos services.ts

  
  //inicializador quando eu abro o software ele já pode executar alguma ação
  ngOnInit(){
    //inicializando um objeto
      this.curso = new Curso();
    //utilizando o metodo listar
      this.vetorCursos=this.servico.listar();
  }




}
