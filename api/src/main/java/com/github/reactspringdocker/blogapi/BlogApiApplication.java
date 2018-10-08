package com.github.reactspringdocker.blogapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Vector;

@SpringBootApplication
public class BlogApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApiApplication.class, args);
	}

	@Bean
	public Vector<Post> postList() {
		return new Vector<>();
	}

}
