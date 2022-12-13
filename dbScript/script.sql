#DROP DATABASE quatrello;
CREATE DATABASE IF NOT EXISTS quatrello;

USE quatrello;

CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT NOT NULL,
        email VARCHAR (25) UNIQUE NOT NULL,
        first_name VARCHAR(25) NOT NULL, 
        last_name VARCHAR(25) NOT NULL, 
        pass VARCHAR(25) NOT NULL,
        sector VARCHAR(15),
        avatar VARCHAR(550),
        configuration TEXT,
        PRIMARY KEY(id)
    );
    
CREATE TABLE IF NOT EXISTS workspaces(
        id INT AUTO_INCREMENT NOT NULL,
        name_ VARCHAR(50) NOT NULL, 
        visibility VARCHAR(50) NOT NULL, 
		configuration TEXT,
        PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS boards(
        id INT AUTO_INCREMENT NOT NULL,
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
        id INT AUTO_INCREMENT NOT NULL,
        name_ VARCHAR(100) NOT NULL,
        fk_id_board INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS cards(
        id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR(25) NOT NULL, 
        description_ TEXT, 
        checklist TEXT,
		date_ DATE, 
        fk_id_list INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_list) REFERENCES lists(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS activities(
        id INT AUTO_INCREMENT NOT NULL,
        text_ TEXT NOT NULL,
        date_ DATETIME DEFAULT now(),
        fk_id_card INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_card) REFERENCES cards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS messages(
        id INT AUTO_INCREMENT NOT NULL,
        date_ DATETIME DEFAULT now(),
        text_ TEXT NOT NULL,
        fk_id_board INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_boards(
        id INT AUTO_INCREMENT NOT NULL,
        role_ VARCHAR(10) NOT NULL,
        fk_id_board INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_board) REFERENCES boards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_cards(
        id INT AUTO_INCREMENT NOT NULL,
        notifications TINYINT DEFAULT 0,
        fk_id_card INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_card) REFERENCES cards(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_workspaces(
        id INT AUTO_INCREMENT NOT NULL,
        role_ VARCHAR(10) NOT NULL,
        fk_id_workspace INT,
        fk_id_user INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_workspace) REFERENCES workspaces(id) ON DELETE SET NULL,
        FOREIGN KEY (fk_id_user) REFERENCES users(id) ON DELETE SET NULL
);
