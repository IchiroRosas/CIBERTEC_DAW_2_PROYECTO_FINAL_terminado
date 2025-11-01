package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Sala;

@Repository
public interface ISalaRepository extends JpaRepository<Sala, Integer>{
	List<Sala> findByCapacidadLessThan(int capacidad);
}