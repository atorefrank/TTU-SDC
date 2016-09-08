package com.example.service;

import java.util.List;

import com.example.model.Comment;

public interface CommentService {
	Comment save(Comment comment);
	
	Comment findOne(Long commentId);
	
	List<Comment> findByPhotoId(Long photoId);

}
