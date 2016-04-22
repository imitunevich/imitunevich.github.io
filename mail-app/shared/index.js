"use strict";

import customButtonComponent from "./customButtonComponent";
import messagesComponent from "./messagesComponent";

const shared = angular.module("shared", []);

shared.component("customButton", customButtonComponent);
shared.component("messages", messagesComponent);

export default shared;