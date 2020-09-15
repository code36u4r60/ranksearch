package com.code36u4r60.ranksearch.services;

import java.time.Instant;

import com.code36u4r60.ranksearch.dto.RecordInsertDTO;
import com.code36u4r60.ranksearch.dto.RecordDTO;
import com.code36u4r60.ranksearch.entities.Game;
import com.code36u4r60.ranksearch.entities.Record;
import com.code36u4r60.ranksearch.repositories.GameRepository;
import com.code36u4r60.ranksearch.repositories.RecordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecordService {

    @Autowired
    private RecordRepository repository;

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public RecordDTO insert(RecordInsertDTO dto) {

        Record entity = new Record();

        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());

        Game game = gameRepository.getOne(dto.getGameId());
        entity.setGame(game);

        entity = repository.save(entity);

        return new RecordDTO(entity);
    }

    @Transactional(readOnly = true)
    public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
        return repository.findByMoments(minDate, maxDate, pageRequest).map(RecordDTO :: new);
    }

}
