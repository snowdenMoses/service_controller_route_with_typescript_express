import { Request, NextFunction, Response } from "express"
import GenerateUrlService from "./generate_url.service"

class GenerateUrlController{
    private generateUrlService = new GenerateUrlService()
    public generateUrl  = (req:Request, res:Response) => {
      const generatedUrl = this.generateUrlService.generateUrl(req.query)
      res.status(201).json({query: generatedUrl})
    }
}

export default GenerateUrlController