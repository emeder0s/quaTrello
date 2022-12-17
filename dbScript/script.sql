#DROP DATABASE quatrello;
CREATE DATABASE IF NOT EXISTS quatrello;

USE quatrello;

CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT,
        email VARCHAR (25) UNIQUE NOT NULL,
        full_name VARCHAR(25) NOT NULL,
        bio TEXT, 
        pass CHAR(64) NOT NULL,
        avatar VARCHAR(550),
        configuration TEXT,
        PRIMARY KEY(id)
    );
    
CREATE TABLE IF NOT EXISTS workspaces(
        id INT AUTO_INCREMENT,
        name_ VARCHAR(50) NOT NULL, 
        last_access DATETIME,
        visibility VARCHAR(50) NOT NULL, 
		configuration TEXT,
        PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS boards(
        id INT AUTO_INCREMENT,
        name_ VARCHAR(25) NOT NULL, 
        visibility VARCHAR(50) NOT NULL, 
        configuration TEXT,
        fk_id_workspace INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_workspace) REFERENCES workspaces(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS lists(
        id INT AUTO_INCREMENT,
        name_ VARCHAR(100) NOT NULL,
        fk_id_board INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS cards(
        id INT AUTO_INCREMENT,
        title VARCHAR(25) NOT NULL, 
        description_ TEXT, 
        checklist TEXT,
		date_ DATETIME, 
        fk_id_list INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_list) REFERENCES lists(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS activities(
        id INT AUTO_INCREMENT,
        text_ TEXT NOT NULL,
        date_ DATETIME DEFAULT CURRENT_TIMESTAMP,
        fk_id_card INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_card) REFERENCES cards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS messages(
        id INT AUTO_INCREMENT,
        date_ DATETIME DEFAULT now(),
        text_ TEXT NOT NULL,
        fk_id_board INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_boards(
        id INT AUTO_INCREMENT,
        role_ VARCHAR(10) NOT NULL,
        fk_id_board INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_cards(
        id INT AUTO_INCREMENT,
        notifications TINYINT DEFAULT 0,
        fk_id_card INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_card) REFERENCES cards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_workspaces(
        id INT AUTO_INCREMENT,
        role_ VARCHAR(10) NOT NULL,
        fk_id_workspace INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_workspace) REFERENCES workspaces(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

SELECT * FROM users;
SELECT * FROM workspaces;
SELECT * FROM users_workspaces;
