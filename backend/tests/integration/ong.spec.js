const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to creat a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            nome: "ONG",
            email: "contato@email.com",
            whatsapp: "00000000000",
            cidade: "Teste",
            uf: "TT"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})