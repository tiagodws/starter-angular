import angular from "angular";
import "angular-ui-router";
import routes from "./routes";

import UserController from "./controllers/UserController";
import "./index.scss";

angular
    .module("app", ["ui.router"])
    .config(routes)
    .controller("UserController", UserController)
    ;
