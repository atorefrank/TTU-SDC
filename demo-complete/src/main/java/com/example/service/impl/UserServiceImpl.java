package com.example.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.UserDao;
import com.example.model.User;
import com.example.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDao userDao;

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return userDao.save(user);
	}

	@Override
	public User findByUserName(String userName) {
		// TODO Auto-generated method stub
		return userDao.findByUserName(userName);
	}
	

	

}
