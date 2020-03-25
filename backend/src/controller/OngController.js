const cryto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = cryto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        res.json({ id })
    },
    async index(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    }
};