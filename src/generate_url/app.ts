import express, {Application, Request, Response, Router} from "express";
import GenerateUrlRoute from "./generate_url.route";

const port: number | string = process.env.PORT || 8000
const router = Router()
const generateUrl =  new GenerateUrlRoute()
class App{
    private app: express.Application;
    constructor(route: any){
        this.app = express()
        this.initializeRoute(route)
    }
    

    private initializeRoute(route: any){
          this.app.use('/',route.route)
    }

    public startListening(){
        this.app.listen(port,()=>{
            console.log(`Listening on port ${port}`)
        })
  }
}

const urlRoute = new GenerateUrlRoute()
const server = new App(urlRoute)
server.startListening()

