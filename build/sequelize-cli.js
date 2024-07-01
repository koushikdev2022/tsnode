"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-node/register/transpile-only");
const umzug_1 = require("umzug");
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config/config"));
const env = process.env.NODE_ENV || 'development';
const dbConfig = config_1.default[env];
const sequelize = new sequelize_1.Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
});
const umzug = new umzug_1.Umzug({
    migrations: {
        glob: 'src/migrations/*.ts',
    },
    storage: new umzug_1.SequelizeStorage({ sequelize }),
    context: sequelize.getQueryInterface(),
    logger: console,
});
const runMigrations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Running migrations...');
        yield umzug.up();
        console.log('Migrations completed successfully.');
    }
    catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
});
runMigrations();
