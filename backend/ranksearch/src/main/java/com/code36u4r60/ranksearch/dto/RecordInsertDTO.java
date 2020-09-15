package com.code36u4r60.ranksearch.dto;

import java.io.Serializable;

public class RecordInsertDTO implements Serializable{
   
private static final long serialVersionUID = 1L;
    
    private String name;
    private Integer age;
    private Long gameId;


    public RecordInsertDTO() {
    }


    public RecordInsertDTO(String name, Integer age, Long gameID) {
        this.name = name;
        this.age = age;
        this.gameId = gameID;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Long getGameId() {
        return this.gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

}
