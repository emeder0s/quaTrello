USE quatrello;

insert into users VALUES (null, 'email1@email.com', 'User 1', 'Bio 1', '$2a$08$fTW/1eLl6korInWGGooQs.v9ICxc6YB0Stv4ec5PxEgYu5lzWMPF2', '1', '{}');
insert into users VALUES (null, 'email2@email.com', 'User 2', 'Bio 2', '$2a$08$wcO2jfhn0jgAYDMk4NpOFOuWy6qkUBGFLt0a4YoI9L65LLmrJkqj2', '1', '{}');
insert into users VALUES (null, 'email3@email.com', 'User 3', 'Bio 3', '$2a$08$gynUIU48bZqA453h6kcL8ervPtHU1mPhmr3RwoHWQxDvsXFOKpJ5u', '1', '{}');
insert into users VALUES (null, 'email4@email.com', 'User 4', 'Bio 4', '$2a$08$cRBvQ/BnGlVPzsGRIN8NeeUnPn5uOA/RyIIQETlL4vtCImYYS.s5y', '1', '{}');
insert into users VALUES (null, 'email5@email.com', 'User 5', 'Bio 5', '$2a$08$AlsFQvamOVD5hyqijTVKLeT5m/9I1sABww95J5V3pVKRl6d0CmjXa', '1', '{}');

insert into workspaces VALUES (null, 'WS 1','2004-04-20 04:20:00','privado', '{}');
insert into workspaces VALUES (null, 'WS 2','2004-04-20 04:20:00','privado', '{}');

insert into boards VALUES (null,'Board 1','privado','{}',1,1);
insert into boards VALUES (null,'Board 2','privado','{}',1,2);
insert into boards VALUES (null,'Board 3','privado','{}',2,3);

insert into lists VALUES (null,'List 1',1);
insert into lists VALUES (null,'List 2',1);
insert into lists VALUES (null,'List 3',2);
insert into lists VALUES (null,'List 4',2);
insert into lists VALUES (null,'List 5',3);

insert into cards VALUES (null, 'Card 1','Description 1','{"Check 1":"0", "Check 2":"1"}',"",'2004-04-20 04:20:00', 1);
insert into cards VALUES (null, 'Card 2','Description 2','{"Check 1":"0", "Check 2":"1"}',"",'2004-04-20 04:20:00', 1);
insert into cards VALUES (null, 'Card 3','Description 3','{"Check 1":"0", "Check 2":"1"}',"",'2004-04-20 04:20:00', 2);
insert into cards VALUES (null, 'Card 4','Description 4','{"Check 1":"0", "Check 2":"1"}',"",'2004-04-20 04:20:00', 2);
insert into cards VALUES (null, 'Card 5','Description 5','{"Check 1":"1", "Check 2":"0"}',"",'2004-04-20 04:20:00', 3);
insert into cards VALUES (null, 'Card 6','Description 6','{"Check 1":"1", "Check 2":"0"}',"",'2004-04-20 04:20:00', 4);
insert into cards VALUES (null, 'Card 7','Description 7','{"Check 1":"1", "Check 2":"0"}',"",'2004-04-20 04:20:00', 5);
insert into cards VALUES (null, 'Card 8','Description 8','{"Check 1":"1", "Check 2":"0"}',"",'2004-04-20 04:20:00', 5);

insert into users_boards VALUES (null,'member',1,1,1);
insert into users_boards VALUES (null,'member',0,1,2);
insert into users_boards VALUES (null,'member',0,1,3);
insert into users_boards VALUES (null,'member',1,2,2);
insert into users_boards VALUES (null,'member',0,2,3);
insert into users_boards VALUES (null,'guest',0,3,4);
insert into users_boards VALUES (null,'member',1,3,4);
insert into users_boards VALUES (null,'member',0,3,1);
insert into users_boards VALUES (null,'member',0,3,5);

insert into users_cards VALUES (null,0,1,1);
insert into users_cards VALUES (null,0,2,2);
insert into users_cards VALUES (null,1,3,3);
insert into users_cards VALUES (null,0,5,4);
insert into users_cards VALUES (null,1,5,5);
insert into users_cards VALUES (null,1,6,5);
insert into users_cards VALUES (null,1,7,1);

insert into users_workspaces VALUES (null,'member',1,1,1);
insert into users_workspaces VALUES (null,'member',0,1,2);
insert into users_workspaces VALUES (null,'member',1,1,3);
insert into users_workspaces VALUES (null,'member',0,1,2);
insert into users_workspaces VALUES (null,'member',0,1,3);
insert into users_workspaces VALUES (null,'guest',0,2,4);
insert into users_workspaces VALUES (null,'member',0,2,4);
insert into users_workspaces VALUES (null,'member',1,2,1);
insert into users_workspaces VALUES (null,'member',1,2,5);

insert into activities (`text_`, `fk_id_card`, `fk_id_user`) VALUES ('Text 1',1,1);
insert into activities (`text_`, `fk_id_card`, `fk_id_user`) VALUES ('Text 2',2,5);
insert into activities (`text_`, `fk_id_card`, `fk_id_user`) VALUES ('Text 3',3,4);
insert into activities (`text_`, `fk_id_card`, `fk_id_user`) VALUES ('Text 4',4,3);
insert into activities (`text_`, `fk_id_card`, `fk_id_user`) VALUES ('Text 5',5,2);


