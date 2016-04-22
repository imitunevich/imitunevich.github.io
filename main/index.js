"use strict";

import angular from "angular";

import "../mails";
import "../contacts";
import "../commonServices";

import mainPageComonent from "./mainPageComponent";
import topNavComponent from "./topNavComponent";

const mailApp = angular.module("mailApp", ["mails","contacts","commonServices"]);

mailApp.component("mainPage", mainPageComonent);
mailApp.component("topNav", topNavComponent);

export default mailApp;