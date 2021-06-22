CREATE TABLE recipes (
    id serial PRIMARY KEY,
    uuid varchar(32) UNIQUE,
    name varchar(32) UNIQUE NOT NULL,
    slug varchar(48) UNIQUE NOT NULL,
    spotlight BOOLEAN,
    image varchar(124),
    ingredients JSON,
    instructions JSON,
    nutrition_facts JSON,
    thumbs_up INT DEFAULT 0,
    thumbs_down INT DEFAULT 0,
    intro varchar(164) NOT NULL,
    prep_time INT NOT NULL,
    servings INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);