package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.CommentDao;
import com.example.model.Comment;
import com.example.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService{
	
	@Autowired
	private CommentDao commentDao;

	@Override
	public Comment save(Comment comment) {
		// TODO Auto-generated method stub
		return commentDao.save(comment);
	}

	@Override
	public Comment findOne(Long commentId) {
		// TODO Auto-generated method stub
		return commentDao.findOne(commentId);
	}

	@Override
	public List<Comment> findByPhotoId(Long photoId) {
		// TODO Auto-generated method stub
		return commentDao.findByPhotoId(photoId);
	}
	


}
