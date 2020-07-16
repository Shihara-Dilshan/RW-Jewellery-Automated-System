package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Category;
import com.noobstack.jewellery.service.categoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private final categoryService CategoryService;

    @Autowired
    public CategoryController(categoryService CategoryService) {
        super();
        this.CategoryService = CategoryService;
    }

    @GetMapping("/categories") /* get all the categories*/
    Collection<Category> getAllCategories(){
        return this.CategoryService.categories();
    }

    @GetMapping("/categories/{id}") /*get category by id*/
    ResponseEntity<?> getCategoryById(@PathVariable UUID id){
        return this.CategoryService.getCategory(id);
    }

    @PostMapping("/category") /*add new category*/
    ResponseEntity<Category> createCategory(@Validated  @RequestBody Category category) throws URISyntaxException {
        return this.CategoryService.createCategory(category);
    }

    @PutMapping("/category/{id}") /*update an exiting category*/
    ResponseEntity<Category> updateCategory(@Validated @RequestBody Category category){
        return this.CategoryService.updateCategory(category);
    }

    @DeleteMapping("/category/{id}") /*delete an exiting category*/
    ResponseEntity<?> deleteCategory(@PathVariable UUID id){
        return this.CategoryService.deleteCategory(id);
    }
}
