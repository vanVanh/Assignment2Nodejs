const model = require('../../models/sanpham.model')

exports.listProduct = async (req, res, next) => {
    try {
        let list = await model.product.find();
        if (list) {
            return res.status(200).json({data: list, msg: 'lấy dữ liệu thành công'});
        }else{
            return res.status(204).json({msg: 'không có dữ liệu'});
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

exports.listCategory = async (req, res, next) => {
    try {
        let list = await model.category.find();
        if (list) {
            return res.status(200).json({data: list, msg: 'lấy dữ liệu thành công'});
        }else{
            return res.status(204).json({msg: 'không có dữ liệu'});
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}