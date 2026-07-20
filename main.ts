import express from "express";
import {faker } from "@faker-js/faker";
import type { User } from './types/type';
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







app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});
