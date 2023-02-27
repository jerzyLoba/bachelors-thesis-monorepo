CREATE TYPE role AS ENUM ('user', 'admin');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(50) NOT NULL,
    role VARCHAR DEFAULT 'user',
    password VARCHAR(200) NOT NULL,
    UNIQUE (email)
);

