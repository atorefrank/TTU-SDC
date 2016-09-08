package com.example.service;

import java.util.List;

import com.example.model.Photo;
import com.example.model.User;

public interface PhotoService {
	
	Photo save(Photo photo);
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
	
	List<Photo> findAll();

}
