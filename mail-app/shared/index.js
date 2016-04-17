"use strict";

import customButtonComponent from "./customButtonComponent";
import messagesComponent from "./messagesComponent";

const common = angular.module("common", []);

common.component("customButton", customButtonComponent);
common.component("messages", messagesComponent);

export default common;