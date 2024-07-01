// sequelize.ts
import { Sequelize, Dialect } from 'sequelize';
import config from './config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect as Dialect,
  logging: dbConfig.logging,
});

export default sequelize;
