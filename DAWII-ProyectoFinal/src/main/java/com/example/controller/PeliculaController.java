package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Pelicula;
import com.example.service.PeliculaService;

@RestController
@RequestMapping("/api/peliculas")
@CrossOrigin(origins = "http://localhost:4200") 

public class PeliculaController {

	@Autowired
	private PeliculaService servicio;
	
	@GetMapping
	public ResponseEntity<List<Pelicula>> listarTodas() {
		List<Pelicula> peliculas = servicio.listarPeliculas();
		if (peliculas.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(peliculas);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pelicula> obtenerPeliculaPorId(@PathVariable("id") int id) {
		Pelicula pelicula = servicio.obtenerPeliculaPorId(id);
		if (pelicula == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(pelicula);
	}

	@PostMapping
	public ResponseEntity<Pelicula> agregarPelicula(@RequestBody Pelicula pelicula) {
		try {
			Pelicula peliculalaNueva = servicio.agregarPelicula(pelicula);
			return ResponseEntity.status(HttpStatus.CREATED).body(peliculalaNueva);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> eliminarPelicula(@PathVariable("id") int id) {
		Pelicula pelicula = servicio.obtenerPeliculaPorId(id);
		if (pelicula == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Película no existe");
		}
		try {
			servicio.eliminarPelicula(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Película eliminada");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar");
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> actualizarPelicula(@PathVariable("id") int id, @RequestBody Pelicula nueva) {
		Pelicula anterior = servicio.obtenerPeliculaPorId(id);
		if (anterior == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Película no existe");
		}
		anterior.setNombrepelicula(nueva.getNombrepelicula());
		anterior.setDirectorpelicula(nueva.getDirectorpelicula());
		anterior.setGeneropelicula(nueva.getGeneropelicula());
		anterior.setDuracionpelicula(nueva.getDuracionpelicula());
		anterior.setIdiomaPelicula(nueva.getIdiomaPelicula());
		anterior.setClasificacionpelicula(nueva.getClasificacionpelicula());
		try {
			Pelicula cambiado = servicio.actualizarPelicula(anterior);
			return ResponseEntity.status(HttpStatus.CREATED).body("Película actualizada: \n" + cambiado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar");
		}
	}
	
	@GetMapping("/idioma/{idiomaPelicula}")
	public ResponseEntity<List<Pelicula>> listarPeliculasporIdioma(@PathVariable("idiomaPelicula") String idiomaPelicula) {
		List<Pelicula> peliculas = servicio.listarPeliculasPorIdioma(idiomaPelicula);
		if (peliculas.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(peliculas);
		}
	}
}