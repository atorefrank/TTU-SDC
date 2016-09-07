package com.example.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Comment;

@Repository
public interface CommentDao extends CrudRepository<Comment, Long> {

}
