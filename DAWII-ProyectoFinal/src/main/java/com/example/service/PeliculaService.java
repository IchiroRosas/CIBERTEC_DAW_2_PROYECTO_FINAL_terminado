package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Pelicula;
import com.example.repository.IPeliculaRepository;

@Service
public class PeliculaService {

	@Autowired
	private IPeliculaRepository repoPelicula;

	public List<Pelicula> listarPeliculas() {
		return repoPelicula.findAll();
	}

	public Pelicula obtenerPeliculaPorId(int id) {
		return repoPelicula.findById(id).orElse(null);
	}

	public Pelicula agregarPelicula(Pelicula pelicula) {
		return repoPelicula.save(pelicula);
	}

	public void eliminarPelicula(int id) {
		repoPelicula.deleteById(id);
	}

	public Pelicula actualizarPelicula(Pelicula pelicula) {
		return repoPelicula.save(pelicula);
	}
	
	public List<Pelicula> listarPeliculasPorIdioma(String idiomaPelicula) {
		return repoPelicula.findByIdiomaPelicula(idiomaPelicula);
	}
}