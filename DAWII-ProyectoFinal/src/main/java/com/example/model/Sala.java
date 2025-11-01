package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "tb_salas") 
public class Sala {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idsala;
	private String codsala;
	private int capacidad;
	
	public int getIdsala() {
		return idsala;
	}
	public void setIdsala(int idsala) {
		this.idsala = idsala;
	}
	public String getCodsala() {
		return codsala;
	}
	public void setCodsala(String codsala) {
		this.codsala = codsala;
	}
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}	
}