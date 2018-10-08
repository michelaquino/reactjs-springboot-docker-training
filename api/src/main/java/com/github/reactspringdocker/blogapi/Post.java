package com.github.reactspringdocker.blogapi;

public class Post {

    private final Integer id;
    private final String title;
    private final String description;

    public Post(Integer id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Post withId(int newId) {
        return new Post(newId, this.title, this.description);
    }
}
