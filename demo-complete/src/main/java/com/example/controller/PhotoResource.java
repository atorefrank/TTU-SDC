package com.example.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.example.model.Photo;
import com.example.model.User;
import com.example.service.PhotoService;

@RestController
@RequestMapping("/rest")
public class PhotoResource {
	private String imageName;
	
	@Autowired
	private PhotoService photoService;
	
	@RequestMapping(value="/photo/upload", method=RequestMethod.POST)
	public String upload (HttpServletResponse reponse, HttpServletRequest request) {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Iterator<String> it = multipartRequest.getFileNames();
		MultipartFile multipartFile = multipartRequest.getFile(it.next());
		String fileName = multipartFile.getOriginalFilename();
		imageName = fileName;
		
		String path= new File("src/main/resources/static/images").getAbsolutePath()+"\\"+fileName;
		
		try {
			multipartFile.transferTo(new File(path));
			System.out.println(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return "Upload Image Success!";
	}
	
	@RequestMapping(value="/photo/add", method=RequestMethod.POST)
	public Photo addPhoto (@RequestBody Photo photo) {
		photo.setImageName(imageName);
		return photoService.save(photo);
	}
	
	@RequestMapping(value="/photo/user", method=RequestMethod.POST)
	public List<Photo> getPhotosByUser (@RequestBody User user) {
		
		return photoService.findByUser(user);
	}
	
	@RequestMapping(value="/photo/photoId", method = RequestMethod.POST)
	public Photo getPhotoByPhotoId(@RequestBody Long photoId) {
		return photoService.findByPhotoId(photoId);
	}
	
	@RequestMapping(value="/photo/update", method=RequestMethod.POST)
	public void updatePhoto (@RequestBody Photo photo) {
		Photo currentPhoto = photoService.findByPhotoId(photo.getPhotoId());
		currentPhoto.setLikes(photo.getLikes());
		photoService.save(currentPhoto);
	}

	
}
