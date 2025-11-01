package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Admin;
import com.example.repository.IAdminRepository;

@Service
public class AdminService {

	@Autowired
	private IAdminRepository repository;
	
	public Admin findByUsuarioAndContrasenia (String usuario, String contrasenia) {
		return repository.findByNombreUsuarioAndContrasenia(usuario, contrasenia);
	}
	
	public Admin registrarAdmin (Admin admin) {
		return repository.save(admin);
	}
	
}
