package com.github.reactspringdocker.blogapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostsRepository {

    private final List<Post> posts;

    @Autowired
    public PostsRepository(List<Post> posts) {
        this.posts = posts;
    }

    public List<Post> listAll() {
        return posts;
    }

    public Post save(Post newPost) {
        int nextId = posts.size() + 1;
        Post newPostWithId = newPost.withId(nextId);
        posts.add(newPostWithId);
        return newPostWithId;
    }
}
