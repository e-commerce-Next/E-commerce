"use client";
"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var page_1 = require("../Navbar/page");
var page_2 = require("../footer/page");
var md_1 = require("react-icons/md");
var ri_1 = require("react-icons/ri");
var navigation_1 = require("next/navigation");
function AllProduct() {
    var router = navigation_1.useRouter();
    var navigate = function (path) {
        router.push(path);
    };
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    console.log('product', data);
    var _b = react_1.useState(1), currentPage = _b[0], setCurrentPage = _b[1];
    var productsPerPage = 4;
    react_1.useEffect(function () {
        fetch('http://localhost:8080/product/getall')
            .then(function (res) { return res.json(); })
            .then(function (data) { return setData(data); });
    }, []);
    var addtoCart = function (obj) {
        fetch("http://localhost:8080/cart/add", { method: 'POST', headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            console.log(result, "added");
        })["catch"](function (err) {
            console.log(err);
        });
    };
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    var indexOfLastProduct = currentPage * productsPerPage;
    var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    var currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    var helperPricePromotion = function (product) {
        if (product.promotion !== 0) {
            return (React.createElement("div", { className: "justify-start items-start gap-3 inline-flex" },
                React.createElement("div", { className: "text-red-500 text-base font-bold font-['Poppins'] leading-normal " },
                    product.price - (product.price * product.promotion / 100),
                    "$"),
                React.createElement("div", { className: "opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal" },
                    product.price,
                    "$")));
        }
        else {
            return (React.createElement("div", { className: "opacity-50 text-black text-base font-bold font-['Poppins'] " },
                product.price,
                "$"));
        }
    };
    var helperTagPromotion = function (product) {
        if (product.promotion !== 0) {
            return (React.createElement("div", { className: "px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" },
                React.createElement("div", { className: "text-neutral-50 text-xs font-bold font-['Poppins'] leading-[18px]" },
                    "-",
                    product.promotion,
                    "%")));
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(page_1["default"], null)),
        React.createElement("div", { className: "text-center p-10" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("div", { className: "flex flex-col items-center mr-8" },
                    React.createElement(md_1.MdSportsBaseball, { className: "text-gray-500 w-28 h-8" })),
                React.createElement("div", { className: "flex flex-col items-center mr-8" },
                    React.createElement(md_1.MdHome, { className: "text-gray-500 w-28 h-8" })),
                React.createElement("div", { className: "flex flex-col items-center mr-8" },
                    React.createElement(ri_1.RiComputerLine, { className: "text-gray-500 w-28 h-8" })),
                React.createElement("div", { className: "flex flex-col items-center mr-8" },
                    React.createElement(ri_1.RiBook3Line, { className: "text-gray-500 w-28 h-8" })),
                React.createElement("div", { className: "flex flex-col items-center mr-8" },
                    React.createElement(ri_1.RiBriefcaseLine, { className: "text-gray-500 w-28 h-8" })),
                React.createElement("div", { className: "flex flex-col items-center" },
                    React.createElement(ri_1.RiCameraLine, { className: "text-gray-500 w-28 h-8" })))),
        React.createElement("section", { id: "Projects", className: "w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" }, currentProducts.map(function (product, index) { return (React.createElement("div", { className: "group my-10 max-w-md flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md", style: { width: "300px", height: "400px" } },
            React.createElement("a", { className: "relative flex h-60 overflow-hidden" },
                React.createElement("img", { className: "absolute top-0 right-0 h-full w-full object-cover", src: product.images[0] && product.images[0].image, alt: "product image", onClick: function () { navigate("/Product/" + product.idproducts); } }),
                helperTagPromotion(product),
                React.createElement("div", { className: "absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0" },
                    React.createElement("button", { className: "flex h-10 w-10 items-center justify-center bg-black-900 text-white transition hover:bg-red-500" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor" },
                            React.createElement("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }))))),
            React.createElement("div", { className: "mt-4 px-5 pb-5" },
                React.createElement("a", { href: "#" },
                    React.createElement("h5", { className: "text-xl tracking-tight text-slate-900" },
                        product.productName,
                        " -",
                        product.color,
                        " ")),
                React.createElement("div", { className: "mt-2 mb-5 flex items-center justify-between" },
                    React.createElement("p", null, helperPricePromotion(product))),
                React.createElement("button", { className: "flex items-center justify-center bg-red-500 px-2 py-1 text-sm text-white transition hover:bg-red-500" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2 h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor" },
                        React.createElement("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })),
                    "Add to cart")))); })),
        React.createElement("div", { className: "mt-4 flex justify-center" }, Array.from({ length: Math.ceil(data.length / productsPerPage) }, function (_, i) { return (React.createElement("button", { key: i, onClick: function () { return paginate(i + 1); }, className: "mx-1 px-3 py-1 rounded " + (currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200') }, i + 1)); })),
        React.createElement(page_2["default"], null)));
}
exports["default"] = AllProduct;
