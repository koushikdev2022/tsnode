import 'ts-node/register/transpile-only';
import path from 'path';
import { Umzug, SequelizeStorage } from 'umzug';
import { Sequelize } from 'sequelize';
import config from './config/config';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect as any,
  logging: dbConfig.logging,
});

const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

const runMigrations = async () => {
  try {
    console.log('Running migrations...');
    await umzug.up();
    console.log('Migrations completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

runMigrations();
