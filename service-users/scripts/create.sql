CREATE TYPE role AS ENUM ('user', 'admin');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    password VARCHAR(200) NOT NULL,
    UNIQUE (email)
);

