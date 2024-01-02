const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const ProductController = require("../controllers/ProductController");
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const WishListController = require("../controllers/WishListController");
const AuthVerification = require("../middlewares/AuthVerification");

//Api Routing end point

// User Auth
router.get('/UserLogin/:email',UserController.UserLogin)
router.get('/UserVerify/:email/:otp',UserController.UserVerify);
router.get('/UserLogout',AuthVerification,UserController.UserLogout)

// Profile
router.post('/CreateProfile',AuthVerification,ProfileController.StoreUserProfile);
router.post('/UpdateProfile',AuthVerification,ProfileController.UpdateUserProfile)
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile)

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
router.get('/ProductDetails/:productID',ProductController.ProductDetails)
router.get('/ProductReviewList/:productID',ProductController.ProductReviewList)

router.get('/WishList',AuthVerification,WishListController.WishList)
router.post('/CreateWishList',AuthVerification,WishListController.AddWishItem)
router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishItem)





module.exports = router;