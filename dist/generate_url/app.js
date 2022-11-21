"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const generate_url_route_1 = __importDefault(require("./generate_url.route"));
const port = process.env.PORT || 8000;
const router = (0, express_1.Router)();
const generateUrl = new generate_url_route_1.default();
class App {
    constructor(route) {
        this.app = (0, express_1.default)();
        this.initializeRoute(route);
    }
    initializeRoute(route) {
        this.app.use('/', route.route);
    }
    startListening() {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}
const urlRoute = new generate_url_route_1.default();
const server = new App(urlRoute);
server.startListening();
