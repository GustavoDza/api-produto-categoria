const mongoose = require('mongoose');
const Cproject = mongoose.model('Cproject');

exports.getProduct = async () => {
    const result = await Cproject.find({}, 'categoria descricao _id ativa');
    return result;
}

exports.create = async (data) => {
    const categoria = Cproject(data);
    await categoria.save();
}

exports.put = async (id, data) => {
    await Cproject.findByIdAndUpdate(id, {
        $set:{
            categoria: data.categoria,
            descricao: data.descricao,
            ativa: data.ativa
        }
    });
}

exports.getById = async (id) => {
    const result = await Cproject.findOne({_id : id}, "categoria descricao ativa")
    return result;
}

exports.delete = async (id) => {
    await Cproject.findByIdAndDelete(id)
}