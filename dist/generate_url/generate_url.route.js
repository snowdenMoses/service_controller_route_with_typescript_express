"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generate_url_controller_1 = __importDefault(require("./generate_url.controller"));
class GenerateUrlRoute {
    constructor() {
        this.route = (0, express_1.Router)();
        this.path = "/home";
        this.generateUrlController = new generate_url_controller_1.default();
        this.initializeRoute();
    }
    initializeRoute() {
        this.route.get(this.path, this.generateUrlController.generateUrl);
    }
}
exports.default = GenerateUrlRoute;
