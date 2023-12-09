const {
  ProductBYRemark,
  ProductBYCategory,
  DetailsBYID,
  ProductBYBrand,
  ProductBYCategoryLimit10,
  ProductBYSlider,
  ProductBYKeyword,
  AllBrands,
  AllSliders
} = require("../services/ProductService");

exports.ProductBrandList = async (req, res) => {
  let result = await AllBrands();
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result=await  ProductBYCategory(req)
  return res.status(200).json(result)
};

exports.ProductListBySmilier = async (req, res) => {};
exports.ProductListByBrand = async (req, res) => {};
exports.ProductListByRemark = async (req, res) => {};
exports.ProductSliderList = async (req, res) => {
  let result=await  AllSliders(req)
  return res.status(200).json(result)
};
exports.ProductListByKeyword = async (req, res) => {};
exports.ProductDetails = async (req, res) => {};
exports.ProductReviewList = async (req, res) => {};
