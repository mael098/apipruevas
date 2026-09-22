import express from "express";
import { faker } from "@faker-js/faker";
import type { User, Carito } from '../types/type.ts';
import generateEmployees from "./employe/route.ts";

const app = express();



app.get("/user", (req, res) => {
    const users: User[] = [];

    for (let i = 0; i < 10; i++) {
        users.push({
            id: faker.number.int(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            img: faker.image.avatar(),
            empresa: faker.company.name()
        });
    }

    res.json(users);
});



app.get("/caritos", (req, res) => {

    const caritos: Carito[] = [];

    for (let i = 0; i < 100; i++) {
        caritos.push({
            id: faker.number.int(),
            marca: faker.vehicle.manufacturer(),
            modelo: faker.vehicle.model(),
            color: faker.color.human(),
            year: faker.date.weekday(),
        })
    }
    res.json(caritos)
})


app.get("/employees", async (req, res) => {
    try {
        const employees = generateEmployees();
        console.log(employees);
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: "Error al generar empleados", details: String(error) });
    }
})


app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});
