package com.example.proxy;

import java.sql.Date;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.model.FuncionDTO;

@FeignClient(name = "servicio-funcion", url = "http://localhost:8080/api/funciones")
public interface FuncionFeignClient {

    @GetMapping("/fecha/{fechaFuncion}")
    List<FuncionDTO> getByFechaFuncion(@PathVariable("fechaFuncion") Date fechaFuncion);
}