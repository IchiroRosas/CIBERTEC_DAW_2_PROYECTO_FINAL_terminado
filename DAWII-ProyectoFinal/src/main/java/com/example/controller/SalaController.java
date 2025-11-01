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

import com.example.model.Sala;
import com.example.service.SalaService;

@RestController
@RequestMapping("/api/salas")
@CrossOrigin(origins = "http://localhost:4200") 

public class SalaController {

	@Autowired
	private SalaService servicio;

	@GetMapping()
	public ResponseEntity<List<Sala>> listarTodas() {
		List<Sala> salas = servicio.listarSalas();
		if (salas.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(salas);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Sala> obtenerSalaPorId(@PathVariable("id") int id) {
		Sala sala = servicio.obtenerSalaPorId(id);
		if (sala == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(sala);
	}

	@PostMapping
	public ResponseEntity<Sala> agregarSala(@RequestBody Sala sala) {
		try {
			Sala salaNueva = servicio.agregarSala(sala);
			return ResponseEntity.status(HttpStatus.CREATED).body(salaNueva);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> eliminarSala(@PathVariable("id") int id) {
		Sala sala = servicio.obtenerSalaPorId(id);
		if (sala == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Sala no existe");
		}
		try {
			servicio.eliminarSala(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Sala eliminada");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar");
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> actualizarSala(@PathVariable("id") int id, @RequestBody Sala nueva) {
		Sala anterior = servicio.obtenerSalaPorId(id);
		if (anterior == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Sala no existe");
		}
		anterior.setCodsala(nueva.getCodsala());
		anterior.setCapacidad(nueva.getCapacidad());
		try {
			Sala cambiado = servicio.actualizarSala(anterior);
			return ResponseEntity.status(HttpStatus.CREATED).body("Sala actualizada: \n" + cambiado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar");
		}
	}
	
	@GetMapping("/capacidad/{capacidad}")
	public ResponseEntity<List<Sala>> listarSalaCapacidad(@PathVariable("capacidad") int capacidad) {
		List<Sala> salas = servicio.listarSalasCapacidad(capacidad);
		if (salas.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(salas);
		}
	}
}