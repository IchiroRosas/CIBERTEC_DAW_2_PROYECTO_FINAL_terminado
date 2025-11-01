package com.example.model;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "tb_funciones")
public class Funcion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idFuncion;
	
	@Temporal(value = TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date fechaFuncion;
	
	private int idsala;
	private int idpelicula;
	
	@ManyToOne
	@JoinColumn(name = "idsala", insertable = false, updatable = false)
	private Sala objSala;

	@ManyToOne
	@JoinColumn(name = "idpelicula", insertable = false, updatable = false)
	private Pelicula objPelicula;

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

	public Sala getObjSala() {
		return objSala;
	}

	public void setObjSala(Sala objSala) {
		this.objSala = objSala;
	}

	public Pelicula getObjPelicula() {
		return objPelicula;
	}

	public void setObjPelicula(Pelicula objPelicula) {
		this.objPelicula = objPelicula;
	}
}