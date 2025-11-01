package com.example.model;

import java.util.Date;

public class FuncionDTO {
	private int idFuncion;
	private Date fechaFuncion;
	private int idsala;
	private int idpelicula;
	private SalaDTO objSala;
	private PeliculaDTO objPelicula;
	
	public int getIdFuncion() {
		return idFuncion;
	}
	public void setIdFuncion(int idFuncion) {
		this.idFuncion = idFuncion;
	}
	public Date getFechaFuncion() {
		return fechaFuncion;
	}
	public void setFechaFuncion(Date fechaFuncion) {
		this.fechaFuncion = fechaFuncion;
	}
	public int getIdsala() {
		return idsala;
	}
	public void setIdsala(int idsala) {
		this.idsala = idsala;
	}
	public int getIdpelicula() {
		return idpelicula;
	}
	public void setIdpelicula(int idpelicula) {
		this.idpelicula = idpelicula;
	}
	public SalaDTO getObjSala() {
		return objSala;
	}
	public void setObjSala(SalaDTO objSala) {
		this.objSala = objSala;
	}
	public PeliculaDTO getObjPelicula() {
		return objPelicula;
	}
	public void setObjPelicula(PeliculaDTO objPelicula) {
		this.objPelicula = objPelicula;
	}
	
	
}