package com.example.proxy;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.model.ProductoDTO;

@FeignClient(name = "servicio-producto", url = "http://localhost:8080/api/productos")
public interface ProductoFeignClient {

    @GetMapping("/precio/{precioProducto}")
    List<ProductoDTO> getByPrecioMayor(@PathVariable("precioProducto") double precioProducto);
}