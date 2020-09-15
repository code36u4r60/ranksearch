package com.code36u4r60.ranksearch.repositories;

import com.code36u4r60.ranksearch.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends JpaRepository<Genre,Long>{
    
}
