CREATE TABLE routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(20) DEFAULT 'black',
    speed INT DEFAULT 100,
    line_number TINYINT DEFAULT 1 CHECK (line_number BETWEEN 1 AND 4)
);

CREATE TABLE route_stations (
    route_id INT,
    station_id INT,
    order_index INT NOT NULL,
    PRIMARY KEY (route_id, station_id),
    FOREIGN KEY (route_id) REFERENCES routes(id) ON DELETE CASCADE,
    FOREIGN KEY (station_id) REFERENCES stations(id) ON DELETE CASCADE
);

CREATE TABLE trains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    train_number VARCHAR(50) NOT NULL UNIQUE,
    start INT,
    end INT,
    color VARCHAR(20) DEFAULT 'black',
    route_id INT,
    FOREIGN KEY (start) REFERENCES stations(id) ON DELETE SET NULL,
    FOREIGN KEY (end) REFERENCES stations(id) ON DELETE SET NULL,
    FOREIGN KEY (route_id) REFERENCES routes(id) ON DELETE SET NULL
);

CREATE TABLE train_times (
    train_id INT,
    station_id INT,
    time INT NOT NULL,
    order_index INT NOT NULL,
    PRIMARY KEY (train_id, station_id),
    FOREIGN KEY (train_id) REFERENCES trains(id) ON DELETE CASCADE,
    FOREIGN KEY (station_id) REFERENCES stations(id) ON DELETE CASCADE
);
