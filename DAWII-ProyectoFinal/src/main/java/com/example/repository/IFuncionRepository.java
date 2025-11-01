package com.example.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Funcion;

@Repository
public interface IFuncionRepository extends JpaRepository<Funcion, Integer>{
	List<Funcion> findByFechaFuncion(Date fechaFuncion);
}
