package com.code36u4r60.ranksearch.resources;

import java.util.List;

import com.code36u4r60.ranksearch.dto.GameDTO;
import com.code36u4r60.ranksearch.services.GameService;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/games")
public class GameResources {

    @Autowired
    private GameService service;

    @GetMapping
    public ResponseEntity<List<GameDTO>> findAll(){
        List<GameDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
