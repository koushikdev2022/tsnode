import express,{Application,Request,Response} from 'express';
import dotenv from 'dotenv';


dotenv.config();

const port: number = parseInt(process.env.PORT as string, 10) || 3000;
const nodeEnv: string = process.env.NODE_ENV || 'development';
const dbUrl: string = process.env.DATABASE_URL || '';


const adminRoute = require('./routes/adminRoutes');

const app: Application = express();


app.use('/admin',adminRoute);


app.get('/',(req: Request,res: Response)=>{
    let newValue: number;
    let oldValue: number = 4;
    if(oldValue === 2){
        newValue = 3;
        res.send(`hello world new ts ${newValue} r`);  
    }else{
        res.send(`hello world new ts false r`); 
    }
    
}) 


app.listen(port,()=>{
    console.log(`connect the port ${port}`)
})