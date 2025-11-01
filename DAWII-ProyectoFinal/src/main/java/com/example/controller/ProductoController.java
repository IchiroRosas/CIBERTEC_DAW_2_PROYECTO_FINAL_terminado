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

import com.example.model.Producto;
import com.example.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200") 
public class ProductoController {
	
	@Autowired
	private ProductoService servicio;

	@GetMapping
	public ResponseEntity<List<Producto>> listarProductos() {
		List<Producto> productos = servicio.listarProductos();
		if (productos.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(productos);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable("id") int id) {
		Producto producto = servicio.obtenerProductoPorId(id);
		if (producto == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(producto);
	}
	
	@PostMapping
	public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
		try {
			Producto productoNuevo = servicio.agregarProducto(producto);
			return ResponseEntity.status(HttpStatus.CREATED).body(productoNuevo);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> eliminarProducto(@PathVariable("id") int id) {
		Producto producto = servicio.obtenerProductoPorId(id);
		if (producto == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Producto no existe");
		}
		try {
			servicio.eliminarProducto(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Producto eliminada");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar");
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizarPelicula(@PathVariable("id") int id, @RequestBody Producto nuevo) {
		Producto anterior = servicio.obtenerProductoPorId(id);
		if (anterior == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Producto no existe");
		}
		
		anterior.setNombreProducto(nuevo.getNombreProducto());
		anterior.setMarcaProducto(nuevo.getMarcaProducto());
		anterior.setPrecioProducto(nuevo.getPrecioProducto());
		
		try {
			Producto cambiado = servicio.actualizarProducto(anterior);
			return ResponseEntity.status(HttpStatus.CREATED).body("Producto actualizada: \n" + cambiado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar");
		}
	}
	
	@GetMapping("/precio/{precioProducto}")
	public ResponseEntity<List<Producto>> listarProductosPrecio(@PathVariable("precioProducto") double precioProducto) {
		List<Producto> productos = servicio.listarPorPrecio(precioProducto);
		if (productos.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.ok(productos);
		}
	}
}