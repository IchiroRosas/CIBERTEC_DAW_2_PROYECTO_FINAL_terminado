import { Pelicula } from "../../pelicula/dto/pelicula-dto";
import { Sala } from "../../sala/dto/sala-dto";

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