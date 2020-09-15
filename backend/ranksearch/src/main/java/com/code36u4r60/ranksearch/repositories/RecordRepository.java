package com.code36u4r60.ranksearch.repositories;
import com.code36u4r60.ranksearch.entities.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends JpaRepository<Record,Long>{
    
}
