const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");

//Api Routing end point

// Brand Category
router.get('/BrandList',BrandController.BrandList)
router.get('/CategoryList',CategoryController.CategoryList)

// Product
router.get('/ProductListByCategory/:categoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:categoryID',ProductController.ProductListBySmilier)
router.get('/ProductListByBrand/:brandID',ProductController.ProductListByBrand)
router.get('/ProductListByRemark/:remark',ProductController.ProductListByRemark)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByKeyword/:keyword',ProductController.ProductListByKeyword)
router.get('/ProductListDetails/:id',ProductController.ProductDetails)
router.get('/ProductReviewList/:id',ProductController.ProductReviewList)


module.exports = router;