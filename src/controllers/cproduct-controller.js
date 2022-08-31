const mongoose = require('mongoose');
const { response } = require('../app');
const repository = require('../repositories/cproduct-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.post =  async(req, res, next) => {
    try{
        await repository.create(req.body);
        res.status(201).send({message: "Categoria criada com sucesso!"});
    }catch(erro){
        res.status(400).send({message: "Erro ao cadastrar categoria"});
    }
    
}


exports.put = async(req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    await repository.put(id, body);
    res.status(200).send({message: "Categoria atualizada com sucesso"})
}

exports.getById = async(req, res, next) => {
    const id = req.params.id;
    const data = await repository.getById(id);

    if(data == null)
        res.status(404).send();
    res.status(200).send(data);
}

exports.delete = async(req, res, next) => {
    const id = req.params.id;

    await repository.delete(id)
    res.status(200).send({message: "Categoria removida com sucesso"});
}
