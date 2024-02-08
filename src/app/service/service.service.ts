import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { tipoTarea } from '../models/tipo_tarea';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private tareas:Tarea[] = [];
  private tipos:tipoTarea[]= [];

  constructor() {
    this.tareas = [];

    this.tipos = [
      {
        id:0,
        desc: 'sin definir'
      },
      {
        id: 1,
        desc: 'Electrico'
      },
      {
        id: 2,
        desc: 'Planta'
      },
      {
        id: 3,
        desc: 'Fuego'
      },
      {
        id: 4,
        desc: 'Agua'
      },
      {
        id: 5,
        desc: 'Dragon'
      }
    ];
  }

    //metodo que retorna el arreglo de tareas

    getTareas() {
      return this.tareas;
    }
  
    // método que retorne los tipos de tarea
    getTipos(){
      return this.tipos;
    }
  
    //método para agregar tareas al arreglo
    agregarTarea(tarea:Tarea){
      this.tareas.push(tarea);
    }
  
    //método que inicializa una tarea nueva
    nuevaTarea():Tarea {
      return{
        id: this.tareas.length + 1,
        nombre: '',
        descripcion: '',
        fecha: '',
        estado: 0
      };
    }

}
