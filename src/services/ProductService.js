const mongoose = require("mongoose");
// import models
const CategoryModel = require("../models/CategoryModel");
const BrandModel = require("../models/BrandModel");
const ProductModel = require("../models/ProductModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductDetailModel = require("../models/ProductDetailModel");
const FeaturesModel = require("../models/FeaturesModel");

const ObjectId = mongoose.Types.ObjectId;

const AllCategories = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const AllBrands = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const AllSliders = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const AllFeatures = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYRemark = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYCategory = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYBrand = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYCategoryLimit10 = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYSlider = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const ProductBYKeyword = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const DetailsBYID = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};
const XXXX = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

module.exports = {
  AllSliders,
  AllFeatures,
  DetailsBYID,
  AllCategories,
  AllBrands,
  ProductBYRemark,
  ProductBYCategory,
  ProductBYBrand,
  ProductBYCategoryLimit10,
  ProductBYSlider,
  ProductBYKeyword,
};
