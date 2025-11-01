package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Sala;
import com.example.repository.ISalaRepository;

@Service
public class SalaService {

	@Autowired
	private ISalaRepository repoSala;

	public List<Sala> listarSalas() {
		return repoSala.findAll();
	}

	public Sala obtenerSalaPorId(int id) {
		return repoSala.findById(id).orElse(null);
	}

	public Sala agregarSala(Sala sala) {
		return repoSala.save(sala);
	}

	public void eliminarSala(int id) {
		repoSala.deleteById(id);
	}

	public Sala actualizarSala(Sala sala) {
		return repoSala.save(sala);
	}	
	
	public List<Sala> listarSalasCapacidad(int capacidad) {
		return repoSala.findByCapacidadLessThan(capacidad);
	}
}