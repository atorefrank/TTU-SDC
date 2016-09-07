package com.example.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Comment {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long commentId;
	private String content;
	
}
