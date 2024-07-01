"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT, 10) || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
const dbUrl = process.env.DATABASE_URL || '';
const adminRoute = require('./routes/adminRoutes');
const app = (0, express_1.default)();
app.use('/admin', adminRoute);
app.get('/', (req, res) => {
    let newValue;
    let oldValue = 4;
    if (oldValue === 2) {
        newValue = 3;
        res.send(`hello world new ts ${newValue} r`);
    }
    else {
        res.send(`hello world new ts false r`);
    }
});
app.listen(port, () => {
    console.log(`connect the port ${port}`);
});
