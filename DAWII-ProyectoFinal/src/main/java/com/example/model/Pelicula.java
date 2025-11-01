package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "tb_peliculas") 
public class Pelicula {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idpelicula;
	private String nombrepelicula;
	private String directorpelicula;
	private String generopelicula;
	private String duracionpelicula;
	@Column(name = "idiomapelicula")
	private String idiomaPelicula;
	private String clasificacionpelicula;
	
	public int getIdpelicula() {
		return idpelicula;
	}
	public void setIdpelicula(int idpelicula) {
		this.idpelicula = idpelicula;
	}
	public String getNombrepelicula() {
		return nombrepelicula;
	}
	public void setNombrepelicula(String nombrepelicula) {
		this.nombrepelicula = nombrepelicula;
	}
	public String getDirectorpelicula() {
		return directorpelicula;
	}
	public void setDirectorpelicula(String directorpelicula) {
		this.directorpelicula = directorpelicula;
	}
	public String getGeneropelicula() {
		return generopelicula;
	}
	public void setGeneropelicula(String generopelicula) {
		this.generopelicula = generopelicula;
	}
	public String getDuracionpelicula() {
		return duracionpelicula;
	}
	public void setDuracionpelicula(String duracionpelicula) {
		this.duracionpelicula = duracionpelicula;
	}
	public String getIdiomaPelicula() {
		return idiomaPelicula;
	}
	public void setIdiomaPelicula(String idiomaPelicula) {
		this.idiomaPelicula = idiomaPelicula;
	}
	public String getClasificacionpelicula() {
		return clasificacionpelicula;
	}
	public void setClasificacionpelicula(String clasificacionpelicula) {
		this.clasificacionpelicula = clasificacionpelicula;
	}
}