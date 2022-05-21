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

  public vetorCursos!: Curso[];
   public curso!:Curso; //nosso objeto curso que podemos alterar, deletar
   public id!: number; //é o id do curso para quando quisermos alterar, excluir...
 //é o id do curso para quando quisermos alterar, excluir...

//construtor
  constructor(public servico:CursosService) { };//para que possamos ter acesso aos nossos services.ts

  
  //inicializador quando eu abro o software ele já pode executar alguma ação
  ngOnInit(){

    //inicializando um objeto
    this.id=-1;//o id serviu para percorre o vetor, vamos  dizer que ele é -1, -1 é uma posição inxistente no vetor
                //através desse id eu vou alterar o cadastrar
      this.curso = new Curso("",0,"");
    //utilizando o metodo listar
      this.vetorCursos=this.servico.listar();
  }

  //função cadastrar quando clico no button
  cadastrar(){
    this.servico.cadastrar(this.curso);
    //ZERAR O OBJETO
    this.curso = new Curso("",0,"");
  }

  excluir(id: number){
    this.servico.excluir(id);
    this.id=-1;
  }

  editar(id: number){

    this.id=id;
    //eu instancio um objeto
    this.curso = new Curso(
    this.vetorCursos[id].nomeCurso,
    this.vetorCursos[id].valorCurso,
    this.vetorCursos[id].areaCurso
    
    );
  }
  //Atualizar
  atualizar(){
    this.servico.alterar(this.id, this.curso);
    this.curso = new Curso("",0,"");
    this.id=-1;
  }

}
