const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const ProductController = require("../controllers/ProductController");
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const WishListController = require("../controllers/WishListController");
const CartController = require("../controllers/CartController"); 
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

// Cart
router.post('/SaveCartList',AuthVerification,CartController.SaveCartList)
router.post('/UpdateCartList/:cartID',AuthVerification,CartController.UpdateCartList)
router.post('/RemoveCartList',AuthVerification,CartController.RemoveCartList)
router.get('/CartList',AuthVerification,CartController.CartList)

//Wish List
router.get('/WishList',AuthVerification,WishListController.WishList)
router.post('/SaveWishList',AuthVerification,WishListController.AddWishItem)
router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishItem)

// Invoice
router.get('/CreateInvoice',AuthVerification,InvoiceController.CreateInvoice)
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceController.InvoiceProductList)

// Payment
router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)



module.exports = router;