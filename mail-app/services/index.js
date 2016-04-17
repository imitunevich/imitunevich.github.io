"use strict";

import BaseService from "./baseService";
import UtilsService from "./utilsService";

const services = angular.module("services", []);

services.service("BaseService", BaseService);
services.service("UtilsService", UtilsService);

export default services;
