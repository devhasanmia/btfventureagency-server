import express from 'express'
import cors from "cors"
import { router } from './routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './errorHandler/notFound';
import cookieParser from 'cookie-parser';
import { dashboardController } from './modules/dashboard/dashboard.controller';

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/v1", router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/v1/dashboard', dashboardController)



app.use(globalErrorHandler)
app.use(notFound)

export default app