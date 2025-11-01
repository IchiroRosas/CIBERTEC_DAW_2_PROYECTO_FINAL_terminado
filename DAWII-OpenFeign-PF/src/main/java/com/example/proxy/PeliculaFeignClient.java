package com.example.proxy;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.model.PeliculaDTO;

@FeignClient(name = "servicio-pelicula", url = "http://localhost:8080/api/peliculas")
public interface PeliculaFeignClient {

    @GetMapping("/idioma/{idiomaPelicula}")
    List<PeliculaDTO> getByIdioma(@PathVariable("idiomaPelicula") String idiomaPelicula);
}