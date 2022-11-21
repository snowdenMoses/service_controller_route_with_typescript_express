"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_url_service_1 = __importDefault(require("./generate_url.service"));
class GenerateUrlController {
    constructor() {
        this.generateUrlService = new generate_url_service_1.default();
        this.generateUrl = (req, res) => {
            const generatedUrl = this.generateUrlService.generateUrl(req.query);
            res.status(201).json({ query: generatedUrl });
        };
    }
}
exports.default = GenerateUrlController;
