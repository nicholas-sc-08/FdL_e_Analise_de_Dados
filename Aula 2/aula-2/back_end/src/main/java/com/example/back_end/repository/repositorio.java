package com.example.back_end.repository;

import com.example.back_end.models.Cliente;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface repositorio extends MongoRepository<Cliente, String>{

// Método personalizado (Spring cria isso automaticamente
    List<Cliente> findByNome(String nome);


}