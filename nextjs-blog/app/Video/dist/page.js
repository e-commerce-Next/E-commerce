"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var url_gen_1 = require("@cloudinary/url-gen");
var Box_1 = require("@mui/material/Box");
var Container_1 = require("@mui/material/Container");
var CategoriesJBL = function () {
    var cld = new url_gen_1.Cloudinary({ cloud: { cloudName: 'dwcxnfihp' } });
    var cloudinaryref = react_1.useRef();
    return (React.createElement(Container_1["default"], { sx: {
            backgroundColor: "white",
            marginTop: "100px",
            width: "300%",
            height: "450px",
            zIndex: -1,
            display: "flex",
            justifyContent: "center"
        } },
        React.createElement(Box_1["default"], { width: "100%", display: "flex", flexDirection: "column", marginTop: "50px", gap: "20px", paddingLeft: "30px" },
            React.createElement("div", { style: { marginLeft: "-120px", marginTop: "-30px", marginBottom: "20px" } },
                React.createElement("video", { muted: true, loop: true, autoPlay: true, style: { maxHeight: "200%", height: "510px", width: "1170px", marginLeft: "90px", borderRadius: "10px" }, src: "https://res.cloudinary.com/dwcxnfihp/video/upload/v1708529887/final4_-_Made_with_Clipchamp_iunvzp.mp4" })),
            React.createElement(Box_1["default"], { display: "inline-flex", gap: "20px" })),
        React.createElement(Box_1["default"], { zIndex: 1 })));
};
exports["default"] = CategoriesJBL;
