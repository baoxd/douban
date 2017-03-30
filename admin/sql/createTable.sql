drop table user ; create table user(
	id varchar(48) not null PRIMARY KEY,
	name varchar(32) not null,
	password varchar(32) not null,
	role varchar(32),
	createtime varchar(32)
)ENGINE=INNODB DEFAULT CHARSET=utf8;


drop table movie ; create table movie(
	id varchar(48) not null PRIMARY KEY,
	doctor varchar(32) not null,
	title varchar(32) not null,
	language varchar(32),
	country varchar(32),
	summary varchar(512),
	flashpath varchar(256),
	poster varchar(256),
	year varchar(6),
	type varchar(32),
	createtime varchar(64)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

create table comments(
	id varchar(48) not null PRIMARY KEY,
	content varchar(48) not null,
	createtime varchar(32) not null,
	userid varchar(48) not null,
	movieid varchar(48) not null
) ENGINE=INNODB DEFAULT CHARSET=utf8