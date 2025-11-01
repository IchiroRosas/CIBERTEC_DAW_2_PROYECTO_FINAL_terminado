package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Producto;
import com.example.repository.IProductoRepository;

@Service
public class ProductoService {

	@Autowired
	private IProductoRepository repoProd;
	
	public List<Producto> listarProductos() {
		return repoProd.findAll();
	}

	public Producto obtenerProductoPorId(int id) {
		return repoProd.findById(id).orElse(null);
	}

	public Producto agregarProducto(Producto prod) {
		return repoProd.save(prod);
	}

	public void eliminarProducto(int id) {
		repoProd.deleteById(id);
	}

	public Producto actualizarProducto(Producto prod) {
		return repoProd.save(prod);
	}	
	
	public List<Producto> listarPorPrecio(double precioProducto) {
		return repoProd.findByPrecioProductoGreaterThan(precioProducto);
	}
}