package com.noobstack.jewellery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID categoryId;
    private String categoryName;
    private String categoryDesc;
    private String categoryCommonImageUrl;

    public Category() {
    }

    public Category(UUID categoryId, String categoryName, String categoryDesc, String categoryCommonImageUrl) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.categoryDesc = categoryDesc;
        this.categoryCommonImageUrl = categoryCommonImageUrl;
    }

    public UUID getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(UUID categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getCategoryDesc() {
        return categoryDesc;
    }

    public void setCategoryDesc(String categoryDesc) {
        this.categoryDesc = categoryDesc;
    }

    public String getCategoryCommonImageUrl() {
        return categoryCommonImageUrl;
    }

    public void setCategoryCommonImageUrl(String categoryCommonImageUrl) {
        this.categoryCommonImageUrl = categoryCommonImageUrl;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryId=" + categoryId +
                ", categoryName='" + categoryName + '\'' +
                ", categoryDesc='" + categoryDesc + '\'' +
                ", categoryCommonImageUrl='" + categoryCommonImageUrl + '\'' +
                '}';
    }
}
