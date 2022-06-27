import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/lojas', async (req, res) => {
    try {
        const users = await prisma.loja.findMany()
        res.json(users)
    } catch (error) {
        res.status(400).json('Erro ao inserir: ' + error)
    }
})


app.post(`/lojas`, async (req, res) => {
    try {
        const result = await prisma.loja.create({
            data: { ...req.body },
        })
        res.json(result)
    } catch (error) {
        res.status(400).json('Erro ao inserir: ' + error)
    }
})

app.put(`/lojas`, async (req, res) => {
    try {
        const result = await prisma.loja.update({
            where: { id: req.body.id },
            data: { ...req.body },
        })
        res.json(result)
    } catch (error) {
        res.status(400).json('Erro ao atualizar: ' + error)
    }
})

app.delete(`/lojas/:id`, async (req, res) => {
    try {
        const { id } = req.params
        const result = await prisma.loja.delete({
            where: { id: Number(id) },
        })
        res.json(result)
    } catch (error) {
        res.status(400).json('Erro ao remover: ' + error)
    }
})

app.get(`/lojas/:id`, async (req, res) => {
    try {
        const { id } = req.params
        const result = await prisma.loja.findFirst({
            where: { id: Number(id) },
        })
        res.json(result)
    } catch (error) {
        res.status(400).json('Erro ao recuperar loja: ' + error)
    }
})

app.listen(process.env.PORT || 3002,
    () => console.log(`Server is running on port 3002`)
)
