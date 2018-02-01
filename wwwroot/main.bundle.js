webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/KeyedCollection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyedCollection; });
var KeyedCollection = /** @class */ (function () {
    function KeyedCollection() {
        this.items = {};
        this.count = 0;
    }
    KeyedCollection.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    KeyedCollection.prototype.Count = function () {
        return this.count;
    };
    KeyedCollection.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    KeyedCollection.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    KeyedCollection.prototype.Item = function (key) {
        return this.items[key];
    };
    KeyedCollection.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    KeyedCollection.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return KeyedCollection;
}());

/*

var ages = new Dictionary<Number>();
ages.Add('Dustin', 36);
ages.Add('Amy', 25);
ages.Add('Angie', 35);
ages.Add('Josh', 4);

var hasJosh = ages.ContainsKey('Josh'); //will return true
var hasBen = ages.ContainsKey('Ben'); //will return false
var amyAge = ages.Item('Amy'); //will return 25
var keys = ages.Keys(); //will return ['Dustin', 'Amy', 'Angie', 'Josh'];
var vals = ages.Values(); //will return [36, 25, 35, 4];
var count = ages.Count(); //will return 4;

ages.Remove('Josh'); //removes Josh
count = ages.Count(); //will return 3;

*/


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__totals_totals_component__ = __webpack_require__("./src/app/totals/totals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cells_cells_component__ = __webpack_require__("./src/app/cells/cells.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_2__project_project_component__["a" /* ProjectComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_2__project_project_component__["a" /* ProjectComponent */] },
    { path: 'totals/:id', component: __WEBPACK_IMPORTED_MODULE_4__totals_totals_component__["a" /* TotalsComponent */] },
    { path: 'cells/:id', component: __WEBPACK_IMPORTED_MODULE_5__cells_cells_component__["a" /* CellsComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color:green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n\r\n</div>\r\n<nav>\r\n  <a routerLink=\"/list\">List</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<div class=\"\">\r\n  <!-- <app-project></app-project> -->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Keyword Orgainzer';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_web_storage__ = __webpack_require__("./node_modules/angular-web-storage/bundles/angular-web-storage.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_web_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_web_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("./src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localStorageService__ = __webpack_require__("./src/app/localStorageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__keyword_service__ = __webpack_require__("./src/app/keyword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__totals_totals_component__ = __webpack_require__("./src/app/totals/totals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cells_cells_component__ = __webpack_require__("./src/app/cells/cells.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_5__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__totals_totals_component__["a" /* TotalsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__cells_cells_component__["a" /* CellsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_web_storage__["AngularWebStorageModule"],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_8__localStorageService__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_9__keyword_service__["a" /* KeywordService */], __WEBPACK_IMPORTED_MODULE_6_angular_web_storage__["AngularWebStorageModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cells/cells.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea.cells-text {\r\n  width:90em;\r\n  margin-left:10em;\r\n  overflow-y: scroll;\r\n  overflow-x: scroll;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/cells/cells.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Enter Copied Spreadsheet Cells for Project&nbsp;&nbsp;&nbsp;Name: {{project.name}}</h3>\r\n</div>\r\n<button class=\"btn btn-default btn-xs\"   (click)=\"onProcess()\">Parse Text into Products</button>\r\n<a routerLink=\"/project/{{project.name}}\">Project</a><br/>\r\n<textarea class=\"cells-text\" [(ngModel)]=\"copiedText\" placeholder=\"cell data\" rows=\"20\"></textarea>\r\n"

/***/ }),

/***/ "./src/app/cells/cells.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("./src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyword_service__ = __webpack_require__("./src/app/keyword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__excelGridParser__ = __webpack_require__("./src/app/excelGridParser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CellsComponent = /** @class */ (function () {
    function CellsComponent(keywordService, route, location, router) {
        this.keywordService = keywordService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    CellsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        this.project.name = id;
        // tslint:disable-next-line:curly
        if (!id)
            return;
        this.onLoadProject();
    };
    CellsComponent.prototype.onLoadProject = function () {
        // get with keywordService
        this.project = this.keywordService.getProject(this.project.name);
        if (!this.project) {
            this.project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        }
    };
    CellsComponent.prototype.onProcess = function () {
        console.log(this.copiedText);
        this.project.products = __WEBPACK_IMPORTED_MODULE_5__excelGridParser__["a" /* ExcelGridParser */].toProducts(this.copiedText);
        this.project.process();
        this.keywordService.saveProject(this.project);
        this.router.navigateByUrl('/totals/' + this.project.name);
    };
    CellsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cells',
            template: __webpack_require__("./src/app/cells/cells.component.html"),
            styles: [__webpack_require__("./src/app/cells/cells.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__keyword_service__["a" /* KeywordService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CellsComponent);
    return CellsComponent;
}());



/***/ }),

/***/ "./src/app/excelGridParser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelGridParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("./src/app/product.ts");

var ExcelGridParser = /** @class */ (function () {
    function ExcelGridParser() {
        this.products = new Array();
    }
    ExcelGridParser.toProducts = function (data) {
        var products = new Array();
        console.log(data);
        var rows = data.split('\n');
        var isFirstRow = true;
        // tslint:disable-next-line:forin
        for (var row in rows) {
            var cells = rows[row].split('\t');
            for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                if (isFirstRow) {
                    var prod = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
                    prod.asin = cells[cellIndex];
                    prod.keywordListText = null;
                    products.push(prod);
                }
                else {
                    var prodToUpdate = products[cellIndex];
                    prodToUpdate.keywordListText += '\n' + cells[cellIndex];
                }
            }
            isFirstRow = false;
        }
        products.forEach(function (value) {
            value.setKeywordListFromText();
        });
        return products;
    };
    return ExcelGridParser;
}());



/***/ }),

/***/ "./src/app/keyword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorageService__ = __webpack_require__("./src/app/localStorageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keywordContext__ = __webpack_require__("./src/app/keywordContext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serialization_keywordContextData__ = __webpack_require__("./src/app/serialization/keywordContextData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeywordService = /** @class */ (function () {
    function KeywordService(storage) {
        this.storage = storage;
    }
    KeywordService.prototype.getProject = function (projectName) {
        var projectNameKey = projectName.toLowerCase();
        if (!this.appContext().projectList.ContainsKey(projectNameKey)) {
            return null;
        }
        var project = this.appContext().projectList.Item(projectNameKey);
        return project;
    };
    KeywordService.prototype.getAllProjects = function () {
        var projectList = new Array();
        this.appContext()
            .projectList.Values()
            .forEach(function (project) {
            projectList.push(project);
        });
        return projectList;
    };
    KeywordService.prototype.saveProject = function (project) {
        var projectNameKey = project.name.toLowerCase();
        if (project.isDeleted) {
            this.appContext().projectList.Remove(projectNameKey);
        }
        else {
            var activeProducts = new Array();
            for (var _i = 0, _a = project.products; _i < _a.length; _i++) {
                var prod = _a[_i];
                // tslint:disable-next-line:curly
                if (!prod.asin || prod.isDeleted)
                    continue;
                activeProducts.push(prod);
            }
            project.products = activeProducts;
            this.appContext().projectList.Add(projectNameKey, project);
        }
        this.appContext().appStorageDate = Date.now();
        // serialize and save
        var contextData = __WEBPACK_IMPORTED_MODULE_3__serialization_keywordContextData__["a" /* KeywordContextData */].toData(this.appContext());
        this.storage.write(__WEBPACK_IMPORTED_MODULE_2__keywordContext__["a" /* KeywordContext */].appStorageKey, JSON.stringify(contextData));
    };
    KeywordService.prototype.appContext = function () {
        if (!this._context) {
            // load from storage
            var existingAppContextData = this.storage.readObject(__WEBPACK_IMPORTED_MODULE_2__keywordContext__["a" /* KeywordContext */].appStorageKey);
            if (!existingAppContextData) {
                this._context = new __WEBPACK_IMPORTED_MODULE_2__keywordContext__["a" /* KeywordContext */]();
                return this._context;
            }
            this._context = __WEBPACK_IMPORTED_MODULE_3__serialization_keywordContextData__["a" /* KeywordContextData */].fromData(existingAppContextData);
        }
        return this._context;
    };
    KeywordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__localStorageService__["a" /* LocalStorageService */]])
    ], KeywordService);
    return KeywordService;
}());



/***/ }),

/***/ "./src/app/keywordContext.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyedCollection__ = __webpack_require__("./src/app/KeyedCollection.ts");

var KeywordContext = /** @class */ (function () {
    function KeywordContext() {
        this.projectList = new __WEBPACK_IMPORTED_MODULE_0__KeyedCollection__["a" /* KeyedCollection */]();
    }
    KeywordContext.appStorageKey = 'keywords';
    return KeywordContext;
}());



/***/ }),

/***/ "./src/app/keywordMeta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordMeta; });
var KeywordMeta = /** @class */ (function () {
    function KeywordMeta() {
        this.phrase = null,
            this.count = 0;
        this.percent = 0;
    }
    return KeywordMeta;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.grid {\r\n  margin-left:5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Projects</h3>\r\n<div class=\"grid grid-pad\">\r\n    <a routerLink=\"/project/\">Add New</a>\r\n  <a *ngFor=\"let project of projectList\" class=\"\"\r\n      routerLink=\"/project/{{project.name}}\">\r\n    <div class=\"\">\r\n      <h4>{{project.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyword_service__ = __webpack_require__("./src/app/keyword.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(keywordService) {
        this.keywordService = keywordService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ListComponent.prototype.getProjects = function () {
        var allProjects = this.keywordService.getAllProjects();
        var activeProjects = new Array();
        allProjects.forEach(function (value) {
            // tslint:disable-next-line:curly
            if (!value.isDeleted) {
                activeProjects.push(value);
            }
        });
        // this.projectList = allProjects;
        this.projectList = activeProjects;
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keyword_service__["a" /* KeywordService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/localStorageService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    // TODO: Need to handle QUOTA_EXCEEDED_ERR
    // public static $inject = [
    //     '$log'
    // ];
    function LocalStorageService() {
    }
    LocalStorageService.prototype.read = function (path) {
        // if not in local storage, the string "undefined" is returned (why???)
        var text = localStorage.getItem(path);
        if (text === null || typeof text === 'undefined' || text === 'undefined') {
            // this.$log.debug("LocalStorageService::read(" + path + ") - path not found, returned null");
            return null;
        }
        else {
            // this.$log.debug("LocalStorageService::read(" + path + ")");
            return text;
        }
    };
    LocalStorageService.prototype.readObject = function (path) {
        var text = this.read(path);
        var data;
        try {
            data = JSON.parse(text);
        }
        catch (error) {
            // tslint:disable-next-line:max-line-length
            // this.$log.error('LocalStorageService::readObject: can\'t convert string from local storage to object using JSON.parse(). Error: ' + error);
            data = null;
        }
        return data;
    };
    LocalStorageService.prototype.write = function (path, text) {
        // this.$log.debug("LocalStorageService::write(" + path + ")");
        localStorage.setItem(path, text);
    };
    LocalStorageService.prototype.writeObject = function (path, data) {
        var text = JSON.stringify(data);
        this.write(path, text);
    };
    LocalStorageService.prototype.remove = function (path) {
        // this.$log.debug("LocalStorageService::remove(" + path + ")");
        localStorage.removeItem(path);
    };
    LocalStorageService.prototype.clear = function () {
        // this.$log.debug("LocalStorageService::clear - all items removed from local storage");
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyedCollection__ = __webpack_require__("./src/app/KeyedCollection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);


var Product = /** @class */ (function () {
    function Product() {
        this.asin = null,
            this.keywordListText = null;
        this.keywordList = new Array();
        this.keywordTotalsList = new __WEBPACK_IMPORTED_MODULE_0__KeyedCollection__["a" /* KeyedCollection */]();
        this.isDeleted = false;
    }
    Product.prototype.setKeywordListFromText = function () {
        this.keywordList = this.keywordListText.split('\n');
        this.keywordList = __WEBPACK_IMPORTED_MODULE_1_underscore__["uniq"](this.keywordList);
        var cleanedKeywordList = new Array();
        this.keywordList.forEach(function (keyword) {
            // tslint:disable-next-line:curly
            if (keyword && keyword.length > 0 && keyword !== 'null') {
                cleanedKeywordList.push(keyword);
            }
        });
        this.keywordList = cleanedKeywordList;
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.keyword-list-table{\r\n  width:15em;\r\n  padding:0px;\r\n  margin-top:.5em;\r\n}\r\n\r\ntable.keyword-list-table, th, td {\r\n  padding-left: .25em;\r\n  border: 1px solid lightgrey;\r\n}\r\n\r\ntable.keyword-list-table tr {\r\n  line-height: 25px;\r\n}\r\n\r\ntable.keyword-list-table tr {\r\n\r\n}\r\n\r\ndiv.product {\r\n  display:inline;\r\n  float:left;\r\n  margin:.2em;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product\" *ngIf=\"!product.isDeleted\">\r\n    <button class=\"btn btn-default btn-xs\" *ngIf=\"!isConfirmRemovePending\"   (click)=\"onDelete()\">Remove Product</button>\r\n    <span *ngIf=\"isConfirmRemovePending\" class=\"deleteConfirmPending\">\r\n        <button class=\"btn btn-default btn-xs\"  (click)=\"onDeleteCancel()\">Cancel Remove Product</button>\r\n        <button class=\"btn btn-danger btn-xs\"  (click)=\"onDeleteConfirm()\">Confirm Remove Product</button>\r\n\r\n    </span>\r\n  <h5>ASIN:\r\n    <input type=\"text\" *ngIf=\"asinEditMode == MODE_EDIT\" [(ngModel)]=\"product.asin\">\r\n    <span *ngIf=\"asinEditMode == MODE_VIEW\">{{product.asin}}</span>\r\n    <button class=\"btn btn-warning btn-xs\" *ngIf=\"asinEditMode == MODE_EDIT\" (click)=\"onSaveAsin()\">Save ASIN</button>\r\n    <button class=\"btn btn-info btn-xs\" *ngIf=\"asinEditMode == MODE_VIEW\" (click)=\"onEnterAsinEditMode()\">Edit</button>\r\n  </h5>\r\n  <div>\r\n    <span>keywords: </span>\r\n    <br>\r\n    <button class=\"btn btn-warning btn-xs\" *ngIf=\"listEditMode == MODE_EDIT\" (click)=\"onSaveList()\">Save List</button>\r\n    <button class=\"btn btn-info btn-xs\" *ngIf=\"listEditMode == MODE_VIEW\" (click)=\"onEnterListEditMode()\">Edit List</button>\r\n    <textarea *ngIf=\"listEditMode == MODE_EDIT\" [(ngModel)]=\"product.keywordListText\" placeholder=\"name\" rows=\"100\"></textarea>\r\n    <div *ngIf=\"listEditMode == MODE_VIEW\">\r\n\r\n      <table class=\"keyword-list-table\" >\r\n          <tr>\r\n              <th>Keyword</th>\r\n\r\n          </tr>\r\n          <tbody >\r\n        <tr *ngFor='let keyword of product.keywordList'>\r\n          <td>{{keyword}}</td>\r\n        </tr>\r\n      </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- <button  (click)=\"onRemove()\">Remove</button> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("./src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("./src/app/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.MODE_EDIT = 'edit';
        this.MODE_VIEW = 'view';
        this.listEditMode = this.MODE_EDIT;
        this.asinEditMode = this.MODE_EDIT;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.setModes();
        this.isConfirmRemovePending = false;
    };
    ProductComponent.prototype.onSaveList = function () {
        // tslint:disable-next-line:curly
        if (!this.product.keywordListText)
            return;
        this.product.setKeywordListFromText();
        this.listEditMode = this.MODE_VIEW;
        this.onSaveAsin(); // close editing on asin as well
    };
    ProductComponent.prototype.onEnterListEditMode = function () {
        this.listEditMode = this.MODE_EDIT;
    };
    ProductComponent.prototype.onSaveAsin = function () {
        this.asinEditMode = this.MODE_VIEW;
    };
    ProductComponent.prototype.onEnterAsinEditMode = function () {
        this.asinEditMode = this.MODE_EDIT;
    };
    ProductComponent.prototype.onDelete = function () {
        if (this.product.asin) {
            this.isConfirmRemovePending = true;
            return;
        }
        this.product.isDeleted = true;
        this.isConfirmRemovePending = false;
    };
    ProductComponent.prototype.onDeleteConfirm = function () {
        this.product.isDeleted = true;
        this.isConfirmRemovePending = false;
    };
    ProductComponent.prototype.onDeleteCancel = function () {
        this.isConfirmRemovePending = false;
    };
    ProductComponent.prototype.isNew = function () {
        return !this.product.asin;
    };
    ProductComponent.prototype.setModes = function () {
        this.listEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
        this.asinEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */])
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */])
    ], ProductComponent.prototype, "parentProject", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("./src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keywordMeta__ = __webpack_require__("./src/app/keywordMeta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);



var Project = /** @class */ (function () {
    function Project() {
        (this.name = null),
            (this.asin = null),
            (this.products = new Array());
        this.isDeleted = false;
        this.totals = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
    }
    Project.prototype.process = function () {
        // create an aggregate product
        var aggregateProduct = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
        var productCount = this.products.length;
        // for each product
        this.products.forEach(function (product) {
            //   for each keyword
            product.keywordList.forEach(function (keyword) {
                //      if exsists in keywordTotal list, then add to keyword's count, else add keyword and set count to 1
                // tslint:disable-next-line:curly
                if (!keyword)
                    return;
                var keywordTreated = keyword.toLowerCase();
                if (aggregateProduct.keywordTotalsList.ContainsKey(keywordTreated)) {
                    var keywordTotal = aggregateProduct.keywordTotalsList.Item(keywordTreated);
                    keywordTotal.count++;
                    aggregateProduct.keywordTotalsList[keywordTreated] = keywordTotal;
                }
                else {
                    var keywordTotalToAdd = new __WEBPACK_IMPORTED_MODULE_1__keywordMeta__["a" /* KeywordMeta */]();
                    keywordTotalToAdd.phrase = keywordTreated;
                    keywordTotalToAdd.count = 1;
                    keywordTotalToAdd.percent = 0.0;
                    aggregateProduct.keywordTotalsList.Add(keywordTreated, keywordTotalToAdd);
                }
            });
        });
        // Once all products keywords counted, determine percent of products that have each keyword, and note in keyword
        // update each product count and percentage
        aggregateProduct.keywordTotalsList.Values().forEach(function (meta) {
            var pct = (meta.count / productCount) * 100;
            var percent = Math.ceil(pct);
            var keywordTotal = aggregateProduct.keywordTotalsList.Item(meta.phrase);
            keywordTotal.percent = pct;
            aggregateProduct.keywordTotalsList.Add(meta.phrase, keywordTotal);
        });
        this.totals = aggregateProduct;
    };
    Project.prototype.totalsList = function () {
        var totalsList = this.totals.keywordTotalsList.Values();
        totalsList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](totalsList, 'percent').reverse();
        return totalsList;
    };
    return Project;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.product-container {\r\n  /* overflow-x: scroll;\r\noverflow-y: hidden;\r\nheight: 90em;\r\n    white-space:nowrap */\r\n}\r\n\r\n.error-messages {\r\n  color:red;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"error-messages\">{{errorMessage}}</div>\r\n  <h3>Project&nbsp;&nbsp;&nbsp;Name:\r\n    <input type=\"text\" [(ngModel)]=\"project.name\">\r\n    <button class=\"btn btn-default btn-xs\" (click)=\"onDelete()\">Remove Project</button>\r\n    <span *ngIf=\"isConfirmRemovePending\" class=\"deleteConfirmPending\">\r\n      <button class=\"btn btn-default btn-xs\" (click)=\"onDeleteCancel()\">Cancel Remove Project</button>\r\n      <button class=\"btn btn-danger btn-xs\" (click)=\"onDeleteConfirm()\">Confirm Remove Project</button>\r\n\r\n    </span>\r\n    <br/>Target ASIN:\r\n    <input type=\"text\" [(ngModel)]=\"project.asin\">\r\n  </h3>\r\n  <a routerLink=\"/totals/{{project.name}}\">Totals</a>\r\n  <a routerLink=\"/cells/{{project.name}}\"\r\n    *ngIf=\"!isNew\">Create Products from Copied Spreadsheet Cells</a>\r\n</div>\r\n<button (click)=\"onSaveProject()\">Save Project</button>\r\n<div class=\"product-container\">\r\n  <div class=\"product\" *ngFor=\"let item of project.products\">\r\n    <app-product [product]=\"item\"></app-product>\r\n  </div>\r\n</div>\r\n<button (click)=\"onAddProduct()\">Add Product</button>\r\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__("./src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project__ = __webpack_require__("./src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyword_service__ = __webpack_require__("./src/app/keyword.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(keywordService, route, location) {
        this.keywordService = keywordService;
        this.route = route;
        this.location = location;
        this.project = new __WEBPACK_IMPORTED_MODULE_4__project__["a" /* Project */]();
        if (this.project.products.length === 0) {
            this.project.products.push(new __WEBPACK_IMPORTED_MODULE_3__product__["a" /* Product */]());
        }
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.isNew = true;
        this.errorMessage = null;
        var id = this.route.snapshot.paramMap.get('id');
        this.project.name = id;
        // tslint:disable-next-line:curly
        if (!id)
            return;
        this.isConfirmRemovePending = false;
        this.onLoadProject();
    };
    ProjectComponent.prototype.onAddProduct = function () {
        this.project.products.push(new __WEBPACK_IMPORTED_MODULE_3__product__["a" /* Product */]());
    };
    ProjectComponent.prototype.onDelete = function () {
        if (this.project.name) {
            this.isConfirmRemovePending = true;
            return;
        }
        this.delete();
    };
    ProjectComponent.prototype.onDeleteConfirm = function () {
        this.delete();
    };
    ProjectComponent.prototype.onDeleteCancel = function () {
        this.isConfirmRemovePending = false;
    };
    ProjectComponent.prototype.delete = function () {
        this.project.isDeleted = true;
        this.isConfirmRemovePending = false;
        this.onSaveProject();
        this.goBack();
    };
    ProjectComponent.prototype.onSaveProject = function () {
        this.errorMessage = null;
        // check if already there by name if saving a new project
        if (this.isNew) {
            var existingProject = this.keywordService.getProject(this.project.name);
            if (existingProject) {
                // TODO: alert error
                this.errorMessage = 'Project with that name already exists';
                return;
            }
        }
        // save with keywordService
        this.keywordService.saveProject(this.project);
        this.isNew = false;
    };
    ProjectComponent.prototype.onLoadProject = function () {
        // get with keywordService
        this.project = this.keywordService.getProject(this.project.name);
        if (!this.project) {
            this.project = new __WEBPACK_IMPORTED_MODULE_4__project__["a" /* Project */]();
            this.isNew = true;
        }
        else {
            this.isNew = false;
        }
    };
    ProjectComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__("./src/app/project/project.component.html"),
            styles: [__webpack_require__("./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__keyword_service__["a" /* KeywordService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/serialization/keywordContextData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordContextData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projectData__ = __webpack_require__("./src/app/serialization/projectData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keywordContext__ = __webpack_require__("./src/app/keywordContext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyedCollection__ = __webpack_require__("./src/app/KeyedCollection.ts");



var KeywordContextData = /** @class */ (function () {
    function KeywordContextData() {
        this.projectList = new Array();
    }
    KeywordContextData.fromData = function (data) {
        var context = new __WEBPACK_IMPORTED_MODULE_1__keywordContext__["a" /* KeywordContext */]();
        context.appStorageDate = data.appStorageDate;
        context.projectList = new __WEBPACK_IMPORTED_MODULE_2__KeyedCollection__["a" /* KeyedCollection */]();
        data.projectList.forEach(function (projectData) {
            var project = __WEBPACK_IMPORTED_MODULE_0__projectData__["a" /* ProjectData */].fromData(projectData);
            context.projectList.Add(projectData.name.toLowerCase(), project);
        });
        return context;
    };
    KeywordContextData.toData = function (context) {
        var data = new KeywordContextData();
        data.appStorageDate = context.appStorageDate;
        data.projectList = new Array();
        context.projectList.Values().forEach(function (project) {
            data.projectList.push(__WEBPACK_IMPORTED_MODULE_0__projectData__["a" /* ProjectData */].toData(project));
        });
        return data;
    };
    return KeywordContextData;
}());



/***/ }),

/***/ "./src/app/serialization/productData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("./src/app/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyedCollection__ = __webpack_require__("./src/app/KeyedCollection.ts");


var ProductData = /** @class */ (function () {
    function ProductData() {
        this.asin = null,
            this.keywordListText = null;
        this.keywordList = new Array();
        this.isDeleted = false;
    }
    ProductData.toData = function (product) {
        var data = new ProductData();
        data.asin = product.asin;
        data.isDeleted = product.isDeleted;
        data.keywordListText = product.keywordListText;
        data.keywordList = product.keywordList;
        return data;
    };
    ProductData.fromData = function (data) {
        var product = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
        product.asin = data.asin;
        product.isDeleted = data.isDeleted;
        product.keywordListText = data.keywordListText;
        product.keywordList = data.keywordList;
        product.keywordTotalsList = new __WEBPACK_IMPORTED_MODULE_1__KeyedCollection__["a" /* KeyedCollection */]();
        return product;
    };
    return ProductData;
}());



/***/ }),

/***/ "./src/app/serialization/projectData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productData__ = __webpack_require__("./src/app/serialization/productData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("./src/app/project.ts");


var ProjectData = /** @class */ (function () {
    function ProjectData() {
        this.name = null,
            this.asin = null,
            this.products = new Array();
        this.keywordTotalsList = new Array();
        this.isDeleted = false;
    }
    ProjectData.toData = function (project) {
        var data = new ProjectData();
        data.asin = project.asin;
        data.isDeleted = project.isDeleted;
        data.name = project.name;
        data.products = new Array();
        project.products.forEach(function (value) {
            // get productData from product
            data.products.push(__WEBPACK_IMPORTED_MODULE_0__productData__["a" /* ProductData */].toData(value));
        });
        data.keywordTotalsList = new Array();
        project.totals.keywordTotalsList.Values().forEach(function (value) {
            data.keywordTotalsList.push(value);
        });
        return data;
    };
    ProjectData.fromData = function (data) {
        var project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        project.asin = data.asin;
        project.isDeleted = data.isDeleted;
        project.name = data.name;
        project.products = new Array();
        data.products.forEach(function (value) {
            project.products.push(__WEBPACK_IMPORTED_MODULE_0__productData__["a" /* ProductData */].fromData(value));
        });
        data.keywordTotalsList.forEach(function (value) {
            project.totals.keywordTotalsList.Add(value.phrase, value);
        });
        return project;
    };
    return ProjectData;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_web_storage__ = __webpack_require__("./node_modules/angular-web-storage/bundles/angular-web-storage.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_web_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_web_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(local) {
        this.local = local;
    }
    StorageService.prototype.set = function (key, value) {
        this.local.set(key, value);
    };
    StorageService.prototype.remove = function (key) {
        this.local.remove(key);
    };
    StorageService.prototype.get = function (key) {
        return this.local.get(key);
    };
    StorageService.prototype.clear = function () {
        this.local.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_web_storage__["LocalStorageService"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/totals/totals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.keyword-totals-table{\r\n  /* width:15em; */\r\n  padding:0px;\r\n  margin-top:1em;\r\n  margin-left: 2em;\r\n}\r\n\r\ntable.keyword-totals-table, th, td {\r\n  padding-left: .25em;\r\n  padding-right: .25em;\r\n  border: 1px solid lightgrey;\r\n}\r\n\r\ntable.keyword-totals-table tr {\r\n  line-height: 25px;\r\n}\r\n\r\ntable.keyword-totals-table tr {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/totals/totals.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Totals for Project&nbsp;&nbsp;&nbsp;Name: {{project.name}}</h3>\r\n</div>\r\n<button class=\"btn btn-default btn-xs\"   (click)=\"project.process()\">Process</button>\r\n<a routerLink=\"/project/{{project.name}}\">Project</a>\r\n<div >\r\n  <table class=\"keyword-totals-table\" >\r\n      <tr>\r\n          <th>Keyword</th>\r\n          <th>Count</th>\r\n          <th>Percent</th>\r\n      </tr>\r\n      <tbody >\r\n          <tr *ngFor='let keywordmeta of project.totalsList()'>\r\n              <td>{{keywordmeta.phrase}}</td>\r\n              <td>{{keywordmeta.count}}</td>\r\n              <td>{{keywordmeta.percent}}</td>\r\n            </tr>\r\n      </tbody>\r\n\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/totals/totals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("./src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyword_service__ = __webpack_require__("./src/app/keyword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TotalsComponent = /** @class */ (function () {
    function TotalsComponent(keywordService, route, location) {
        this.keywordService = keywordService;
        this.route = route;
        this.location = location;
    }
    TotalsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        this.project.name = id;
        // tslint:disable-next-line:curly
        if (!id)
            return;
        this.onLoadProject();
    };
    TotalsComponent.prototype.onLoadProject = function () {
        // get with keywordService
        this.project = this.keywordService.getProject(this.project.name);
        if (!this.project) {
            this.project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        }
    };
    TotalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-totals',
            template: __webpack_require__("./src/app/totals/totals.component.html"),
            styles: [__webpack_require__("./src/app/totals/totals.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__keyword_service__["a" /* KeywordService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], TotalsComponent);
    return TotalsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map