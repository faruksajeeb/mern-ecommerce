const { CreateWish, RemoveWish, WishList } = require("../services/WishListService");


exports.AddWishItem = async (req, res) => {
    let result = await CreateWish(req)
    return res.status(200).json(result)
}

exports.RemoveWishItem = async (req, res) => {
    let result = await RemoveWish(req)
    return res.status(200).json(result)
}

exports.WishList = async (req, res) => {
    let result = await WishList(req)
    return res.status(200).json(result)
}