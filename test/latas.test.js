const axios = require('axios')

test('Testando busca', async () => {
    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})

test('Testando busca por id', async () => {
    const response = await axios.get('http://localhost:3001/latas/1123')

    expect(response.status).toBe(204)
})

test('Testando criar uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande")
    expect(response.data.volume).toBe(150)
})

// Questão 3
test('Atualizando uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande 2",
        volume: 150
    }

    const response = await axios.put('http://localhost:3001/latas/1', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande 2")
    expect(response.data.volume).toBe(150)
})

// Questão 2
test('Testando excluir uma lata', async () => {
    const response = await axios.delete('http://localhost:3001/latas/1')

    expect(response.status).toBe(200)
})

// Questão 5
test('Testando criar uma lata com erro', async () => {
    const lata = {
        descricao: "Lata muito grande"
    }

    try{
        const response = await axios.post('http://localhost:3001/latas', lata)
    }catch(err){
        expect(err.message).toBe('Request failed with status code 400')
    }
})