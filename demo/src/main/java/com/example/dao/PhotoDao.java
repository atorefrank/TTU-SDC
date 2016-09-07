package com.example.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Photo;
import com.example.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long>{

}