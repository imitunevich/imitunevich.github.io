"use strict";

import customButtonComponent from "./customButton/customButtonComponent";
import messagesComponent from "./messages/messagesComponent";

const shared = angular.module("shared", []);

shared.component("customButton", customButtonComponent);
shared.component("messages", messagesComponent);

export default shared;