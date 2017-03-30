create table user(
	id varchar(48) not null PRIMARY KEY,
	name varchar(32) not null,
	password varchar(32) not null,
	role varchar(32),
	createtime varchar(32)
)ENGINE=INNODB DEFAULT CHARSET=utf8