import "reflect-metadata";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import "../../container"
import "../typeorm"

import { router } from "./routes"
import { AppError } from "../../errors/AppError";
import upload from "../../../config/upload";



const app = express()


Sentry.init({
    dsn: "https://a2a9169fffad493e90e7a8f61ac82ba6@o1159267.ingest.sentry.io/6242958",
    integrations: [

      new Sentry.Integrations.Http({ tracing: true }),

      new Tracing.Integrations.Express({ app }),
    ],
  
    tracesSampleRate: 1.0,
  });
  
app.use(Sentry.Handlers.requestHandler());

app.use(express.json())

app.use(router)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))
app.use("/avatar",express.static(`${upload.tmpFolder}/avatar`))
app.use("/cars",express.static(`${upload.tmpFolder}/cars`))

app.use(Sentry.Handlers.errorHandler());


app.use((err: Error, request:Request, response: Response, next: NextFunction )=> {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })

})



app.listen(3333,()=> console.log("Server Up"))