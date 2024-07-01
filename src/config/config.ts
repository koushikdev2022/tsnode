import { Dialect } from 'sequelize';

interface IDatabaseConfig {
  [key: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
    logging?: boolean;
  };
}

const config: IDatabaseConfig = {
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

export default config;
