const {
  ProductByRemark,
  ProductByCategory,
  DetailsByID,
  ProductByBrand,
  ProductByCategoryLimit10,
  ProductBySlider,
  ProductByKeyword,
  AllBrands,
  AllSliders,
} = require("../services/ProductService");

exports.ProductBrandList = async (req, res) => {
  let result = await AllBrands();
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ProductByCategory(req);
  return res.status(200).json(result);
};

exports.ProductListBySmilier = async (req, res) => {};

exports.ProductListByBrand = async (req, res) => {
  let result = await ProductByBrand(req);
  return res.status(200).json(result);
};
exports.ProductListByRemark = async (req, res) => {
  let result = await ProductByRemark(req);
  return res.status(200).json(result);
};
exports.ProductSliderList = async (req, res) => {
  let result = await AllSliders(req);
  return res.status(200).json(result);
};
exports.ProductListByKeyword = async (req, res) => {
  let result = await this.ProductListByKeyword(req);
  return res.status(200).json(result);
};
exports.ProductDetails = async (req, res) => {};
exports.ProductReviewList = async (req, res) => {};
