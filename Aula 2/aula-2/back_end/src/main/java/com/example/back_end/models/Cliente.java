//aqui eu defino aonde este arquivo esta localizado na pasta com dentro da pasta example dentro da pasta back_end dentro da pasta models
package com.example.back_end.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


//aqui no @doument eu to falando que essa classe cliente representa um documento da coleção clientes dentro do mongoDB; 
@Document(collection = "clientes")

public class Cliente {

    @Id
    private String id;

    private String nome;
    private String email;
    private String senha;

    // Getters e setters
}