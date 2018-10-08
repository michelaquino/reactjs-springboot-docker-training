package com.github.reactspringdocker.blogapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Vector;

@Repository
public class PostsRepository {

    private final Vector<Post> posts;

    @Autowired
    public PostsRepository(Vector<Post> posts) {
        this.posts = posts;
    }

    public List<Post> listAll() {
        return Collections.unmodifiableList(posts);
    }

    public Post save(Post newPost) {
        synchronized (posts) {
            Post newPostWithId = newPost.withId(posts.size() + 1);
            posts.add(newPostWithId);
            return newPostWithId;
        }
    }
}
