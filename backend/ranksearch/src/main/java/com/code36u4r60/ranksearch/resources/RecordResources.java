package com.code36u4r60.ranksearch.resources;

import com.code36u4r60.ranksearch.dto.RecordDTO;
import com.code36u4r60.ranksearch.dto.RecordInsertDTO;
import com.code36u4r60.ranksearch.services.RecordService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/records")
public class RecordResources {

    @Autowired
    private RecordService service;

    @PostMapping
    public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto){
        
        RecordDTO newDto = service.insert(dto);

        return ResponseEntity.ok().body(newDto);
    }
}
