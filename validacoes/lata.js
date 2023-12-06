const validar = (dados) => {
    if(!dados.descricao || dados.descricao.length == 0){
        throw new Error("O campo descricao deve estar preenchido.")
    }

    if(!dados.volume || dados.volume.length == 0){
        throw new Error("O campo volume deve estar preenchido.")
    }
}

module.exports = validar