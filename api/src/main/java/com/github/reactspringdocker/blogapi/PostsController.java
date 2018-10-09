package com.github.reactspringdocker.blogapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/posts")
public class PostsController {

    private final PostsRepository repository;

    @Autowired
    public PostsController(PostsRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Post>> list() {
        return ResponseEntity.ok(repository.listAll());
    }

    @PostMapping
    public ResponseEntity<Post> create(@RequestBody Post newPost) {
        Post savedPost = repository.save(newPost);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedPost);
    }
}
