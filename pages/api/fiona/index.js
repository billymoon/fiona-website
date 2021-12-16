const Fiona = require("fiona")

const handler = (req, res) => {
    if (!req.method === 'POST') {
        res.status(400).send({ error: "must post model schema as json" })
    } else {
        try {
            res.send(Fiona(req.query.seedFormat === "number" ? parseInt(req.query.seed, 10) : req.query.seed).json(Fiona.Import(JSON.parse(req.body))))
        } catch (err) {
            res.status(400).send({ error: "must post model schema as valid json" })
        }
    }
}

export default handler