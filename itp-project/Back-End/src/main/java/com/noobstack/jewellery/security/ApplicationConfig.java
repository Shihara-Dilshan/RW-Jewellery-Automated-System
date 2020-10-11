package com.noobstack.jewellery.security;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
 @ComponentScan
 @EnableWebMvc

 public class ApplicationConfig extends WebMvcConfigurerAdapter {

     @Override
   public void addCorsMappings(CorsRegistry registry) {
   // Can just allow `methods` that you need.
   registry.addMapping("/**").allowedMethods("PUT", "GET", "DELETE", "OPTIONS", "PATCH", "POST");
    }
}