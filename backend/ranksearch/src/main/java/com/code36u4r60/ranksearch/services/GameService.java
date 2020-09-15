package com.code36u4r60.ranksearch.services;

import java.util.List;
import java.util.stream.Collectors;

import com.code36u4r60.ranksearch.dto.GameDTO;
import com.code36u4r60.ranksearch.entities.Game;
import com.code36u4r60.ranksearch.repositories.GameRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GameService {

    @Autowired
    private GameRepository repository;

    @Transactional(readOnly = true)
    public List<GameDTO> findAll() {
        List<Game> list = repository.findAll();
        return list.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
    }

}
