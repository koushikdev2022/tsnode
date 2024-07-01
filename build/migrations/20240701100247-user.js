'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('users', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER.UNSIGNED
                },
                email: {
                    allowNull: false,
                    type: Sequelize.STRING(128)
                },
                first_name: {
                    allowNull: false,
                    type: Sequelize.STRING(128)
                },
                last_name: {
                    allowNull: false,
                    type: Sequelize.STRING(128)
                },
                password: {
                    allowNull: false,
                    type: Sequelize.STRING(128)
                },
                otp: {
                    type: Sequelize.STRING(6)
                },
                otp_expire: {
                    type: Sequelize.DATE
                },
                is_active: {
                    allowNull: false,
                    defaultValue: true,
                    type: Sequelize.BOOLEAN
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('users');
        });
    }
};
