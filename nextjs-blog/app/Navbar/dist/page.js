"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
// import Link from 'next/link';
var io5_1 = require("react-icons/io5");
var fa_1 = require("react-icons/fa");
var cg_1 = require("react-icons/cg");
var Shopp_1 = require("./Shopp");
var Nav = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var _b = react_1.useState(false), isMenuOpen = _b[0], setIsMenuOpen = _b[1];
    var ShowCom = function () {
        if (show == true) {
            setShow(false);
        }
        else
            setShow(true);
    };
    var router = navigation_1.useRouter();
    var navigate = function (path) {
        router.push(path);
    };
    return (React.createElement("div", { className: 'w-full h-full' },
        React.createElement("nav", null,
            React.createElement("div", { className: 'flex items-center justify-center gap-2 h-14 bg-black text-white' },
                React.createElement("h3", { className: 'text-sm md:text-base' }, "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"),
                React.createElement("span", { className: 'text-base underline cursor-pointer ml-11' }, "Shop Now!"),
                React.createElement("select", { name: 'language', className: 'text-white bg-black', title: 'lang' },
                    React.createElement("option", null, "English"))),
            React.createElement("div", { className: ' justify-center gap-8 mt-6 mb-6 ml-20 flex items-center ' },
                React.createElement("h1", { className: 'absolute left-10 font-bold text-3xl mb-1 mr-36' }, "Exclusive \uD83D\uDED2"),
                React.createElement("div", { className: "flex gap-4 " },
                    React.createElement("p", { className: 'cursor-pointer', onClick: function () { navigate('/'); } }, "Home"),
                    React.createElement("p", { className: 'cursor-pointer', onClick: function () { navigate('/Contact'); } }, "Contact"),
                    React.createElement("p", { className: 'cursor-pointer', onClick: function () { navigate('/AboutUs'); } }, "AboutUs"),
                    React.createElement("p", { className: 'cursor-pointer', onClick: function () { navigate('/Signup'); } }, "Sign Up")),
                React.createElement("div", { className: ' test w-auto h-auto flex items-center gap-2 right-14 ml-10' },
                    React.createElement("input", { type: 'search', placeholder: 'What are you looking for?', className: 'bg-gray-200 p-2 text-xs w-56 h-9 border- ' }),
                    React.createElement(io5_1.IoSearchOutline, { size: 24, className: 'cursor-pointer' })),
                React.createElement("div", { className: "flex items-center gap-20 absolute right-14" },
                    React.createElement(fa_1.FaRegHeart, { className: 'cursor-pointer', size: 25, onClick: function () { return navigate("/Wishlist"); } }),
                    React.createElement(Shopp_1["default"], null),
                    React.createElement("div", { className: "relative" },
                        React.createElement("button", { className: "cursor-pointer focus:outline-none", onClick: function () { return setIsMenuOpen(!isMenuOpen); } }, React.createElement(cg_1.CgProfile, { size: 28 })),
                        isMenuOpen && (React.createElement("div", { className: "absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10" },
                            React.createElement("button", { onClick: function () { return navigate("/User"); }, className: "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left" }, "Profile"))))))),
        React.createElement("hr", { className: 'text-gray-300' })));
};
exports["default"] = Nav;
