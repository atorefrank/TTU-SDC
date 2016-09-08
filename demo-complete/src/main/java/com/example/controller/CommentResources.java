package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Comment;
import com.example.model.Photo;
import com.example.service.CommentService;
import com.example.service.PhotoService;

@RestController
@RequestMapping("/rest")
public class CommentResources {
	
	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private CommentService commentService;

	@RequestMapping (value="/comment/add", method=RequestMethod.POST)
	public void addComment(@RequestBody Comment comment) {
		Photo photo = photoService.findByPhotoId(comment.getPhotoId());
		comment.setPhoto(photo);
		commentService.save(comment);
	}
	

}
