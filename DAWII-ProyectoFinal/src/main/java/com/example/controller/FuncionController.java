package com.example.controller;

import java.sql.Date;
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

import com.example.model.Funcion;
import com.example.service.FuncionService;

@RestController
@RequestMapping("/api/funciones")
@CrossOrigin(origins = "http://localhost:4200") 
public class FuncionController {

	@Autowired
	private FuncionService servicio;
	
	@GetMapping
	public ResponseEntity<List<Funcion>> listarFunciones() {
		List<Funcion> funciones = servicio.listarFunciones();
		if (funciones.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(funciones);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Funcion> obtenerFuncionPorId(@PathVariable("id") int id) {
		Funcion funcion = servicio.obtenerFuncionPorId(id);
		if (funcion == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(funcion);
	}
	
	@PostMapping
	public ResponseEntity<Funcion> agregarFuncion(@RequestBody Funcion funcion) {
		try {
			Funcion funcionNueva = servicio.agregarFuncion(funcion);
			return ResponseEntity.status(HttpStatus.CREATED).body(funcionNueva);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> eliminarFuncion(@PathVariable("id") int id) {
		Funcion funcion = servicio.obtenerFuncionPorId(id);
		if (funcion == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Funcion no existe");
		}
		try {
			servicio.eliminarFuncion(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Funcion eliminada");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar");
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizarFuncion(@PathVariable("id") int id, @RequestBody Funcion nueva) {
		Funcion anterior = servicio.obtenerFuncionPorId(id);
		if (anterior == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Funcion no existe");
		}
		
		anterior.setIdpelicula(nueva.getIdpelicula());
		anterior.setIdsala(nueva.getIdsala());
		anterior.setFechaFuncion(nueva.getFechaFuncion());
		
		try {
			Funcion cambiado = servicio.actualizarFuncion(anterior);
			return ResponseEntity.status(HttpStatus.CREATED).body("Funcion actualizada: \n" + cambiado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar");
		}
	}
	
	@GetMapping("/fecha/{fechaFuncion}")
	public ResponseEntity<List<Funcion>> listarFuncionesFechas(@PathVariable("fechaFuncion") Date fechaFuncion) {
		List<Funcion> funciones = servicio.listarFuncionesFechas(fechaFuncion);
		if (funciones.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(funciones);
		}
	}
}