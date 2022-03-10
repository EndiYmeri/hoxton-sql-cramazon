import { Prisma, PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient({log:["query", "error", "warn", "info"]})

const users: Prisma.UserCreateInput[] = [
    {
        name: "Endi",
        email: "endi@email.com"
    },
    {
        name: "Guy",
        email: "guy@email.com"
    },
    {
        name: "Free Guy",
        email: "freeguy@email.com"
    },
]

const items: Prisma.ItemCreateInput[] = [
    {
        title: "Laptop",
        image: "laptop.jpg",
        price: 600
    },
    {
        title: "Book",
        image: "book.jpg",
        price: 10
    },
    {
        title: "Hoodie",
        image: "hoodie.png",
        price: 50
    },
    {
        title: "Phone",
        image: "phone.jpg",
        price: 900
    },
    {
        title: "Watah",
        image: "watah.jpg",
        price: 0.5
    },
]


const orders : Prisma.OrderCreateInput[] = [
    {
        user : {connect: {email: "endi@email.com"}},
        item : {connect: {title: "Laptop"} },
        quantity: 1
    },
    {
        user : {connect: {email: "endi@email.com"}},
        item : {connect: {title: "Phone"} },
        quantity: 1
    },
    {
        user : {connect: {email: "endi@email.com"}},
        item : {connect: {title: "Hoodie"} },
        quantity: 2
    },
    {
        user : {connect: {email: "endi@email.com"}},
        item : {connect: {title: "Book"} },
        quantity: 5
    },
    {
        user : {connect: {email: "endi@email.com"}},
        item : {connect: {title: "Watah"} },
        quantity: 100
    },
    {
        user : {connect: {email: "guy@email.com"}},
        item : {connect: {title: "Hoodie"} },
        quantity: 50
    },
    {
        user : {connect: {email: "freeguy@email.com"}},
        item : {connect: {title: "Phone"} },
        quantity: 10 
    },
]

async function createStuff() {
    for(const user of users ){
        await prisma.user.create({data: user})
    }
    for(const item of items ){
        await prisma.item.create({data: item})
    }
    for(const order of orders ){
        await prisma.order.create({data: order})
    }
}

createStuff()