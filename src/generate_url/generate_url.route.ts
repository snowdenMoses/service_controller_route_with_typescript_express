import { Router } from "express"
import GenerateUrlController from "./generate_url.controller"

class GenerateUrlRoute{
    public route = Router()
    private path: string = "/home"
    constructor(){
        this.initializeRoute()
    }
    private generateUrlController = new GenerateUrlController()
    public initializeRoute(){
        this.route.get(this.path, this.generateUrlController.generateUrl)
    }
}
export default GenerateUrlRoute