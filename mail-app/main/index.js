"use strict";

import "../mails";
import "../contacts";
import "../services";
import mainPageComonent from "./mainPageComponent";
import topNavComponent from "./topNavComponent";

const mailApp = angular.module("mailApp", ["mails", "contacts", "services"]);

mailApp.component("mainPage", mainPageComonent);
mailApp.component("topNav", topNavComponent);

export default mailApp;