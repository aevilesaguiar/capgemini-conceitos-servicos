import { CursosComponent } from './cursos.component';
import { Curso } from './Curso';
import { Injectable } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

//acesso total do serviço, no caso do 'root'
@Injectable({
  providedIn: 'root'
})
//classe
export class CursosService {

  //construtor
  constructor(){};

  //vetor de cursos
  public vetorCursos:Curso[] = [
    new Curso("Angular",800,"Desenvolvimento"),
    new Curso("Java",890,"Desenvolvimento"),
    new Curso("Photoshop",500,"Designer")
    
  ];

  //cadastro de cursos
 public cadastrar(curso:Curso){//eu vou cadastrar um objeto que terá nome do curso/area/valor
      this.vetorCursos.push(curso); //push adiciona 1 ou mais elementosao final de uma array
 }


  //seleção de cursos
  public listar(){
   return this.vetorCursos;
  }


  //alteração de cursos
  public alterar(id:number, curso:Curso){
    return this.vetorCursos[id]=curso;//pega o vetor na posição do id e vou colocar um novo curso/valor ou area
  }

  //exclusão de cursos

  public excluir(id:number){
    return this.vetorCursos.splice(id,1);//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
  }

}
