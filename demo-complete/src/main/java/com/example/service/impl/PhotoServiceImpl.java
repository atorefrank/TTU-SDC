package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.PhotoDao;
import com.example.model.Photo;
import com.example.model.User;
import com.example.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService{
	
	@Autowired
	private PhotoDao photoDao;

	@Override
	public Photo save(Photo photo) {
		// TODO Auto-generated method stub
		return photoDao.save(photo);
	}

	@Override
	public List<Photo> findByUser(User user) {
		// TODO Auto-generated method stub
		return photoDao.findByUser(user);
	}

	@Override
	public Photo findByPhotoId(Long photoId) {
		// TODO Auto-generated method stub
		return photoDao.findByPhotoId(photoId);
	}

	@Override
	public List<Photo> findAll() {
		// TODO Auto-generated method stub
		return photoDao.findAll();
	}

	

}
