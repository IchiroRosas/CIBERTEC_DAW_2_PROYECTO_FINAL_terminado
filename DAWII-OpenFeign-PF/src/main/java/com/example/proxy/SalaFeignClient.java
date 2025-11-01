package com.example.proxy;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.model.SalaDTO;

@FeignClient(name = "servicio-sala", url = "http://localhost:8080/api/salas")
public interface SalaFeignClient {

    @GetMapping("/capacidad/{capacidad}")
    List<SalaDTO> getByCapacidadMenor(@PathVariable("capacidad") int capacidad);
}