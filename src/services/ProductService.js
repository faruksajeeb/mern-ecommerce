const mongoose = require("mongoose");
// import models
const CategoryModel = require("../models/CategoryModel");
const BrandModel = require("../models/BrandModel");
const ProductModel = require("../models/ProductModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductDetailModel = require("../models/ProductDetailModel");
const FeaturesModel = require("../models/FeaturesModel");
const ReviewModel = require("../models/ReviewModel");

const ObjectId = mongoose.Types.ObjectId;

const AllCategories = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

const AllBrands = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const AllSliders = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

const AllFeatures = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductByRemark = async (req) => {
  try {
    let remark = req.params.remark;
    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let matchStage = { $match: { remark: remark } };
    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let data = await ProductModel.aggregate([
      matchStage,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductByCategory = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);

    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let matchStage = { $match: { categoryID: categoryID } };
    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let data = await ProductModel.aggregate([
      matchStage,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductByBrand = async (req) => {
  try {
    let brandID = new ObjectId(req.params.brandID);
    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let matchStage = { $match: { brandID: brandID } };
    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let data = await ProductModel.aggregate([
      matchStage,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductByCategoryLimit10 = async (req) => {
  try {
    let categoryID = new ObjectId(req.params.categoryID);
    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let matchStage = { $match: { categoryID: categoryID } };
    let limit = { $limit: 10 };
    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let data = await ProductModel.aggregate([
      matchStage,
      limit,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductBySlider = async () => {
  try {
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductListByKeyword = async (req) => {
  try {
    let SearchRegex = { $regex: req.params.keyword, $options: "i" };
    let SearchParam = [{ title: SearchRegex }, { shortDes: SearchRegex }];
    let SearchQuery = { $or: SearchParam };
    let matchStage = { $match: SearchQuery };
    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let data = await ProductModel.aggregate([
      matchStage,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindBrandStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const DetailsByID = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.productID);
    //return ProductID;
    let matchStage = { $match: { _id: ProductID } };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithDetailStage = {
      $lookup: {
        from: "productdetails",
        localField: "productID",
        foreignField: "_id",
        as: "details",
      },
    };

    let projectionStage = {
      $project: {
        "category._id": 0,
        "brand._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };
    // let projectionStage= {$project: {'category._id': 0, 'brand._id': 0,'details._id':0,'details.productID':0}}
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindBrandStage = { $unwind: "$brand" };
    let unwindDetailsStage = { $unwind: "$details" };

    let data = await ProductModel.aggregate([
      matchStage,
      JoinWithCategoryStage,
      JoinWithBrandStage,
      JoinWithDetailStage,
      unwindCategoryStage,
      unwindBrandStage,
      unwindDetailsStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};
const ProductReviewList = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.productID);
    //let ProductID = req.params.productID;
    //return ProductID;
    let matchStage = { $match: { productID: ProductID } };
    let joinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    let unwindProfileStage = { $unwind: "$profile" };
    let projectionStage = {
      $project:{
        'des':1,
        'rating':1,
        'profile.cus_name':1
      }
    }
    let data = await ReviewModel.aggregate([matchStage, joinWithProfileStage, unwindProfileStage,projectionStage]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

module.exports = {
  AllSliders,
  AllFeatures,
  DetailsByID,
  AllCategories,
  AllBrands,
  ProductByRemark,
  ProductByCategory,
  ProductByBrand,
  ProductByCategoryLimit10,
  ProductBySlider,
  ProductListByKeyword,
  ProductReviewList,
};
