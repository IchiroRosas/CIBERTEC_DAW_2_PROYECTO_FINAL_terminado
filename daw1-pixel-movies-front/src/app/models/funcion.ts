import { Pelicula } from "./pelicula";
import { Sala } from "./sala";

export interface Funcion {
    idFuncion: number;
    fechaFuncion: Date;
    idsala: number;
    idpelicula: number;
    objSala: Sala;
    objPelicula: Pelicula;   
}

export interface FuncionInserto{
    fechaFuncion: Date;
      idsala: number;
      idpelicula: number;
}

export interface FuncionUpdate{
    idFuncion: number;
    fechaFuncion: Date;
    idsala: number;
    idpelicula: number;
}