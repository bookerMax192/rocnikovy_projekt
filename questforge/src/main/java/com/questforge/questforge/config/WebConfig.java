package com.questforge.questforge.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login")
                .setViewName("forward:/login.html");
        registry.addViewController("/register")
                .setViewName("forward:/register.html");
        registry.addViewController("/characters")
                .setViewName("forward:/characterspage.html");
        registry.addViewController("/characters/{id}")
                .setViewName("forward:/charlist.html");
        registry.addViewController("/guides")
                .setViewName("forward:/guide.html");
        registry.addViewController("/admin")
                .setViewName("forward:/admin.html");
    }
}
