package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Category;
import com.noobstack.jewellery.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

@Service
public class categoryService {

    private final CategoryRepository categoryRepository;
    @Autowired
    public categoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    //get all the categories
    public Collection<Category> categories(){
        return  categoryRepository.findAll();
    }

    //get category by id
    public ResponseEntity<?> getCategory(UUID id){
        Optional<Category> category = categoryRepository.findById(id);
        return category.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //add new category
    public ResponseEntity<Category> createCategory(Category category) throws URISyntaxException {
        Category result = categoryRepository.save(category);
        return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);
    }

    //update an exiting category
    public ResponseEntity<Category> updateCategory(Category category){
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }

    //delete an exiting category
    public ResponseEntity<?> deleteCategory(UUID id){
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}
