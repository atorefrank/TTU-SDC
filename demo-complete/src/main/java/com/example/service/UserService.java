package com.example.service;

import com.example.model.User;

public interface UserService {
	User save(User user);
	
	User findByUserName (String userName);



}
