"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var Instagram_1 = require("@mui/icons-material/Instagram");
var Twitter_1 = require("@mui/icons-material/Twitter");
var Facebook_1 = require("@mui/icons-material/Facebook");
var LinkedIn_1 = require("@mui/icons-material/LinkedIn");
var Send_1 = require("@mui/icons-material/Send");
var Copyright_1 = require("@mui/icons-material/Copyright");
var Divider_1 = require("@mui/material/Divider");
var navigation_1 = require("next/navigation");
var navigation_2 = require("next/navigation");
var Footer = function () {
    var router = navigation_2.useRouter();
    var navigate = function (path) {
        router.push(path);
    };
    return (react_1["default"].createElement("div", { style: { marginTop: "40px",
            paddingTop: '50px',
            paddingLeft: "150px",
            marginLeft: "-10px",
            bottom: "0",
            width: '100%',
            height: '300px',
            textAlign: 'center',
            backgroundColor: '#000',
            color: '#fff',
            left: '0'
        } },
        react_1["default"].createElement(material_1.Box, null,
            react_1["default"].createElement("div", { className: 'FoutrePosition' },
                react_1["default"].createElement(material_2.Stack, { spacing: 15, direction: 'row' },
                    react_1["default"].createElement(material_2.Stack, { spacing: 2, direction: 'column' },
                        react_1["default"].createElement(material_1.Typography, { variant: 'h6', color: '#f0f0f0' }, "Exclusive"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Subscribe"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Get 10% off your first order"),
                        react_1["default"].createElement("div", { style: { borderStyle: 'inset', borderColor: '#979797' } },
                            react_1["default"].createElement(material_2.Button, { variant: "contained", sx: { backgroundColor: 'transparent', borderStyle: 'double' }, endIcon: react_1["default"].createElement(Send_1["default"], null) }, " Enter your email"))),
                    react_1["default"].createElement(material_2.Stack, { spacing: 2, direction: 'column' },
                        react_1["default"].createElement(material_1.Typography, { variant: 'h6', color: '#f0f0f0' }, "Support"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "  DH 1515, technoPole ."),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "exclusive@gmail.com"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "+88015-88888-9999")),
                    react_1["default"].createElement(material_2.Stack, { spacing: 2, direction: 'column' },
                        react_1["default"].createElement(material_1.Typography, { variant: 'h6', color: '#f0f0f0' }, "Account"),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigate("/myaccount"); }, sx: { paddingTop: "1px" } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "My Account")),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigate("/login"); }, sx: { paddingTop: "1px" } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Login / Register")),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigate("/cart"); }, sx: { paddingTop: "1px" } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Cart")),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigate("/wishlist"); }, sx: { paddingTop: "1px" } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Wishlist")),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigate("/shop"); }, sx: { paddingTop: "1px" } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Shop"))),
                    react_1["default"].createElement(material_2.Stack, { spacing: 2, direction: 'column' },
                        react_1["default"].createElement(material_1.Typography, { variant: 'h6', color: '#f0f0f0' }, "Quick Link"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Privacy Policy"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Terms Of Use"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "FAQ"),
                        react_1["default"].createElement(material_2.Button, { onClick: function () { navigation_1.redirect("/contact"); } },
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Contact"))),
                    react_1["default"].createElement(material_2.Stack, { spacing: 0, direction: 'column' },
                        react_1["default"].createElement(material_1.Typography, { variant: 'h6', color: '#f0f0f0' }, "Download App"),
                        react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#c2c2c2' }, "Save $3 with App New User Only"),
                        react_1["default"].createElement(material_2.Stack, { spacing: 2, direction: 'row', style: { paddingBottom: '10px' } },
                            react_1["default"].createElement("div", { className: "imageWrapper" },
                                react_1["default"].createElement("img", { style: { height: '95px', width: '90px', paddingTop: '43px' }, src: "https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gat~3vRFc2DbWM11m1hqiss3GhJVQXL8lVxr76vuYVRbGEuLVuKlRPn4rmbdM-mO1kERnKsqtA~Q58WCyAvdxkqBvLSxGxQxS18aSuTHfXHZn7bCwBTrtgDkm-tbDu2t8xXI6FZeEL9Ur8Vv-j8HJvOvunYdm3Umy2PCCxOB~CiR4AY6OXGiPA8gAdJL54SVvPo0EhRadPxfDVQQeg5ZbMUmxjnTgp~IIRIDepxndrbhbexdtKwXdv-ZJVsClWR1YNuYlegRiPNpU86cozkptvQLYkrhLWlWx5oh-EfbFPPTzjutr0EOAG-THsWAXAl8HO70ZDdT6VSzkQql~omovg__", alt: "No content" })),
                            react_1["default"].createElement(material_2.Stack, { spacing: -8, direction: 'column' },
                                react_1["default"].createElement("div", { className: "imageWrapper" },
                                    react_1["default"].createElement("img", { style: { height: '120px', width: '120px' }, src: "https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkV6WyEXnv0PCUAIN91Py1RUCKWZ-rYqXJlMmXJdNeFEgw0t8g9grKDlVfBgbmb-adyUp6W1MlwOP-nXFM6eL7k760kNkKkwVS0juUgkhkz1mbFUxuwwGvqnSIUILstHsZUEuzjCxg4z5Mazh~e8KsLzrKAZxyLedsjyPVHsxtsJivWQIqQNJQwD5-OKwQMlstRlHSpEPj~RRYO~TacSaY2BAg~Xz2-OiYVfrISEnwQkgHlEDsMCxMVOQNcvqDlDmAdPAo9TBrMdGzbXgD~ZFk55VfRdENPbWOVC88Wtva6uV95NNhTyGBI4FhBnDxy9BZJcYz2Og1hWnPIv-uJtiA__", alt: "no content" })),
                                react_1["default"].createElement("div", { className: "imageWrapper" },
                                    react_1["default"].createElement("img", { style: { height: '119px', width: '112px', paddingLeft: '5px' }, src: "https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCPclh93C-GyQ8a7wpiSxLwKm7jkZCXecAd6L2E1LZDMelVlwZNNYjPdMPndHg5rLZQijMeYuD~Vuhd9N9ZtvUq~Miuby8IhACXM70ZOcrdKHIZwilcTFlhhP2lyC8dyqFe-~cX2r0Ko4FEwuBhQ1UqCNoVDyNV4F~x0M5Yzv9zPFsRx8jhRPSbtbMiORA~7l92qTZhqhmZka~dHdXVv7j9nhIwyqIfX3upCHoMz8oqb4uE1g3D1kUWV8iFIgwwgjNFe87ikm~Bny89-2fn78Cx0CQ-JWiCq9a~mdHWEtz9RynerxzAAILC1l7~TeGrCxYL5-jdKNTOEzkN4-cwZrw__", alt: "no content" })))),
                        react_1["default"].createElement(material_2.Stack, { spacing: 3, direction: 'row', style: { paddingBottom: '30px', marginLeft: "30px", marginTop: "-10px" } },
                            react_1["default"].createElement("div", { className: "iconWrapper" },
                                react_1["default"].createElement(Facebook_1["default"], null)),
                            react_1["default"].createElement("div", { className: "iconWrapper" },
                                react_1["default"].createElement(Instagram_1["default"], null)),
                            react_1["default"].createElement("div", { className: "iconWrapper" },
                                react_1["default"].createElement(Twitter_1["default"], null)),
                            react_1["default"].createElement("div", { className: "iconWrapper" },
                                react_1["default"].createElement(LinkedIn_1["default"], null))))),
                react_1["default"].createElement("div", { style: { paddingTop: '-1045px', paddingLeft: '520px', marginTop: "-30px", marginLeft: "-90px" } },
                    react_1["default"].createElement(material_2.Stack, { spacing: 1, direction: 'row', alignItems: "center" },
                        react_1["default"].createElement(material_2.Stack, { spacing: 1, direction: 'row', sx: { paddingLeft: '10px', color: '#606060' } },
                            react_1["default"].createElement(Copyright_1["default"], null),
                            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle2', color: '#606060' }, " Copyright 2024. All right reserved(RBK)")))))),
        react_1["default"].createElement(Divider_1["default"], null)));
};
exports["default"] = Footer;
