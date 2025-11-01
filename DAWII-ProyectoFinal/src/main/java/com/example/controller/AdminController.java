package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Admin;
import com.example.service.AdminService;

@RestController
@RequestMapping("/api/acceso")
@CrossOrigin(origins = "http://localhost:4200") 
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@PostMapping("/login")
	public ResponseEntity<?> login (@RequestBody Admin request){
		Admin admin = service.findByUsuarioAndContrasenia(request.getNombreUsuario(), request.getContrasenia());
		if (admin == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(admin);
	}
	
	@PostMapping("/registro")
	public ResponseEntity<?> registroAdmin (@RequestBody Admin request){
		try {
			Admin admin = service.registrarAdmin(request);
			return ResponseEntity.status(HttpStatus.CREATED).body(admin);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
}
