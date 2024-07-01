"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        username: 'root',
        password: process.env.DB_PASSWORD || '', // Use environment variable or default to empty string
        database: 'js_doc',
        host: 'localhost',
        dialect: 'mysql', // Specify your database dialect here (e.g., mysql, postgres, sqlite)
        logging: false,
    },
    test: {
        username: 'root',
        password: process.env.DB_PASSWORD || '', // Use environment variable or default to empty string
        database: 'js_doc',
        host: 'localhost',
        dialect: 'mysql', // Specify your database dialect here (e.g., mysql, postgres, sqlite)
        logging: false,
    },
    production: {
        username: 'root',
        password: process.env.DB_PASSWORD || '', // Use environment variable or default to empty string
        database: 'js_doc',
        host: 'localhost',
        dialect: 'mysql', // Specify your database dialect here (e.g., mysql, postgres, sqlite)
        logging: false,
    },
};
exports.default = config;
