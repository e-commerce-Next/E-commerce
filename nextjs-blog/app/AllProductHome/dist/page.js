"use client";
"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ci_1 = require("react-icons/ci");
var fi_1 = require("react-icons/fi");
var navigation_1 = require("next/navigation");
function AllProduct() {
    var router = navigation_1.useRouter();
    var navigate = function (path) {
        router.push(path);
    };
    var like = function (day) {
        fetch("http://localhost:8080/favorit/like", { method: 'POST', headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(day)
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            console.log(result, "added");
        })["catch"](function (err) {
            console.log(err);
        });
    };
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        fetch('http://localhost:8080/product/getall')
            .then(function (res) { return res.json(); })
            .then(function (data) { return setData(data); });
    }, []);
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
            return (React.createElement("div", { className: "text-red-500 text-base font-bold font-['Poppins'] leading-normal " },
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
    return (React.createElement("div", { style: { display: "flex", marginTop: "5%", justifyContent: "center" } },
        React.createElement("div", { className: " flex-col justify-center items-center gap-[60px] inline-flex" },
            React.createElement("div", { className: "justify-start items-end gap-[611px] inline-flex" },
                React.createElement("div", { className: "flex-col justify-start items-start gap-5 inline-flex" },
                    React.createElement("div", { className: "justify-start items-center gap-4 inline-flex" },
                        React.createElement("div", { className: "w-5 h-10 flex-col justify-center items-center inline-flex" },
                            React.createElement("div", { className: "w-5 h-10 bg-red-500 rounded" })),
                        React.createElement("div", { className: "text-red-500 text-base font-semibold font-['Poppins'] leading-tight" }, "Our Products")),
                    React.createElement("div", { className: "text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider" }, "Explore Our Products")),
                React.createElement("button", { onClick: function () { navigate('/AllProduct'); } },
                    React.createElement("div", { className: "px-10 py-3 bg-red-500 rounded justify-center items-center gap-2.5 flex" },
                        React.createElement("div", { className: "text-neutral-50 text-base font-medium font-['Poppins'] leading-normal" }, "View All")))),
            React.createElement("div", { style: { width: "80%", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" } }, data.map(function (e, i) { return (React.createElement("div", { key: i, className: "flex-col justify-start items-start gap-4 inline-flex relative" },
                React.createElement("div", { className: "w-[270px] h-[250px] bg-neutral-100 rounded relative" },
                    helperTagPromotion(e),
                    React.createElement("div", { className: "absolute left-0 bottom-0 w-full h-[41px] bg-black rounded-bl rounded-br z-10 flex justify-center items-center" },
                        React.createElement("div", { className: "text-white font-medium font-['Poppins'] leading-normal" }, "Add To Cart")),
                    React.createElement("div", { className: "absolute top-2 right-2 flex flex-col gap-2 z-10" },
                        React.createElement("button", null,
                            React.createElement(fi_1.FiHeart, { className: "text-black w-6 h-6" })),
                        React.createElement("button", { onClick: function () { return navigate("/Product/" + e.idproducts); } },
                            React.createElement(fa_1.FaEye, { className: "text-black w-6 h-6" }))),
                    React.createElement("img", { className: "w-full h-full object-cover rounded-t-lg", src: e.images[0] && e.images[0].image, alt: e.productName })),
                React.createElement("div", { className: "flex-col justify-start items-start gap-2 w-[270px]" },
                    React.createElement("div", { className: "text-black text-base font-bold font-['Poppins'] leading-normal" },
                        " ",
                        e.productName),
                    React.createElement("div", { className: "justify-start items-start gap-3 inline-flex" }, helperPricePromotion(e)),
                    React.createElement("div", { className: "justify-start items-start flex gap-1" },
                        React.createElement(ci_1.CiStar, null),
                        React.createElement(ci_1.CiStar, null),
                        React.createElement(ci_1.CiStar, null),
                        React.createElement(ci_1.CiStar, null),
                        React.createElement("div", { className: "opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]" },
                            "(",
                            e.reviews.length,
                            ")"))))); })))));
}
exports["default"] = AllProduct;
