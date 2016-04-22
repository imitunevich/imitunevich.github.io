"use strict";

import BaseService from "./baseService";
import UtilsService from "./utilsService";

const commonServices = angular.module("commonServices", []);

commonServices.service("BaseService", BaseService);
commonServices.service("UtilsService", UtilsService);

export default commonServices;
