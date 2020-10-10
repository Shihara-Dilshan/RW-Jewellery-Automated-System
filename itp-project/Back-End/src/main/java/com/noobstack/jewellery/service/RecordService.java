package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Record;
import com.noobstack.jewellery.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Service
public class RecordService {
    private RecordRepository recordRepository;

    @Autowired
    public RecordService(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    public List<Record> getAllRecords() {
        return this.recordRepository.findAll();
    }

    public ResponseEntity<Record> addNewAdmin(Record record) throws URISyntaxException {
        Record result = this.recordRepository.save(record);
        return ResponseEntity.created(new URI("/add" + result.getLeave_id())).body(result);
    }


}
