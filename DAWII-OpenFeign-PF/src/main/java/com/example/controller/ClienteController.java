package com.example.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.FuncionDTO;
import com.example.model.PeliculaDTO;
import com.example.model.ProductoDTO;
import com.example.model.SalaDTO;
import com.example.proxy.FuncionFeignClient;
import com.example.proxy.PeliculaFeignClient;
import com.example.proxy.ProductoFeignClient;
import com.example.proxy.SalaFeignClient;

@RestController
@RequestMapping("/filtros")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @Autowired
    private FuncionFeignClient funcionFeign;

    @Autowired
    private PeliculaFeignClient peliculaFeign;

    @Autowired
    private ProductoFeignClient productoFeign;

    @Autowired
    private SalaFeignClient salaFeign;

    @GetMapping("/funciones/{fechaFuncion}")
    public List<FuncionDTO> obtenerFuncionesPorFecha(@PathVariable Date fechaFuncion) {
        return funcionFeign.getByFechaFuncion(fechaFuncion);
    }

    @GetMapping("/peliculas/{idiomaPelicula}")
    public List<PeliculaDTO> obtenerPeliculasPorIdioma(@PathVariable String idiomaPelicula) {
        return peliculaFeign.getByIdioma(idiomaPelicula);
    }

    @GetMapping("/productos/{precioProducto}")
    public List<ProductoDTO> obtenerProductosPorPrecio(@PathVariable double precioProducto) {
        return productoFeign.getByPrecioMayor(precioProducto);
    }

    @GetMapping("/salas/{capacidad}")
    public List<SalaDTO> obtenerSalasPorCapacidad(@PathVariable int capacidad) {
        return salaFeign.getByCapacidadMenor(capacidad);
    }
}