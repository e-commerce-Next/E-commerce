"use strict";
exports.__esModule = true;
var page_1 = require("./Navbar/page");
var page_2 = require("./footer/page");
var page_3 = require("./homePage/page");
var FlashSales_1 = require("./FlashSales/FlashSales");
var page_4 = require("./Video/page");
function Home() {
    return (React.createElement("div", null,
        React.createElement(page_1["default"], null),
        React.createElement(page_3["default"], null),
        React.createElement(FlashSales_1["default"], null),
        React.createElement(page_4["default"], null),
        React.createElement(page_2["default"], null)));
}
exports["default"] = Home;
