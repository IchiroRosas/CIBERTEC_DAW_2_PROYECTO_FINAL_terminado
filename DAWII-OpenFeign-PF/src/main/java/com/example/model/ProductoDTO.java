package com.example.model;

public class ProductoDTO {
	private int idProducto;
	private String nombreProducto;
	private double precioProducto;
	private String marcaProducto;
	
	public int getIdProducto() {
		return idProducto;
	}
	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}
	public String getNombreProducto() {
		return nombreProducto;
	}
	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}
	public double getPrecioProducto() {
		return precioProducto;
	}
	public void setPrecioProducto(double precioProducto) {
		this.precioProducto = precioProducto;
	}
	public String getMarcaProducto() {
		return marcaProducto;
	}
	public void setMarcaProducto(String marcaProducto) {
		this.marcaProducto = marcaProducto;
	}
}