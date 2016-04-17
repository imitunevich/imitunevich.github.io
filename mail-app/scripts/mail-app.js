/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

		__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(2);

	__webpack_require__(30);

	__webpack_require__(8);

	var _mainPageComponent = __webpack_require__(44);

	var _mainPageComponent2 = _interopRequireDefault(_mainPageComponent);

	var _topNavComponent = __webpack_require__(46);

	var _topNavComponent2 = _interopRequireDefault(_topNavComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailApp = angular.module("mailApp", ["mails", "contacts", "services"]);

	mailApp.component("mainPage", _mainPageComponent2.default);
	mailApp.component("topNav", _topNavComponent2.default);

	exports.default = mailApp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(3);

	__webpack_require__(8);

	var _foldersComponent = __webpack_require__(11);

	var _foldersComponent2 = _interopRequireDefault(_foldersComponent);

	var _mailPageComponent = __webpack_require__(13);

	var _mailPageComponent2 = _interopRequireDefault(_mailPageComponent);

	var _mailListComponent = __webpack_require__(15);

	var _mailListComponent2 = _interopRequireDefault(_mailListComponent);

	var _mailViewComponent = __webpack_require__(19);

	var _mailViewComponent2 = _interopRequireDefault(_mailViewComponent);

	var _mailState = __webpack_require__(23);

	var _mailState2 = _interopRequireDefault(_mailState);

	var _mailListState = __webpack_require__(24);

	var _mailListState2 = _interopRequireDefault(_mailListState);

	var _mailViewState = __webpack_require__(25);

	var _mailViewState2 = _interopRequireDefault(_mailViewState);

	var _mailListStateController = __webpack_require__(26);

	var _mailListStateController2 = _interopRequireDefault(_mailListStateController);

	var _mailViewStateController = __webpack_require__(27);

	var _mailViewStateController2 = _interopRequireDefault(_mailViewStateController);

	var _onExitMailViewState = __webpack_require__(28);

	var _onExitMailViewState2 = _interopRequireDefault(_onExitMailViewState);

	var _mailService = __webpack_require__(29);

	var _mailService2 = _interopRequireDefault(_mailService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mails = angular.module("mails", ["common", "services", "ngMessages", "ui.router"]);

	mails.config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.when("/mail", ['$state', function ($state) {
	        $state.go("mailList", { folderName: 'Inbox' });
	    }]).otherwise("mail");

	    $stateProvider.state("mail", {
	        url: "/mail",
	        template: _mailState2.default
	    }).state("mailList", {
	        parent: "mail",
	        url: "/folder?folderName",
	        template: _mailListState2.default,
	        controller: "mailListStateController",
	        controllerAs: "$ctrl"
	    }).state("mailView", {
	        parent: "mailList",
	        url: "/mail?mailId",
	        template: _mailViewState2.default,
	        controller: "mailViewStateController as $ctrl",
	        onExit: _onExitMailViewState2.default
	    }).state("newMail", {
	        parent: "mail",
	        url: "/newMail",
	        template: _mailViewState2.default
	    });
	});

	mails.component("folders", _foldersComponent2.default);
	mails.component("mailPage", _mailPageComponent2.default);
	mails.component("mailList", _mailListComponent2.default);
	mails.component("mailView", _mailViewComponent2.default);
	mails.controller("mailListStateController", _mailListStateController2.default);
	mails.controller("mailViewStateController", _mailViewStateController2.default);
	mails.service("MailService", _mailService2.default);

	exports.default = mails;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _customButtonComponent = __webpack_require__(4);

	var _customButtonComponent2 = _interopRequireDefault(_customButtonComponent);

	var _messagesComponent = __webpack_require__(6);

	var _messagesComponent2 = _interopRequireDefault(_messagesComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var common = angular.module("common", []);

	common.component("customButton", _customButtonComponent2.default);
	common.component("messages", _messagesComponent2.default);

	exports.default = common;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _customButton = __webpack_require__(5);

	var _customButton2 = _interopRequireDefault(_customButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var customButton = {
	    bindings: {
	        name: "<",
	        class: "<",
	        disabled: "<",
	        sref: "<",
	        clickHandler: "&"
	    },
	    template: _customButton2.default,
	    controller: function controller() {}
	};

		exports.default = customButton;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<!--TODO: create buttons-container-->\r\n<div ng-class=\"['button', $ctrl.class, {disabled : $ctrl.disabled}]\">\r\n    <a ng-if=\"$ctrl.sref\" role=\"button\" ng-click=\"$ctrl.clickHandler()\" href=\"javascript:void(0)\" ui-sref=\"{{$ctrl.sref}}\">{{$ctrl.name}}</a>\r\n    <a ng-if=\"!$ctrl.sref\" role=\"button\" ng-click=\"$ctrl.clickHandler()\" href=\"javascript:void(0)\">{{$ctrl.name}}</a>\r\n</div>\r\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _messages = __webpack_require__(7);

	var _messages2 = _interopRequireDefault(_messages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var messages = {
	    bindings: {
	        element: "<",
	        errors: "<",
	        visibility: "<"
	    },
	    template: _messages2.default,
	    controller: function controller() {}
	};

		exports.default = messages;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"error_msg\" ng-messages=\"$ctrl.element.$error\" role=\"alert\" ng-if=\"$ctrl.visibility\">\r\n    <span ng-repeat=\"err in $ctrl.errors\" ng-message-exp=\"err.type\" class=\"msg\" >{{err.text}}</span>\r\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	var _utilsService = __webpack_require__(10);

	var _utilsService2 = _interopRequireDefault(_utilsService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var services = angular.module("services", []);

	services.service("BaseService", _baseService2.default);
	services.service("UtilsService", _utilsService2.default);

	exports.default = services;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseService = function () {
	    function BaseService($http, UtilsService) {
	        _classCallCheck(this, BaseService);

	        this.http = $http;
	        this.utilsService = UtilsService;
	    }

	    _createClass(BaseService, [{
	        key: "getData",
	        value: function getData() {
	            var _this = this;

	            var dataName = arguments.length <= 0 || arguments[0] === undefined ? this.dataName : arguments[0];

	            return this.http.get("" + this.utilsService.baseURL + dataName + ".json").then(function (response) {
	                return _this.utilsService.normalizeToArray(response.data);
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, itemId) {
	            return this.http.get("" + this.utilsService.baseURL + folderName.toLowerCase() + "/" + itemId + ".json");
	        }
	    }, {
	        key: "add",
	        value: function add(newItem) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.post("" + this.utilsService.baseURL + dataName + ".json", newItem).then(function (response) {
	                newItem.id = response.data.name;
	                return newItem;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "update",
	        value: function update(item) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.put("" + this.utilsService.baseURL + dataName + "/" + item.id + ".json", item).then(function (response) {
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "remove",
	        value: function remove(item) {
	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            return this.http.delete("" + this.utilsService.baseURL + dataName + "/" + item.id + ".json").then(function (response) {
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "removeArray",
	        value: function removeArray(arr) {
	            var _this2 = this;

	            var dataName = arguments.length <= 1 || arguments[1] === undefined ? this.dataName : arguments[1];

	            var results = [];
	            var i = 0;
	            var length = arr.length;
	            var removeNextItem = function removeNextItem() {
	                return _this2.remove(arr[i], dataName).then(function (response) {
	                    return ++i < length ? removeNextItem() : true;
	                }).catch(function (error) {
	                    return console.log(error.message);
	                });
	            };
	            return removeNextItem();
	        }
	    }]);

	    return BaseService;
	}();

		exports.default = BaseService;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var UtilsService = function UtilsService() {
	    this.normalizeToArray = function (object) {
	        if (!object) return [];
	        return Object.keys(object).map(function (key) {
	            var normalizedObject = object[key];
	            normalizedObject.id = key;
	            return normalizedObject;
	        });
	    };

	    this.baseURL = "https://fiery-inferno-8968.firebaseio.com/";
	};

		exports.default = UtilsService;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _folderList = __webpack_require__(12);

	var _folderList2 = _interopRequireDefault(_folderList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var folders = {
	    template: _folderList2.default,
	    controller: function controller(MailService) {
	        var _this = this;

	        this.getFolders = function () {
	            MailService.getFolders().then(function (folders) {
	                _this.folders = folders;
	            });
	        };
	        this.getFolders();
	    }
	};

		exports.default = folders;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<ul>\r\n    <li ng-repeat=\"folder in $ctrl.folders\">\r\n        <a ui-sref=\"mailList({folderName:folder.name})\"\r\n           ui-sref-active=\"active\"\r\n           ng-class=\"['folder', folder.name.toLowerCase().slice(0, 3)]\">\r\n            {{folder.name}}\r\n        </a>\r\n    </li>\r\n</ul>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailPage = __webpack_require__(14);

	var _mailPage2 = _interopRequireDefault(_mailPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailPage = {
	    template: _mailPage2.default,
	    controller: function controller(MailService) {
	        this.isMailSelected = function () {
	            return MailService.selectedMail !== null;
	        };
	    }
	};

		exports.default = mailPage;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"left_col\">\r\n    <nav class=\"mail_menu\">\r\n        <div class=\"buttons\">\r\n            <custom-button class=\"'nmes'\" name=\"'New message'\" sref=\"'newMail'\"></custom-button>\r\n        </div>\r\n        <folders></folders>\r\n    </nav>\r\n</div>\r\n<div class=\"right_col\">\r\n    <ui-view></ui-view>\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailList = __webpack_require__(16);

	var _mailList2 = _interopRequireDefault(_mailList);

	var _mailListController = __webpack_require__(17);

	var _mailListController2 = _interopRequireDefault(_mailListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailList = {
	    bindings: {
	        folderName: "<"
	    },
	    template: _mailList2.default,
	    controller: _mailListController2.default
	};

		exports.default = mailList;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mail_list\" ng-if=\"!$ctrl.isMailSelected()\">\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'del'\" name=\"'Delete'\"\r\n                       click-handler=\"$ctrl.remove($ctrl.folderName.toLowerCase())\"></custom-button>\r\n    </div>\r\n    <ul>\r\n        <li ng-repeat=\"mail in $ctrl.mails | orderBy: '-date'\">\r\n            <input type=\"checkbox\" ng-model=\"mail.checked\"/>\r\n            <div class=\"row\" ui-sref=\"mailView({mailId:mail.id})\">\r\n                <div class=\"mail_address\">\r\n                    <a>{{mail.name ? mail.name : mail.email}}</a>\r\n                </div>\r\n                <div class=\"mail_content\">\r\n                    <span class=\"topic\">{{mail.topic}}</span>\r\n                    <span class=\"mail_fragment\">{{mail.letterBody}}</span>\r\n                </div>\r\n                <span class=\"date\">{{mail.date | date: 'dd/MM/yyyy'}}</span>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<ui-view></ui-view>\r\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listController = __webpack_require__(18);

	var _listController2 = _interopRequireDefault(_listController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailListController = function (_ListController) {
	    _inherits(MailListController, _ListController);

	    function MailListController(MailService) {
	        _classCallCheck(this, MailListController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailListController).call(this, MailService));

	        _this.service.selectedFolder = _this.folderName;
	        return _this;
	    }

	    _createClass(MailListController, [{
	        key: "loadMails",
	        value: function loadMails() {
	            var _this2 = this;

	            this.service.getMails(this.folderName).then(function (mails) {
	                _this2.mails = mails;
	            });
	        }
	    }, {
	        key: "loadItems",
	        value: function loadItems() {
	            return this.loadMails();
	        }
	    }, {
	        key: "isMailSelected",
	        value: function isMailSelected() {
	            return this.service.selectedItem !== null;
	        }
	    }, {
	        key: "mails",
	        get: function get() {
	            return this.items;
	        },
	        set: function set(items) {
	            this.items = items;
	        }
	    }]);

	    return MailListController;
	}(_listController2.default);

		exports.default = MailListController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListController = function () {
	    function ListController(service) {
	        _classCallCheck(this, ListController);

	        this.service = service;
	        this.setSelectedItem(null);
	        this.loadItems();
	    }

	    _createClass(ListController, [{
	        key: "loadItems",
	        value: function loadItems() {
	            return this.items;
	        }
	    }, {
	        key: "setSelectedItem",
	        value: function setSelectedItem(item) {
	            this.service.selectedItem = item;
	        }
	    }, {
	        key: "add",
	        value: function add() {
	            this.service.selectedItem = {};
	        }
	    }, {
	        key: "remove",
	        value: function remove(dataName) {
	            var _this = this;

	            var delItems = [];
	            var updatedItems = [];
	            this.items.forEach(function (item) {
	                if (item.checked) {
	                    delItems.push(item);
	                } else {
	                    updatedItems.push(item);
	                }
	            });
	            if (delItems.length > 0) {
	                this.service.removeArray(delItems, dataName).then(function (response) {
	                    if (response === true) _this.items = updatedItems;
	                }).catch(function (error) {
	                    return _this.getItems();
	                });
	            } else {
	                alert("Please, choose items to delete.");
	            }
	        }
	    }]);

	    return ListController;
	}();

		exports.default = ListController;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mailView = __webpack_require__(20);

	var _mailView2 = _interopRequireDefault(_mailView);

	var _mailViewController = __webpack_require__(21);

	var _mailViewController2 = _interopRequireDefault(_mailViewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailView = {
	    bindings: {
	        mailId: "<"
	    },
	    template: _mailView2.default,
	    controller: _mailViewController2.default
	};

		exports.default = mailView;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mail_view\">\r\n\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'send'\" name=\"'Send'\" ng-if=\"$ctrl.isNew\"\r\n                       click-handler=\"$ctrl.sendMail()\" disabled=\"newMailForm.$invalid\"></custom-button>\r\n        <custom-button class=\"'del'\" name=\"'Delete'\" ng-if=\"!$ctrl.isNew\"\r\n                       click-handler=\"$ctrl.remove($ctrl.mail.folder.toLowerCase())\"></custom-button>\r\n    </div>\r\n    <div ng-if=\"!$ctrl.isNew\" class=\"received_msg\">\r\n        <div class=\"header\">\r\n            <div class=\"topic\">{{$ctrl.mail.topic}}</div>\r\n            <div class=\"name\" ng-if=\"$ctrl.mail.name\">{{$ctrl.mail.name}}</div>\r\n            <div class=\"email\">{{$ctrl.mail.email}}</div>\r\n            <div class=\"date\">{{$ctrl.mail.date | date: 'dd/MM/yyyy'}}</div>\r\n        </div>\r\n        <div class=\"letter_body\">\r\n            {{$ctrl.mail.letterBody}}\r\n        </div>\r\n    </div>\r\n    <form name=\"newMailForm\" novalidate>\r\n        <div ng-if=\"$ctrl.isNew\" class=\"new_msg\">\r\n            <div class=\"email\">\r\n                <label>To:</label>\r\n                <input name=\"email\" ng-model=\"$ctrl.mail.email\" required type=\"email\">\r\n                <messages element=\"newMailForm.email\" errors=\"$ctrl.mailFieldErrors\" visibility=\"newMailForm.email.$dirty\"></messages>\r\n            </div>\r\n            <div class=\"topic\">\r\n                <label>Subject:</label>\r\n                <input ng-model=\"$ctrl.mail.topic\">\r\n            </div>\r\n\r\n            <textarea class=\"letter_body\" ng-model=\"$ctrl.mail.letterBody\"></textarea>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewController = __webpack_require__(22);

	var _viewController2 = _interopRequireDefault(_viewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailViewController = function (_ViewController) {
	    _inherits(MailViewController, _ViewController);

	    function MailViewController(MailService, $state) {
	        _classCallCheck(this, MailViewController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailViewController).call(this, MailService, $state));

	        _this.service.selectedItem = {};
	        _this.getSelectedItem(_this.service.selectedFolder, _this.mailId);

	        _this.mailFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "email", text: "Enter a valid e-mail" }];
	        return _this;
	    }

	    _createClass(MailViewController, [{
	        key: "sendMail",
	        value: function sendMail() {
	            var _this2 = this;

	            this.mail.date = new Date().getTime();
	            this.service.sendMail(this.mail).then(function (response) {
	                _this2.service.selectedItem = null;
	                _this2.state.go("mailList", { folderName: _this2.service.selectedFolder });
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "goToListState",
	        value: function goToListState() {
	            this.state.go("mailList", { folderName: this.service.selectedFolder }, { reload: 'mailList' });
	        }
	    }, {
	        key: "mail",
	        get: function get() {
	            return this.item;
	        },
	        set: function set(item) {
	            this.item = item;
	        }
	    }, {
	        key: "isNew",
	        get: function get() {
	            return this.mailId === undefined;
	        }
	    }]);

	    return MailViewController;
	}(_viewController2.default);

		exports.default = MailViewController;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewController = function () {
	    function ViewController(service, $state) {
	        _classCallCheck(this, ViewController);

	        this.service = service;
	        this.state = $state;
	        this.item = service.selectedItem;
	    }

	    _createClass(ViewController, [{
	        key: "remove",
	        value: function remove(dataName) {
	            var _this = this;

	            this.service.remove(this.item, dataName).then(function (response) {
	                _this.service.selectedItem = null;
	                _this.goToListState();
	            });
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, itemId) {
	            var _this2 = this;

	            if (itemId) {
	                this.service.getSelectedItem(folderName, itemId).then(function (response) {
	                    _this2.item = response;
	                    _this2.service.selectedItem = _this2.item;
	                }).catch(function (error) {
	                    return console.log(error.message);
	                });
	            } else {
	                this.item = this.service.selectedItem = {};
	            }
	        }
	    }]);

	    return ViewController;
	}();

		exports.default = ViewController;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<mail-page></mail-page>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<mail-list folder-name='$ctrl.folderName'></mail-list>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<mail-view mail-id='$ctrl.mailId'></mail-view>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mailListStateController = function mailListStateController($stateParams) {
	    this.folderName = $stateParams.folderName;
	    //MailService.selectedFolder = this.folderName;
	};

		exports.default = mailListStateController;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mailViewStateController = function mailViewStateController($stateParams) {
	    this.mailId = $stateParams.mailId;
	};

		exports.default = mailViewStateController;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var onExitMailViewState = function onExitMailViewState(MailService) {
	    MailService.selectedMail = null;
	};

		exports.default = onExitMailViewState;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MailService = function (_BaseService) {
	    _inherits(MailService, _BaseService);

	    function MailService($http, UtilsService) {
	        _classCallCheck(this, MailService);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MailService).call(this, $http, UtilsService));

	        _this.selectedFolder = null;
	        _this.selectedMail = null;
	        return _this;
	    }

	    _createClass(MailService, [{
	        key: "getFolders",
	        value: function getFolders() {
	            return this.getData("folders");
	        }
	    }, {
	        key: "getMails",
	        value: function getMails(folderName) {
	            return this.getData(folderName.toLowerCase());
	        }
	    }, {
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, mailId) {
	            return _get(Object.getPrototypeOf(MailService.prototype), "getSelectedItem", this).call(this, folderName, mailId).then(function (response) {
	                response.data.id = mailId;
	                response.data.folder = folderName;
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "sendMail",
	        value: function sendMail(mail) {
	            return this.add(mail, "sent");
	        }
	    }, {
	        key: "selectedItem",
	        get: function get() {
	            return this.selectedMail;
	        },
	        set: function set(mail) {
	            this.selectedMail = mail;
	        }
	    }]);

	    return MailService;
	}(_baseService2.default);

		exports.default = MailService;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(3);

	__webpack_require__(8);

	var _contactPageComponent = __webpack_require__(31);

	var _contactPageComponent2 = _interopRequireDefault(_contactPageComponent);

	var _contactListComponent = __webpack_require__(33);

	var _contactListComponent2 = _interopRequireDefault(_contactListComponent);

	var _contactViewComponent = __webpack_require__(36);

	var _contactViewComponent2 = _interopRequireDefault(_contactViewComponent);

	var _changeDateFormatDirective = __webpack_require__(39);

	var _changeDateFormatDirective2 = _interopRequireDefault(_changeDateFormatDirective);

	var _contactsState = __webpack_require__(40);

	var _contactsState2 = _interopRequireDefault(_contactsState);

	var _contactViewState = __webpack_require__(41);

	var _contactViewState2 = _interopRequireDefault(_contactViewState);

	var _contactViewStateController = __webpack_require__(42);

	var _contactViewStateController2 = _interopRequireDefault(_contactViewStateController);

	var _contactService = __webpack_require__(43);

	var _contactService2 = _interopRequireDefault(_contactService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contacts = angular.module("contacts", ["common", "services", "ngMessages", "ui.router"]);

	contacts.config(function ($stateProvider) {
	    $stateProvider.state("contacts", {
	        url: "/contacts",
	        template: _contactsState2.default
	    }).state("contactView", {
	        parent: "contacts",
	        url: "/contact?contactId",
	        template: _contactViewState2.default,
	        controller: "contactViewStateController as $ctrl"
	    }).state("newContact", {
	        parent: "contacts",
	        url: "/newContact",
	        template: _contactViewState2.default
	    });
	});

	contacts.component("contactPage", _contactPageComponent2.default);
	contacts.component("contactList", _contactListComponent2.default);
	contacts.component("contactView", _contactViewComponent2.default);
	contacts.directive("changeDateFormat", _changeDateFormatDirective2.default);
	contacts.controller("contactViewStateController", _contactViewStateController2.default);
	contacts.service("ContactService", _contactService2.default);

	exports.default = contacts;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactPage = __webpack_require__(32);

	var _contactPage2 = _interopRequireDefault(_contactPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactPage = {
	    template: _contactPage2.default,
	    controller: function controller(ContactService) {
	        this.isContactSelected = function () {
	            return ContactService.selectedContact !== null;
	        };
	    }
	};

		exports.default = contactPage;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"right_col\">\r\n    <contact-list ng-if=\"!$ctrl.isContactSelected()\"></contact-list>\r\n    <ui-view></ui-view>\r\n</div>"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactList = __webpack_require__(34);

	var _contactList2 = _interopRequireDefault(_contactList);

	var _contactListController = __webpack_require__(35);

	var _contactListController2 = _interopRequireDefault(_contactListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactList = {
	    template: _contactList2.default,
	    controller: _contactListController2.default
	};

		exports.default = contactList;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact_list\">\r\n    <div class=\"buttons\">\r\n        <custom-button class=\"'add'\" name=\"'Add'\"  click-handler=\"$ctrl.add()\"\r\n                       sref=\"'newContact'\"></custom-button>\r\n        <custom-button class=\"'del'\" name=\"'Delete'\" click-handler=\"$ctrl.remove()\"></custom-button>\r\n    </div>\r\n    <ul>\r\n        <li ng-repeat=\"contact in $ctrl.contacts\">\r\n            <input type=\"checkbox\" ng-model=\"contact.checked\"/>\r\n\r\n            <div class=\"row\" ui-sref=\"contactView({contactId: contact.id})\"\r\n                 ng-click=\"$ctrl.setSelectedContact(contact)\">\r\n                <div class=\"name\">{{contact.fullName}}</div>\r\n                <div class=\"mail_address\"><a href=\"mailto:{{contact.email}}\">{{contact.email}}</a></div>\r\n                <div class=\"birthdate\">{{contact.birthdate | date: 'dd/MM/yyyy'}}</div>\r\n                <div class=\"address\">{{contact.address}}</div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listController = __webpack_require__(18);

	var _listController2 = _interopRequireDefault(_listController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactListController = function (_ListController) {
	    _inherits(ContactListController, _ListController);

	    function ContactListController(ContactService) {
	        _classCallCheck(this, ContactListController);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactListController).call(this, ContactService));
	    }

	    _createClass(ContactListController, [{
	        key: "loadContacts",
	        value: function loadContacts() {
	            var _this2 = this;

	            this.service.getData().then(function (contacts) {
	                _this2.contacts = contacts;
	            });
	        }
	    }, {
	        key: "loadItems",
	        value: function loadItems() {
	            return this.loadContacts();
	        }
	    }, {
	        key: "setSelectedContact",
	        value: function setSelectedContact(contact) {
	            this.setSelectedItem(contact);
	        }
	    }, {
	        key: "contacts",
	        get: function get() {
	            return this.items;
	        },
	        set: function set(items) {
	            this.items = items;
	        }
	    }]);

	    return ContactListController;
	}(_listController2.default);

		exports.default = ContactListController;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _contactView = __webpack_require__(37);

	var _contactView2 = _interopRequireDefault(_contactView);

	var _contactViewController = __webpack_require__(38);

	var _contactViewController2 = _interopRequireDefault(_contactViewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactView = {
	    bindings: {
	        contactId: "<"
	    },
	    template: _contactView2.default,
	    controller: _contactViewController2.default
	};

		exports.default = contactView;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact_view\">\r\n    <form name=\"contactForm\" novalidate>\r\n        <div class=\"buttons\">\r\n            <custom-button class=\"$ctrl.isNew ? 'single': 'edit'\"\r\n                           name=\"$ctrl.editMode ? 'Save' : 'Edit'\"\r\n                           disabled=\"contactForm.$invalid\"\r\n                           click-handler=\"$ctrl.editMode ? $ctrl.save() : $ctrl.edit()\"></custom-button>\r\n            <custom-button class=\"'del'\" name=\"'Delete'\" ng-if=\"!$ctrl.isNew\"\r\n                           click-handler=\"$ctrl.remove()\"></custom-button>\r\n        </div>\r\n        <div class=\"name_row\">\r\n            <span class=\"name_text\" ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.fullName}}</span>\r\n            <input name=\"name\" ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.fullName\" required ng-minlength=\"5\">\r\n            <messages element=\"contactForm.name\" errors=\"$ctrl.nameFieldErrors\" visibility=\"contactForm.name.$dirty\"></messages>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Mail address</label></div>\r\n            <div class=\"mail_address\">\r\n                <a ng-if=\"!$ctrl.editMode\" href=\"mailto:{{$ctrl.contact.email}}\">{{$ctrl.contact.email}}</a>\r\n                <input name=\"email\" ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.email\" type=\"email\" required>\r\n                <messages element=\"contactForm.email\" errors=\"$ctrl.mailFieldErrors\" visibility=\"contactForm.email.$dirty\"></messages>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Birthdate</label></div>\r\n            <div class=\"birthdate\">\r\n                <span ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.birthdate | date: 'dd/MM/yyyy'}}</span>\r\n                <input ng-if=\"$ctrl.editMode\" change-date-format type=\"date\" ng-model=\"$ctrl.contact.birthdate\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"label_wrapper\"><label>Address</label></div>\r\n            <div class=\"address\">\r\n                <span ng-if=\"!$ctrl.editMode\">{{$ctrl.contact.address}}</span>\r\n                <input ng-if=\"$ctrl.editMode\" ng-model=\"$ctrl.contact.address\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewController = __webpack_require__(22);

	var _viewController2 = _interopRequireDefault(_viewController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactViewController = function (_ViewController) {
	    _inherits(ContactViewController, _ViewController);

	    function ContactViewController(ContactService, $state) {
	        _classCallCheck(this, ContactViewController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactViewController).call(this, ContactService, $state));

	        if (_this.service.selectedItem === null) {

	            _this.getSelectedItem("users", _this.contactId);
	        } else {
	            _this.contact = _this.service.selectedItem;
	        }

	        _this.editMode = _this.isNew ? true : false;

	        _this.mailFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "email", text: "Enter a valid e-mail" }];

	        _this.nameFieldErrors = [{ type: "required", text: "Please enter a value for this field" }, { type: "minlength", text: "This field can be at least 5 characters long" }];
	        return _this;
	    }

	    _createClass(ContactViewController, [{
	        key: "edit",
	        value: function edit() {
	            this.editMode = true;
	        }
	    }, {
	        key: "save",
	        value: function save() {
	            var _this2 = this;

	            if (this.isNew) {
	                this.service.add(this.contact).then(function (response) {
	                    _this2.editMode = false;
	                    _this2.state.go("contactView", { contactId: _this2.contact.id });
	                });
	            } else {
	                this.service.update(this.contact).then(function (response) {
	                    _this2.editMode = false;
	                });
	            }
	        }
	    }, {
	        key: "goToListState",
	        value: function goToListState() {
	            this.state.go("contacts", { reload: 'contacts' });
	        }
	    }, {
	        key: "contact",
	        get: function get() {
	            return this.item;
	        },
	        set: function set(item) {
	            this.item = item;
	        }
	    }, {
	        key: "isNew",
	        get: function get() {
	            return this.contactId === undefined;
	        }
	    }]);

	    return ContactViewController;
	}(_viewController2.default);

		exports.default = ContactViewController;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var changeDateFormat = function changeDateFormat() {
	    return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function link(scope, element, attrs, ngModel) {

	            //model -> view
	            ngModel.$formatters.push(function (modelValue) {
	                return new Date(modelValue);
	            });

	            //view -> model
	            ngModel.$parsers.push(function (viewValue) {
	                return viewValue ? viewValue.getTime() : viewValue;
	            });
	        }
	    };
	};

		exports.default = changeDateFormat;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<contact-page></contact-page>"

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<contact-view contact-id='$ctrl.contactId'></contact-view>"

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var contactViewStateController = function contactViewStateController($stateParams) {
	    this.contactId = $stateParams.contactId;
	};

		exports.default = contactViewStateController;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _baseService = __webpack_require__(9);

	var _baseService2 = _interopRequireDefault(_baseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactService = function (_BaseService) {
	    _inherits(ContactService, _BaseService);

	    function ContactService($http, UtilsService) {
	        _classCallCheck(this, ContactService);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactService).call(this, $http, UtilsService));

	        _this.selectedContact = null;
	        _this.dataName = "users";
	        return _this;
	    }

	    _createClass(ContactService, [{
	        key: "getSelectedItem",
	        value: function getSelectedItem(folderName, contactId) {
	            return _get(Object.getPrototypeOf(ContactService.prototype), "getSelectedItem", this).call(this, folderName, contactId).then(function (response) {
	                response.data.id = contactId;
	                return response.data;
	            }).catch(function (error) {
	                return console.log(error.message);
	            });
	        }
	    }, {
	        key: "selectedItem",
	        get: function get() {
	            return this.selectedContact;
	        },
	        set: function set(contact) {
	            this.selectedContact = contact;
	        }
	    }]);

	    return ContactService;
	}(_baseService2.default);

		exports.default = ContactService;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mainPage = __webpack_require__(45);

	var _mainPage2 = _interopRequireDefault(_mainPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mainPage = {
	    template: _mainPage2.default,
	    controller: function controller() {
	        this.pageList = [{
	            title: "Mails",
	            state: "mail"
	        }, {
	            title: "Contacts",
	            state: "contacts"
	        }];
	    }
	};

		exports.default = mainPage;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<header>\r\n    <div class=\"container\">\r\n        <h1>MailApp</h1>\r\n        <top-nav nav-list=\"$ctrl.pageList\"></top-nav>\r\n    </div>\r\n</header>\r\n<main>\r\n    <div class=\"container\">\r\n        <ui-view></ui-view>\r\n    </div>\r\n</main>\r\n<footer></footer>"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _topNav = __webpack_require__(47);

	var _topNav2 = _interopRequireDefault(_topNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var topNav = {
	    bindings: {
	        navList: "<"
	    },
	    template: _topNav2.default,
	    controller: function controller(ContactService, MailService) {
	        this.reset = function () {
	            ContactService.selectedContact = null;
	            MailService.selectedMail = null;
	        };
	    }
	};

		exports.default = topNav;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"top_nav\">\r\n  <ul>\r\n    <!--<top-nav-item nav-item=\"navItem\"\r\n                  ng-repeat=\"navItem in $ctrl.navList\"></top-nav-item>-->\r\n    <li ng-repeat=\"navItem in $ctrl.navList\">\r\n      <a ui-sref=\"{{navItem.state}}\"\r\n         ui-sref-active=\"active\"\r\n         ng-click=\"$ctrl.reset()\">\r\n        {{navItem.title}}</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTVmYzVkNWQxZmE0ODk3ZWFmYTEiLCJ3ZWJwYWNrOi8vL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy9tYWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovLy9zaGFyZWQvY3VzdG9tQnV0dG9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC92aWV3cy9jdXN0b20tYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vL3NoYXJlZC9tZXNzYWdlc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdmlld3MvbWVzc2FnZXMuaHRtbCIsIndlYnBhY2s6Ly8vc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NlcnZpY2VzL2Jhc2VTZXJ2aWNlLmpzIiwid2VicGFjazovLy9zZXJ2aWNlcy91dGlsc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL21haWxzL2ZvbGRlcnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvZm9sZGVyLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbFBhZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvbWFpbC1wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vL21haWxzL21haWxMaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL21haWxzL3ZpZXdzL21haWwtbGlzdC5odG1sIiwid2VicGFjazovLy9tYWlscy9tYWlsTGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL2NvbnRyb2xsZXJzL2xpc3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9tYWlscy9tYWlsVmlld0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tYWlscy92aWV3cy9tYWlsLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbFZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9jb250cm9sbGVycy92aWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tYWlscy92aWV3cy9tYWlsLXN0YXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvbWFpbC1saXN0LXN0YXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbHMvdmlld3MvbWFpbC12aWV3LXN0YXRlLmh0bWwiLCJ3ZWJwYWNrOi8vL21haWxzL21haWxMaXN0U3RhdGVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9tYWlscy9tYWlsVmlld1N0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vbWFpbHMvb25FeGl0TWFpbFZpZXdTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vbWFpbHMvbWFpbFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2NvbnRhY3RzL2luZGV4LmpzIiwid2VicGFjazovLy9jb250YWN0cy9jb250YWN0UGFnZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWN0cy92aWV3cy9jb250YWN0LXBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vY29udGFjdHMvY29udGFjdExpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFjdHMvdmlld3MvY29udGFjdC1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vL2NvbnRhY3RzL2NvbnRhY3RMaXN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vY29udGFjdHMvY29udGFjdFZpZXdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vL2NvbnRhY3RzL2NvbnRhY3RWaWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vY29udGFjdHMvY2hhbmdlRGF0ZUZvcm1hdERpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWN0cy92aWV3cy9jb250YWN0cy1zdGF0ZS5odG1sIiwid2VicGFjazovLy8uL2NvbnRhY3RzL3ZpZXdzL2NvbnRhY3Qtdmlldy1zdGF0ZS5odG1sIiwid2VicGFjazovLy9jb250YWN0cy9jb250YWN0Vmlld1N0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vY29udGFjdHMvY29udGFjdFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL21haW4vbWFpblBhZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi92aWV3cy9tYWluLXBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vbWFpbi90b3BOYXZDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi92aWV3cy90b3AtbmF2Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxNWZjNWQ1ZDFmYTQ4OTdlYWZhMVxuICoqLyIsImltcG9ydCAgXCIuLi9tYWluXCI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2NyaXB0cy9hcHAuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4uL21haWxzXCI7XHJcbmltcG9ydCBcIi4uL2NvbnRhY3RzXCI7XHJcbmltcG9ydCBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBtYWluUGFnZUNvbW9uZW50IGZyb20gXCIuL21haW5QYWdlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB0b3BOYXZDb21wb25lbnQgZnJvbSBcIi4vdG9wTmF2Q29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBtYWlsQXBwID0gYW5ndWxhci5tb2R1bGUoXCJtYWlsQXBwXCIsIFtcIm1haWxzXCIsIFwiY29udGFjdHNcIiwgXCJzZXJ2aWNlc1wiXSk7XHJcblxyXG5tYWlsQXBwLmNvbXBvbmVudChcIm1haW5QYWdlXCIsIG1haW5QYWdlQ29tb25lbnQpO1xyXG5tYWlsQXBwLmNvbXBvbmVudChcInRvcE5hdlwiLCB0b3BOYXZDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWluL2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zaGFyZWRcIjtcclxuaW1wb3J0IFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IGZvbGRlcnNDb21wb25lbnQgZnJvbSBcIi4vZm9sZGVyc0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWFpbFBhZ2VDb21wb25lbnQgZnJvbSBcIi4vbWFpbFBhZ2VDb21wb25lbnRcIjtcclxuaW1wb3J0IG1haWxMaXN0Q29tcG9uZW50IGZyb20gXCIuL21haWxMaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBtYWlsVmlld0NvbXBvbmVudCBmcm9tIFwiLi9tYWlsVmlld0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWFpbFN0YXRlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvbWFpbC1zdGF0ZS5odG1sXCI7XHJcbmltcG9ydCBtYWlsTGlzdFN0YXRlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvbWFpbC1saXN0LXN0YXRlLmh0bWxcIjtcclxuaW1wb3J0IG1haWxWaWV3U3RhdGVUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9tYWlsLXZpZXctc3RhdGUuaHRtbFwiO1xyXG5pbXBvcnQgbWFpbExpc3RTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vbWFpbExpc3RTdGF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IG1haWxWaWV3U3RhdGVDb250cm9sbGVyIGZyb20gXCIuL21haWxWaWV3U3RhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBvbkV4aXRNYWlsVmlld1N0YXRlIGZyb20gXCIuL29uRXhpdE1haWxWaWV3U3RhdGVcIjtcclxuaW1wb3J0IE1haWxTZXJ2aWNlIGZyb20gXCIuL21haWxTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBtYWlscyA9IGFuZ3VsYXIubW9kdWxlKFwibWFpbHNcIiwgW1wiY29tbW9uXCIsIFwic2VydmljZXNcIiwgXCJuZ01lc3NhZ2VzXCIsIFwidWkucm91dGVyXCJdKTtcclxuXHJcbm1haWxzLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXHJcbiAgICAgICAgLndoZW4oXCIvbWFpbFwiLCBbJyRzdGF0ZScsIGZ1bmN0aW9uICgkc3RhdGUpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKFwibWFpbExpc3RcIiwge2ZvbGRlck5hbWU6ICdJbmJveCd9KTtcclxuICAgICAgICB9XSlcclxuICAgICAgICAub3RoZXJ3aXNlKFwibWFpbFwiKTtcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZShcIm1haWxcIiwge1xyXG4gICAgICAgICAgICB1cmw6IFwiL21haWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IG1haWxTdGF0ZVRlbXBsYXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoXCJtYWlsTGlzdFwiLCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWlsXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvZm9sZGVyP2ZvbGRlck5hbWVcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IG1haWxMaXN0U3RhdGVUZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJtYWlsTGlzdFN0YXRlQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6IFwiJGN0cmxcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKFwibWFpbFZpZXdcIiwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IFwibWFpbExpc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9tYWlsP21haWxJZFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbWFpbFZpZXdTdGF0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcIm1haWxWaWV3U3RhdGVDb250cm9sbGVyIGFzICRjdHJsXCIsXHJcbiAgICAgICAgICAgIG9uRXhpdDogb25FeGl0TWFpbFZpZXdTdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKFwibmV3TWFpbFwiLCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogXCJtYWlsXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvbmV3TWFpbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbWFpbFZpZXdTdGF0ZVRlbXBsYXRlXHJcbiAgICAgICAgfSk7XHJcblxyXG59KTtcclxuXHJcbm1haWxzLmNvbXBvbmVudChcImZvbGRlcnNcIiwgZm9sZGVyc0NvbXBvbmVudCk7XHJcbm1haWxzLmNvbXBvbmVudChcIm1haWxQYWdlXCIsIG1haWxQYWdlQ29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KFwibWFpbExpc3RcIiwgbWFpbExpc3RDb21wb25lbnQpO1xyXG5tYWlscy5jb21wb25lbnQoXCJtYWlsVmlld1wiLCBtYWlsVmlld0NvbXBvbmVudCk7XHJcbm1haWxzLmNvbnRyb2xsZXIoXCJtYWlsTGlzdFN0YXRlQ29udHJvbGxlclwiLCBtYWlsTGlzdFN0YXRlQ29udHJvbGxlcik7XHJcbm1haWxzLmNvbnRyb2xsZXIoXCJtYWlsVmlld1N0YXRlQ29udHJvbGxlclwiLCBtYWlsVmlld1N0YXRlQ29udHJvbGxlcik7XHJcbm1haWxzLnNlcnZpY2UoXCJNYWlsU2VydmljZVwiLCBNYWlsU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlscztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBjdXN0b21CdXR0b25Db21wb25lbnQgZnJvbSBcIi4vY3VzdG9tQnV0dG9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCBtZXNzYWdlc0NvbXBvbmVudCBmcm9tIFwiLi9tZXNzYWdlc0NvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgY29tbW9uID0gYW5ndWxhci5tb2R1bGUoXCJjb21tb25cIiwgW10pO1xyXG5cclxuY29tbW9uLmNvbXBvbmVudChcImN1c3RvbUJ1dHRvblwiLCBjdXN0b21CdXR0b25Db21wb25lbnQpO1xyXG5jb21tb24uY29tcG9uZW50KFwibWVzc2FnZXNcIiwgbWVzc2FnZXNDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNoYXJlZC9pbmRleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGN1c3RvbUJ1dHRvblRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL2N1c3RvbS1idXR0b24uaHRtbFwiO1xyXG5cclxuY29uc3QgY3VzdG9tQnV0dG9uID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiBcIjxcIixcclxuICAgICAgICBjbGFzczogXCI8XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiPFwiLFxyXG4gICAgICAgIHNyZWY6IFwiPFwiLFxyXG4gICAgICAgIGNsaWNrSGFuZGxlcjogXCImXCJcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogY3VzdG9tQnV0dG9uVGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21CdXR0b247XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNoYXJlZC9jdXN0b21CdXR0b25Db21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVRPRE86IGNyZWF0ZSBidXR0b25zLWNvbnRhaW5lci0tPlxcclxcbjxkaXYgbmctY2xhc3M9XFxcIlsnYnV0dG9uJywgJGN0cmwuY2xhc3MsIHtkaXNhYmxlZCA6ICRjdHJsLmRpc2FibGVkfV1cXFwiPlxcclxcbiAgICA8YSBuZy1pZj1cXFwiJGN0cmwuc3JlZlxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuY2xpY2tIYW5kbGVyKClcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgdWktc3JlZj1cXFwie3skY3RybC5zcmVmfX1cXFwiPnt7JGN0cmwubmFtZX19PC9hPlxcclxcbiAgICA8YSBuZy1pZj1cXFwiISRjdHJsLnNyZWZcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmNsaWNrSGFuZGxlcigpXFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiPnt7JGN0cmwubmFtZX19PC9hPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NoYXJlZC92aWV3cy9jdXN0b20tYnV0dG9uLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtZXNzYWdlc1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21lc3NhZ2VzLmh0bWxcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBlbGVtZW50OiBcIjxcIixcclxuICAgICAgICBlcnJvcnM6IFwiPFwiLFxyXG4gICAgICAgIHZpc2liaWxpdHk6IFwiPFwiXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IG1lc3NhZ2VzVGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzaGFyZWQvbWVzc2FnZXNDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZXJyb3JfbXNnXFxcIiBuZy1tZXNzYWdlcz1cXFwiJGN0cmwuZWxlbWVudC4kZXJyb3JcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBuZy1pZj1cXFwiJGN0cmwudmlzaWJpbGl0eVxcXCI+XFxyXFxuICAgIDxzcGFuIG5nLXJlcGVhdD1cXFwiZXJyIGluICRjdHJsLmVycm9yc1xcXCIgbmctbWVzc2FnZS1leHA9XFxcImVyci50eXBlXFxcIiBjbGFzcz1cXFwibXNnXFxcIiA+e3tlcnIudGV4dH19PC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NoYXJlZC92aWV3cy9tZXNzYWdlcy5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSBcIi4vYmFzZVNlcnZpY2VcIjtcclxuaW1wb3J0IFV0aWxzU2VydmljZSBmcm9tIFwiLi91dGlsc1NlcnZpY2VcIjtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoXCJzZXJ2aWNlc1wiLCBbXSk7XHJcblxyXG5zZXJ2aWNlcy5zZXJ2aWNlKFwiQmFzZVNlcnZpY2VcIiwgQmFzZVNlcnZpY2UpO1xyXG5zZXJ2aWNlcy5zZXJ2aWNlKFwiVXRpbHNTZXJ2aWNlXCIsIFV0aWxzU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlcztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2VydmljZXMvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBVdGlsc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLnV0aWxzU2VydmljZSA9IFV0aWxzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKGRhdGFOYW1lID0gdGhpcy5kYXRhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXRpbHNTZXJ2aWNlLmJhc2VVUkx9JHtkYXRhTmFtZX0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMudXRpbHNTZXJ2aWNlLm5vcm1hbGl6ZVRvQXJyYXkocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRJdGVtKGZvbGRlck5hbWUsIGl0ZW1JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXRpbHNTZXJ2aWNlLmJhc2VVUkx9JHtmb2xkZXJOYW1lLnRvTG93ZXJDYXNlKCl9LyR7aXRlbUlkfS5qc29uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5ld0l0ZW0sIGRhdGFOYW1lID0gdGhpcy5kYXRhTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnV0aWxzU2VydmljZS5iYXNlVVJMfSR7ZGF0YU5hbWV9Lmpzb25gLCBuZXdJdGVtKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmlkID0gcmVzcG9uc2UuZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoaXRlbSwgZGF0YU5hbWUgPSB0aGlzLmRhdGFOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy51dGlsc1NlcnZpY2UuYmFzZVVSTH0ke2RhdGFOYW1lfS8ke2l0ZW0uaWR9Lmpzb25gLCBpdGVtKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKS5cclxuICAgICAgICAgICAgY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShpdGVtLCBkYXRhTmFtZSA9IHRoaXMuZGF0YU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnV0aWxzU2VydmljZS5iYXNlVVJMfSR7ZGF0YU5hbWV9LyR7aXRlbS5pZH0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXJyYXkoYXJyLCBkYXRhTmFtZSA9IHRoaXMuZGF0YU5hbWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBsZXQgcmVtb3ZlTmV4dEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShhcnJbaV0sIGRhdGFOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgrK2kgPCBsZW5ndGgpID8gcmVtb3ZlTmV4dEl0ZW0oKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZW1vdmVOZXh0SXRlbSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzZXJ2aWNlcy9iYXNlU2VydmljZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgVXRpbHNTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5ub3JtYWxpemVUb0FycmF5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkT2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRPYmplY3QuaWQgPSBrZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkT2JqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vZmllcnktaW5mZXJuby04OTY4LmZpcmViYXNlaW8uY29tL1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHNTZXJ2aWNlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2VydmljZXMvdXRpbHNTZXJ2aWNlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZm9sZGVyc1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL2ZvbGRlci1saXN0Lmh0bWxcIjtcclxuXHJcbmNvbnN0IGZvbGRlcnMgPSB7XHJcbiAgICB0ZW1wbGF0ZTogZm9sZGVyc1RlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gKE1haWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRGb2xkZXJzID0gKCk9PiB7XHJcbiAgICAgICAgICAgIE1haWxTZXJ2aWNlLmdldEZvbGRlcnMoKS50aGVuKChmb2xkZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSBmb2xkZXJzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0Rm9sZGVycygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sZGVycztcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL2ZvbGRlcnNDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHVsPlxcclxcbiAgICA8bGkgbmctcmVwZWF0PVxcXCJmb2xkZXIgaW4gJGN0cmwuZm9sZGVyc1xcXCI+XFxyXFxuICAgICAgICA8YSB1aS1zcmVmPVxcXCJtYWlsTGlzdCh7Zm9sZGVyTmFtZTpmb2xkZXIubmFtZX0pXFxcIlxcclxcbiAgICAgICAgICAgdWktc3JlZi1hY3RpdmU9XFxcImFjdGl2ZVxcXCJcXHJcXG4gICAgICAgICAgIG5nLWNsYXNzPVxcXCJbJ2ZvbGRlcicsIGZvbGRlci5uYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgMyldXFxcIj5cXHJcXG4gICAgICAgICAgICB7e2ZvbGRlci5uYW1lfX1cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL2ZvbGRlci1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgbWFpbFBhZ2VUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9tYWlsLXBhZ2UuaHRtbFwiO1xyXG5cclxuY29uc3QgbWFpbFBhZ2UgPSB7XHJcbiAgICB0ZW1wbGF0ZTogbWFpbFBhZ2VUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIChNYWlsU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNNYWlsU2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYWlsU2VydmljZS5zZWxlY3RlZE1haWwgIT09IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxQYWdlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvbWFpbFBhZ2VDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGVmdF9jb2xcXFwiPlxcclxcbiAgICA8bmF2IGNsYXNzPVxcXCJtYWlsX21lbnVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidubWVzJ1xcXCIgbmFtZT1cXFwiJ05ldyBtZXNzYWdlJ1xcXCIgc3JlZj1cXFwiJ25ld01haWwnXFxcIj48L2N1c3RvbS1idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxmb2xkZXJzPjwvZm9sZGVycz5cXHJcXG4gICAgPC9uYXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicmlnaHRfY29sXFxcIj5cXHJcXG4gICAgPHVpLXZpZXc+PC91aS12aWV3PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL21haWwtcGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IG1haWxMaXN0VGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvbWFpbC1saXN0Lmh0bWxcIjtcclxuaW1wb3J0IE1haWxMaXN0Q29udHJvbGxlciBmcm9tIFwiLi9tYWlsTGlzdENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IG1haWxMaXN0ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBmb2xkZXJOYW1lOiBcIjxcIlxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBtYWlsTGlzdFRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogTWFpbExpc3RDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsTGlzdDtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIG1haWxzL21haWxMaXN0Q29tcG9uZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1haWxfbGlzdFxcXCIgbmctaWY9XFxcIiEkY3RybC5pc01haWxTZWxlY3RlZCgpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICA8Y3VzdG9tLWJ1dHRvbiBjbGFzcz1cXFwiJ2RlbCdcXFwiIG5hbWU9XFxcIidEZWxldGUnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2staGFuZGxlcj1cXFwiJGN0cmwucmVtb3ZlKCRjdHJsLmZvbGRlck5hbWUudG9Mb3dlckNhc2UoKSlcXFwiPjwvY3VzdG9tLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcIm1haWwgaW4gJGN0cmwubWFpbHMgfCBvcmRlckJ5OiAnLWRhdGUnXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtYWlsLmNoZWNrZWRcXFwiLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHVpLXNyZWY9XFxcIm1haWxWaWV3KHttYWlsSWQ6bWFpbC5pZH0pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbF9hZGRyZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhPnt7bWFpbC5uYW1lID8gbWFpbC5uYW1lIDogbWFpbC5lbWFpbH19PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbF9jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0b3BpY1xcXCI+e3ttYWlsLnRvcGljfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWFpbF9mcmFnbWVudFxcXCI+e3ttYWlsLmxldHRlckJvZHl9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlXFxcIj57e21haWwuZGF0ZSB8IGRhdGU6ICdkZC9NTS95eXl5J319PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48dWktdmlldz48L3VpLXZpZXc+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbHMvdmlld3MvbWFpbC1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgTGlzdENvbnRyb2xsZXIgIGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0Q29udHJvbGxlclwiO1xyXG5cclxuY2xhc3MgTWFpbExpc3RDb250cm9sbGVyIGV4dGVuZHMgTGlzdENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoTWFpbFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihNYWlsU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRm9sZGVyID0gdGhpcy5mb2xkZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNYWlscygpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0TWFpbHModGhpcy5mb2xkZXJOYW1lKVxyXG4gICAgICAgICAgICAudGhlbigobWFpbHMpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWlscyA9IG1haWxzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZE1haWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1haWxzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYWlscyhpdGVtcykge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBpc01haWxTZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSAhPT0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3RDb250cm9sbGVyO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvbWFpbExpc3RDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBMaXN0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbShudWxsKTtcclxuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGRhdGFOYW1lKSB7XHJcbiAgICAgICAgbGV0IGRlbEl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IHVwZGF0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkZWxJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmVBcnJheShkZWxJdGVtcywgZGF0YU5hbWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT09IHRydWUpIHRoaXMuaXRlbXMgPSB1cGRhdGVkSXRlbXM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UsIGNob29zZSBpdGVtcyB0byBkZWxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udHJvbGxlcnMvbGlzdENvbnRyb2xsZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtYWlsVmlld1RlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21haWwtdmlldy5odG1sXCI7XHJcbmltcG9ydCBNYWlsVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vbWFpbFZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBtYWlsVmlldyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgbWFpbElkOlwiPFwiXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IG1haWxWaWV3VGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOiBNYWlsVmlld0NvbnRyb2xsZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxWaWV3O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvbWFpbFZpZXdDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWFpbF92aWV3XFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICA8Y3VzdG9tLWJ1dHRvbiBjbGFzcz1cXFwiJ3NlbmQnXFxcIiBuYW1lPVxcXCInU2VuZCdcXFwiIG5nLWlmPVxcXCIkY3RybC5pc05ld1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLWhhbmRsZXI9XFxcIiRjdHJsLnNlbmRNYWlsKClcXFwiIGRpc2FibGVkPVxcXCJuZXdNYWlsRm9ybS4kaW52YWxpZFxcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCIgbmctaWY9XFxcIiEkY3RybC5pc05ld1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLWhhbmRsZXI9XFxcIiRjdHJsLnJlbW92ZSgkY3RybC5tYWlsLmZvbGRlci50b0xvd2VyQ2FzZSgpKVxcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBuZy1pZj1cXFwiISRjdHJsLmlzTmV3XFxcIiBjbGFzcz1cXFwicmVjZWl2ZWRfbXNnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9waWNcXFwiPnt7JGN0cmwubWFpbC50b3BpY319PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZVxcXCIgbmctaWY9XFxcIiRjdHJsLm1haWwubmFtZVxcXCI+e3skY3RybC5tYWlsLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsXFxcIj57eyRjdHJsLm1haWwuZW1haWx9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPnt7JGN0cmwubWFpbC5kYXRlIHwgZGF0ZTogJ2RkL01NL3l5eXknfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV0dGVyX2JvZHlcXFwiPlxcclxcbiAgICAgICAgICAgIHt7JGN0cmwubWFpbC5sZXR0ZXJCb2R5fX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGZvcm0gbmFtZT1cXFwibmV3TWFpbEZvcm1cXFwiIG5vdmFsaWRhdGU+XFxyXFxuICAgICAgICA8ZGl2IG5nLWlmPVxcXCIkY3RybC5pc05ld1xcXCIgY2xhc3M9XFxcIm5ld19tc2dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRvOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJlbWFpbFxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLm1haWwuZW1haWxcXFwiIHJlcXVpcmVkIHR5cGU9XFxcImVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG1lc3NhZ2VzIGVsZW1lbnQ9XFxcIm5ld01haWxGb3JtLmVtYWlsXFxcIiBlcnJvcnM9XFxcIiRjdHJsLm1haWxGaWVsZEVycm9yc1xcXCIgdmlzaWJpbGl0eT1cXFwibmV3TWFpbEZvcm0uZW1haWwuJGRpcnR5XFxcIj48L21lc3NhZ2VzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcGljXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN1YmplY3Q6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsLnRvcGljXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImxldHRlcl9ib2R5XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWFpbC5sZXR0ZXJCb2R5XFxcIj48L3RleHRhcmVhPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9tYWlsLXZpZXcuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBWaWV3Q29udHJvbGxlciAgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5jbGFzcyBNYWlsVmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihNYWlsU2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICAgICAgc3VwZXIoTWFpbFNlcnZpY2UsICRzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKHRoaXMuc2VydmljZS5zZWxlY3RlZEZvbGRlciwgdGhpcy5tYWlsSWQpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5tYWlsRmllbGRFcnJvcnMgPSBbXHJcbiAgICAgICAgICAgIHt0eXBlOiBcInJlcXVpcmVkXCIsIHRleHQ6IFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGRcIn0sXHJcbiAgICAgICAgICAgIHt0eXBlOiBcImVtYWlsXCIsIHRleHQ6IFwiRW50ZXIgYSB2YWxpZCBlLW1haWxcIn1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYWlsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1haWwoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTmV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haWxJZCA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNYWlsKCkge1xyXG4gICAgICAgIHRoaXMubWFpbC5kYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbmRNYWlsKHRoaXMubWFpbClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdvKFwibWFpbExpc3RcIiwge2ZvbGRlck5hbWU6IHRoaXMuc2VydmljZS5zZWxlY3RlZEZvbGRlcn0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9MaXN0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5nbyhcIm1haWxMaXN0XCIsIHtmb2xkZXJOYW1lOiB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRGb2xkZXJ9LCB7cmVsb2FkOiAnbWFpbExpc3QnfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxWaWV3Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsVmlld0NvbnRyb2xsZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsICRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICB0aGlzLml0ZW0gPSBzZXJ2aWNlLnNlbGVjdGVkSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoZGF0YU5hbWUpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMuaXRlbSwgZGF0YU5hbWUpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub0xpc3RTdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBpdGVtSWQpIHtcclxuICAgICAgICBpZiAoaXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRTZWxlY3RlZEl0ZW0oZm9sZGVyTmFtZSwgaXRlbUlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtYWlsLXBhZ2U+PC9tYWlsLXBhZ2U+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbHMvdmlld3MvbWFpbC1zdGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWFpbC1saXN0IGZvbGRlci1uYW1lPSckY3RybC5mb2xkZXJOYW1lJz48L21haWwtbGlzdD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlscy92aWV3cy9tYWlsLWxpc3Qtc3RhdGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1haWwtdmlldyBtYWlsLWlkPSckY3RybC5tYWlsSWQnPjwvbWFpbC12aWV3PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWxzL3ZpZXdzL21haWwtdmlldy1zdGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBtYWlsTGlzdFN0YXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIHRoaXMuZm9sZGVyTmFtZSA9ICRzdGF0ZVBhcmFtcy5mb2xkZXJOYW1lO1xyXG4gICAgLy9NYWlsU2VydmljZS5zZWxlY3RlZEZvbGRlciA9IHRoaXMuZm9sZGVyTmFtZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxMaXN0U3RhdGVDb250cm9sbGVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsTGlzdFN0YXRlQ29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbWFpbFZpZXdTdGF0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHN0YXRlUGFyYW1zKSB7XHJcbiAgICB0aGlzLm1haWxJZCA9ICRzdGF0ZVBhcmFtcy5tYWlsSWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsVmlld1N0YXRlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWlscy9tYWlsVmlld1N0YXRlQ29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb25FeGl0TWFpbFZpZXdTdGF0ZSA9IGZ1bmN0aW9uIChNYWlsU2VydmljZSkge1xyXG4gICAgTWFpbFNlcnZpY2Uuc2VsZWN0ZWRNYWlsID0gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uRXhpdE1haWxWaWV3U3RhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvb25FeGl0TWFpbFZpZXdTdGF0ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IEJhc2VTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9iYXNlU2VydmljZVwiO1xyXG5cclxuY2xhc3MgTWFpbFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgVXRpbHNTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoJGh0dHAsIFV0aWxzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1haWwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbGRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YShcImZvbGRlcnNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFpbHMoZm9sZGVyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoZm9sZGVyTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZEl0ZW0oZm9sZGVyTmFtZSwgbWFpbElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBtYWlsSWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaWQgPSBtYWlsSWQ7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvbGRlciA9IGZvbGRlck5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kTWFpbChtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG1haWwsIFwic2VudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTWFpbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VsZWN0ZWRJdGVtKG1haWwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFpbCA9IG1haWw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWlsU2VydmljZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbHMvbWFpbFNlcnZpY2UuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4uL3NoYXJlZFwiO1xyXG5pbXBvcnQgXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgY29udGFjdFBhZ2VDb21wb25lbnQgZnJvbSBcIi4vY29udGFjdFBhZ2VDb21wb25lbnRcIjtcclxuaW1wb3J0IGNvbnRhY3RMaXN0Q29tcG9uZW50IGZyb20gXCIuL2NvbnRhY3RMaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBjb250YWN0Vmlld0NvbXBvbmVudCBmcm9tIFwiLi9jb250YWN0Vmlld0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgY2hhbmdlRGF0ZUZvcm1hdERpcmVjdGl2ZSBmcm9tIFwiLi9jaGFuZ2VEYXRlRm9ybWF0RGlyZWN0aXZlXCI7XHJcbmltcG9ydCBjb250YWN0c1N0YXRlVGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvY29udGFjdHMtc3RhdGUuaHRtbFwiO1xyXG5pbXBvcnQgY29udGFjdFZpZXdTdGF0ZVRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL2NvbnRhY3Qtdmlldy1zdGF0ZS5odG1sXCI7XHJcbmltcG9ydCBjb250YWN0Vmlld1N0YXRlQ29udHJvbGxlciBmcm9tIFwiLi9jb250YWN0Vmlld1N0YXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgQ29udGFjdFNlcnZpY2UgZnJvbSBcIi4vY29udGFjdFNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RzID0gYW5ndWxhci5tb2R1bGUoXCJjb250YWN0c1wiLCBbXCJjb21tb25cIiwgXCJzZXJ2aWNlc1wiLCBcIm5nTWVzc2FnZXNcIiwgXCJ1aS5yb3V0ZXJcIl0pO1xyXG5cclxuY29udGFjdHMuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoXCJjb250YWN0c1wiLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvY29udGFjdHNcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGNvbnRhY3RzU3RhdGVUZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKFwiY29udGFjdFZpZXdcIiwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IFwiY29udGFjdHNcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9jb250YWN0P2NvbnRhY3RJZFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogY29udGFjdFZpZXdTdGF0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImNvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyIGFzICRjdHJsXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZShcIm5ld0NvbnRhY3RcIiwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IFwiY29udGFjdHNcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9uZXdDb250YWN0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBjb250YWN0Vmlld1N0YXRlVGVtcGxhdGVcclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5jb250YWN0cy5jb21wb25lbnQoXCJjb250YWN0UGFnZVwiLCBjb250YWN0UGFnZUNvbXBvbmVudCk7XHJcbmNvbnRhY3RzLmNvbXBvbmVudChcImNvbnRhY3RMaXN0XCIsIGNvbnRhY3RMaXN0Q29tcG9uZW50KTtcclxuY29udGFjdHMuY29tcG9uZW50KFwiY29udGFjdFZpZXdcIiwgY29udGFjdFZpZXdDb21wb25lbnQpO1xyXG5jb250YWN0cy5kaXJlY3RpdmUoXCJjaGFuZ2VEYXRlRm9ybWF0XCIsIGNoYW5nZURhdGVGb3JtYXREaXJlY3RpdmUpO1xyXG5jb250YWN0cy5jb250cm9sbGVyKFwiY29udGFjdFZpZXdTdGF0ZUNvbnRyb2xsZXJcIiwgY29udGFjdFZpZXdTdGF0ZUNvbnRyb2xsZXIpO1xyXG5jb250YWN0cy5zZXJ2aWNlKFwiQ29udGFjdFNlcnZpY2VcIiwgQ29udGFjdFNlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHM7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2luZGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgY29udGFjdFBhZ2VUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9jb250YWN0LXBhZ2UuaHRtbFwiO1xyXG5cclxuY29uc3QgY29udGFjdFBhZ2UgPSB7XHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdFBhZ2VUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIChDb250YWN0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNDb250YWN0U2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb250YWN0U2VydmljZS5zZWxlY3RlZENvbnRhY3QgIT09IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udGFjdHMvY29udGFjdFBhZ2VDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmlnaHRfY29sXFxcIj5cXHJcXG4gICAgPGNvbnRhY3QtbGlzdCBuZy1pZj1cXFwiISRjdHJsLmlzQ29udGFjdFNlbGVjdGVkKClcXFwiPjwvY29udGFjdC1saXN0PlxcclxcbiAgICA8dWktdmlldz48L3VpLXZpZXc+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC1wYWdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgY29udGFjdExpc3RUZW1wbGF0ZSBmcm9tIFwiLi92aWV3cy9jb250YWN0LWxpc3QuaHRtbFwiO1xyXG5pbXBvcnQgQ29udGFjdExpc3RDb250cm9sbGVyIGZyb20gXCIuL2NvbnRhY3RMaXN0Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSB7XHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdExpc3RUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IENvbnRhY3RMaXN0Q29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3Q7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb250YWN0cy9jb250YWN0TGlzdENvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWN0X2xpc3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCInYWRkJ1xcXCIgbmFtZT1cXFwiJ0FkZCdcXFwiICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5hZGQoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIHNyZWY9XFxcIiduZXdDb250YWN0J1xcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCIgY2xpY2staGFuZGxlcj1cXFwiJGN0cmwucmVtb3ZlKClcXFwiPjwvY3VzdG9tLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImNvbnRhY3QgaW4gJGN0cmwuY29udGFjdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImNvbnRhY3QuY2hlY2tlZFxcXCIvPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdWktc3JlZj1cXFwiY29udGFjdFZpZXcoe2NvbnRhY3RJZDogY29udGFjdC5pZH0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLnNldFNlbGVjdGVkQ29udGFjdChjb250YWN0KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVcXFwiPnt7Y29udGFjdC5mdWxsTmFtZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haWxfYWRkcmVzc1xcXCI+PGEgaHJlZj1cXFwibWFpbHRvOnt7Y29udGFjdC5lbWFpbH19XFxcIj57e2NvbnRhY3QuZW1haWx9fTwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmlydGhkYXRlXFxcIj57e2NvbnRhY3QuYmlydGhkYXRlIHwgZGF0ZTogJ2RkL01NL3l5eXknfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkcmVzc1xcXCI+e3tjb250YWN0LmFkZHJlc3N9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250YWN0cy92aWV3cy9jb250YWN0LWxpc3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBMaXN0Q29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdENvbnRyb2xsZXJcIjtcclxuXHJcbmNsYXNzIENvbnRhY3RMaXN0Q29udHJvbGxlciBleHRlbmRzIExpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKENvbnRhY3RTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoQ29udGFjdFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29udGFjdHMoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENvbnRhY3RzKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5nZXREYXRhKCkudGhlbigoY29udGFjdHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQ29udGFjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZENvbnRhY3QoY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKGNvbnRhY3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TGlzdENvbnRyb2xsZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RMaXN0Q29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGNvbnRhY3RWaWV3VGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvY29udGFjdC12aWV3Lmh0bWxcIjtcclxuaW1wb3J0IGNvbnRhY3RWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9jb250YWN0Vmlld0NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RWaWV3ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBjb250YWN0SWQ6XCI8XCJcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogY29udGFjdFZpZXdUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGNvbnRhY3RWaWV3Q29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFZpZXc7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb250YWN0cy9jb250YWN0Vmlld0NvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWN0X3ZpZXdcXFwiPlxcclxcbiAgICA8Zm9ybSBuYW1lPVxcXCJjb250YWN0Rm9ybVxcXCIgbm92YWxpZGF0ZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxjdXN0b20tYnV0dG9uIGNsYXNzPVxcXCIkY3RybC5pc05ldyA/ICdzaW5nbGUnOiAnZWRpdCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiJGN0cmwuZWRpdE1vZGUgPyAnU2F2ZScgOiAnRWRpdCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XFxcImNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLWhhbmRsZXI9XFxcIiRjdHJsLmVkaXRNb2RlID8gJGN0cmwuc2F2ZSgpIDogJGN0cmwuZWRpdCgpXFxcIj48L2N1c3RvbS1idXR0b24+XFxyXFxuICAgICAgICAgICAgPGN1c3RvbS1idXR0b24gY2xhc3M9XFxcIidkZWwnXFxcIiBuYW1lPVxcXCInRGVsZXRlJ1xcXCIgbmctaWY9XFxcIiEkY3RybC5pc05ld1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljay1oYW5kbGVyPVxcXCIkY3RybC5yZW1vdmUoKVxcXCI+PC9jdXN0b20tYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lX3Jvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hbWVfdGV4dFxcXCIgbmctaWY9XFxcIiEkY3RybC5lZGl0TW9kZVxcXCI+e3skY3RybC5jb250YWN0LmZ1bGxOYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmNvbnRhY3QuZnVsbE5hbWVcXFwiIHJlcXVpcmVkIG5nLW1pbmxlbmd0aD1cXFwiNVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1lc3NhZ2VzIGVsZW1lbnQ9XFxcImNvbnRhY3RGb3JtLm5hbWVcXFwiIGVycm9ycz1cXFwiJGN0cmwubmFtZUZpZWxkRXJyb3JzXFxcIiB2aXNpYmlsaXR5PVxcXCJjb250YWN0Rm9ybS5uYW1lLiRkaXJ0eVxcXCI+PC9tZXNzYWdlcz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbF93cmFwcGVyXFxcIj48bGFiZWw+TWFpbCBhZGRyZXNzPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsX2FkZHJlc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBuZy1pZj1cXFwiISRjdHJsLmVkaXRNb2RlXFxcIiBocmVmPVxcXCJtYWlsdG86e3skY3RybC5jb250YWN0LmVtYWlsfX1cXFwiPnt7JGN0cmwuY29udGFjdC5lbWFpbH19PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiZW1haWxcXFwiIG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmNvbnRhY3QuZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgICAgPG1lc3NhZ2VzIGVsZW1lbnQ9XFxcImNvbnRhY3RGb3JtLmVtYWlsXFxcIiBlcnJvcnM9XFxcIiRjdHJsLm1haWxGaWVsZEVycm9yc1xcXCIgdmlzaWJpbGl0eT1cXFwiY29udGFjdEZvcm0uZW1haWwuJGRpcnR5XFxcIj48L21lc3NhZ2VzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsX3dyYXBwZXJcXFwiPjxsYWJlbD5CaXJ0aGRhdGU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJpcnRoZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLWlmPVxcXCIhJGN0cmwuZWRpdE1vZGVcXFwiPnt7JGN0cmwuY29udGFjdC5iaXJ0aGRhdGUgfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLWlmPVxcXCIkY3RybC5lZGl0TW9kZVxcXCIgY2hhbmdlLWRhdGUtZm9ybWF0IHR5cGU9XFxcImRhdGVcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5jb250YWN0LmJpcnRoZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxfd3JhcHBlclxcXCI+PGxhYmVsPkFkZHJlc3M8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFkZHJlc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBuZy1pZj1cXFwiISRjdHJsLmVkaXRNb2RlXFxcIj57eyRjdHJsLmNvbnRhY3QuYWRkcmVzc319PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmctaWY9XFxcIiRjdHJsLmVkaXRNb2RlXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuY29udGFjdC5hZGRyZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3ZpZXdDb250cm9sbGVyXCI7XHJcblxyXG5jbGFzcyBDb250YWN0Vmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihDb250YWN0U2VydmljZSwgJHN0YXRlKSB7XHJcbiAgICAgICAgc3VwZXIoQ29udGFjdFNlcnZpY2UsICRzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5zZWxlY3RlZEl0ZW0gPT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKFwidXNlcnNcIiwgdGhpcy5jb250YWN0SWQpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWRJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9IHRoaXMuaXNOZXcgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbEZpZWxkRXJyb3JzID0gW1xyXG4gICAgICAgICAgICB7dHlwZTogXCJyZXF1aXJlZFwiLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGZvciB0aGlzIGZpZWxkXCJ9LFxyXG4gICAgICAgICAgICB7dHlwZTogXCJlbWFpbFwiLCB0ZXh0OiBcIkVudGVyIGEgdmFsaWQgZS1tYWlsXCJ9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lRmllbGRFcnJvcnMgPSBbXHJcbiAgICAgICAgICAgIHt0eXBlOiBcInJlcXVpcmVkXCIsIHRleHQ6IFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZm9yIHRoaXMgZmllbGRcIn0sXHJcbiAgICAgICAgICAgIHt0eXBlOiBcIm1pbmxlbmd0aFwiLCB0ZXh0OiBcIlRoaXMgZmllbGQgY2FuIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nXCJ9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29udGFjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250YWN0KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc05ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0SWQgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmFkZCh0aGlzLmNvbnRhY3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZ28oXCJjb250YWN0Vmlld1wiLCB7Y29udGFjdElkOiB0aGlzLmNvbnRhY3QuaWR9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmNvbnRhY3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9MaXN0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5nbyhcImNvbnRhY3RzXCIsIHtyZWxvYWQ6ICdjb250YWN0cyd9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFZpZXdDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RWaWV3Q29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY2hhbmdlRGF0ZUZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xyXG5cclxuICAgICAgICAgICAgLy9tb2RlbCAtPiB2aWV3XHJcbiAgICAgICAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdmlldyAtPiBtb2RlbFxyXG4gICAgICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24gKHZpZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdWYWx1ZSA/IHZpZXdWYWx1ZS5nZXRUaW1lKCkgOiB2aWV3VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VEYXRlRm9ybWF0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NoYW5nZURhdGVGb3JtYXREaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGNvbnRhY3QtcGFnZT48L2NvbnRhY3QtcGFnZT5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250YWN0cy92aWV3cy9jb250YWN0cy1zdGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Y29udGFjdC12aWV3IGNvbnRhY3QtaWQ9JyRjdHJsLmNvbnRhY3RJZCc+PC9jb250YWN0LXZpZXc+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdHMvdmlld3MvY29udGFjdC12aWV3LXN0YXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb250YWN0Vmlld1N0YXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgIHRoaXMuY29udGFjdElkID0gJHN0YXRlUGFyYW1zLmNvbnRhY3RJZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhY3RzL2NvbnRhY3RWaWV3U3RhdGVDb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2Jhc2VTZXJ2aWNlXCJcclxuXHJcbmNsYXNzIENvbnRhY3RTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIFV0aWxzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCRodHRwLCBVdGlsc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGFOYW1lID0gXCJ1c2Vyc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbShmb2xkZXJOYW1lLCBjb250YWN0SWQpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0U2VsZWN0ZWRJdGVtKGZvbGRlck5hbWUsIGNvbnRhY3RJZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pZCA9IGNvbnRhY3RJZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDb250YWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZEl0ZW0oY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udGFjdHMvY29udGFjdFNlcnZpY2UuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBtYWluUGFnZVRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL21haW4tcGFnZS5odG1sXCI7XHJcblxyXG5jb25zdCBtYWluUGFnZSA9IHtcclxuICAgIHRlbXBsYXRlOiBtYWluUGFnZVRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGFnZUxpc3QgPSBbe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJNYWlsc1wiLFxyXG4gICAgICAgICAgICBzdGF0ZTogXCJtYWlsXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbnRhY3RzXCIsXHJcbiAgICAgICAgICAgIHN0YXRlOiBcImNvbnRhY3RzXCJcclxuICAgICAgICB9XTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5QYWdlO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbi9tYWluUGFnZUNvbXBvbmVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGgxPk1haWxBcHA8L2gxPlxcclxcbiAgICAgICAgPHRvcC1uYXYgbmF2LWxpc3Q9XFxcIiRjdHJsLnBhZ2VMaXN0XFxcIj48L3RvcC1uYXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvaGVhZGVyPlxcclxcbjxtYWluPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPHVpLXZpZXc+PC91aS12aWV3PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L21haW4+XFxyXFxuPGZvb3Rlcj48L2Zvb3Rlcj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWluL3ZpZXdzL21haW4tcGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHRvcE5hdlRlbXBsYXRlIGZyb20gXCIuL3ZpZXdzL3RvcC1uYXYuaHRtbFwiO1xyXG5cclxuY29uc3QgdG9wTmF2ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYXZMaXN0OiBcIjxcIlxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiB0b3BOYXZUZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIChDb250YWN0U2VydmljZSxNYWlsU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIENvbnRhY3RTZXJ2aWNlLnNlbGVjdGVkQ29udGFjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIE1haWxTZXJ2aWNlLnNlbGVjdGVkTWFpbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9wTmF2O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbWFpbi90b3BOYXZDb21wb25lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwidG9wX25hdlxcXCI+XFxyXFxuICA8dWw+XFxyXFxuICAgIDwhLS08dG9wLW5hdi1pdGVtIG5hdi1pdGVtPVxcXCJuYXZJdGVtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cXFwibmF2SXRlbSBpbiAkY3RybC5uYXZMaXN0XFxcIj48L3RvcC1uYXYtaXRlbT4tLT5cXHJcXG4gICAgPGxpIG5nLXJlcGVhdD1cXFwibmF2SXRlbSBpbiAkY3RybC5uYXZMaXN0XFxcIj5cXHJcXG4gICAgICA8YSB1aS1zcmVmPVxcXCJ7e25hdkl0ZW0uc3RhdGV9fVxcXCJcXHJcXG4gICAgICAgICB1aS1zcmVmLWFjdGl2ZT1cXFwiYWN0aXZlXFxcIlxcclxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5yZXNldCgpXFxcIj5cXHJcXG4gICAgICAgIHt7bmF2SXRlbS50aXRsZX19PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgPC91bD5cXHJcXG48L25hdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWluL3ZpZXdzL3RvcC1uYXYuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBQ0E7QUF0QkE7QUFQQTtBQUNBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQUNBO0FBVUE7Ozs7OztBQ2ZBOzs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFGQTs7QUFNQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7QUFHQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFBQTtBQUxBO0FBT0E7Ozs7QUFqREE7OztBQXFEQTs7Ozs7O0FDdkRBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFDQTtBQVFBO0FBVkE7QUFDQTtBQVlBOzs7Ozs7QUNmQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFOQTtBQUZBO0FBQ0E7QUFXQTs7Ozs7O0FDaEJBOzs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFGQTtBQUNBO0FBUUE7Ozs7OztBQ2JBOzs7Ozs7QUNBQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7QUNiQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFGQTtBQUNBO0FBRkE7O0FBTUE7OztBQUNBO0FBRUE7QUFEQTs7OztBQUtBO0FBQ0E7Ozs7QUFXQTtBQUNBOzs7O0FBVEE7QUFDQTs7QUFHQTtBQUNBOzs7O0FBdEJBOzs7QUE4QkE7Ozs7OztBQ2xDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFGQTs7QUFPQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBTEE7QUFPQTtBQVBBOzs7O0FBN0JBOzs7QUF5Q0E7Ozs7OztBQzNDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7QUNiQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFOQTtBQUNBO0FBRkE7O0FBeUJBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUF2QkE7QUFDQTs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQXRCQTs7O0FBd0NBOzs7Ozs7QUM1Q0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBT0E7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7O0FBTUE7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBTkE7QUFRQTtBQVJBOzs7O0FBZkE7OztBQTRCQTs7Ozs7O0FDOUJBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7Ozs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFJQTs7Ozs7O0FDTkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQ05BO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7QUNOQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7QUFIQTtBQUNBO0FBRkE7O0FBT0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQWxDQTs7O0FBdUNBOzs7Ozs7QUMzQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBZEE7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeENBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFRQTs7Ozs7O0FDYkE7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQ1ZBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7O0FBYUE7OztBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBbkJBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQVZBOzs7QUE0QkE7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7QUNiQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBakJBO0FBQ0E7QUFGQTs7QUFvQ0E7QUFDQTs7OztBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFOQTs7OztBQVlBO0FBQ0E7Ozs7QUE5QkE7QUFDQTs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQWpDQTs7O0FBMERBOzs7Ozs7QUM5REE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFKQTtBQVNBO0FBREE7QUFSQTtBQUhBO0FBREE7QUFDQTtBQWtCQTs7Ozs7O0FDckJBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBOztBQUhBO0FBQ0E7QUFGQTs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7OztBQXJCQTs7O0FBeUJBOzs7Ozs7QUM3QkE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBREE7QUFGQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFMQTtBQUNBO0FBWUE7Ozs7OztBQ2pCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==