package com.code36u4r60.ranksearch.repositories;
import com.code36u4r60.ranksearch.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game,Long>{
    
}
