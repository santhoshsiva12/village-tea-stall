"use client"
import { createSlice } from "@reduxjs/toolkit";

const initiallState = { 
    products: [
        {
            id: 1,
            name: "Tea",
            price: 10,
            image: "@/app/public/productImages/Tea.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 2,
            name: "Coffee",
            price: 15,
            image: "@/app/public/productImages/Coffee.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 3,
            name: "Milk",
            price: 10,
            image: "@/app/public/productImages/Milk.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 4,
            name: "Black Tea",
            price: 10,
            image: "@/app/public/productImages/Black Tea.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 1,
        },
        {
            id: 5,
            name: "Black Coffee",
            price: 15,
            image: "@/app/public/productImages/Black Coffee.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 1,
        },
        {
            id: 6,
            name: "Lemon Tea",
            price: 15,
            image: "@/app/public/productImages/Lemon Tea.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 7,
            name: "Boost",
            price: 15,
            image: "@/app/public/productImages/Boost.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 8,
            name: "Horlicks",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Hot drings",
            discount: 0,
        },
        {
            id: 9,
            name: "Parle-G",
            price: 3,
            image: "@/app/public/productImages/Parle-G.jpg",
            outOfStack: false,
            active: true,
            category: "Biscuits",
            discount: 0,
        },
        {
            id: 10,
            name: "Good Day",
            price: 5,
            image: "@/app/public/productImages/Good Day.jpg",
            outOfStack: false,
            active: true,
            category: "Biscuits",
            discount: 0,
        },
        {
            id: 11,
            name: "Milk Bikis",
            price: 5,
            image: "@/app/public/productImages/Milk Bikis.jpg",
            outOfStack: false,
            active: true,
            category: "Biscuits",
            discount: 0,
        },
        {
            id: 12,
            name: "Marie Gold",
            price: 5,
            image: "@/app/public/productImages/Marie Gold.jpg",
            outOfStack: false,
            active: true,
            category: "Biscuits",
            discount: 0,
        },
        {
            id: 13,
            name: "Big Varukey",
            price: 5,
            image: "@/app/public/productImages/Marie Gold.jpg",
            outOfStack: false,
            active: true,
            category: "Cookies",
            discount: 0,
        },
        {
            id: 14,
            name: "Small Varukey",
            price: 2,
            image: "@/app/public/productImages/Marie Gold.jpg",
            outOfStack: false,
            active: true,
            category: "Cookies",
            discount: 0,
        },
        {
            id: 15,
            name: "Coconut Cookie",
            price: 5,
            image: "@/app/public/productImages/Marie Gold.jpg",
            outOfStack: false,
            active: true,
            category: "Cookies",
            discount: 0,
        },
        {
            id: 16,
            name: "Murukku",
            price: 5,
            image: "@/app/public/productImages/Marie Gold.jpg",
            outOfStack: false,
            active: true,
            category: "Other Snacks",
            discount: 0,
        },{
            id: 17,
            name: "Mor",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Cool drings",
            discount: 0,
        },
        {
            id: 18,
            name: "7 -Up",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Cool drings",
            discount: 0,
        },
        {
            id: 19,
            name: "Gold Flake",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Cigarette Filters",
            discount: 0,
        },
        {
            id: 20,
            name: "North Filter",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Cigarette Filters",
            discount: 0,
        },
        {
            id: 21,
            name: "Lights",
            price: 15,
            image: "@/app/public/productImages/Horlicks.jpg",
            outOfStack: false,
            active: true,
            category: "Cigarette Filters",
            discount: 0,
        },
    ],
};

export const productDataSlice = createSlice({
    name: "productData",
    initialState: initiallState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    },
})

export const { setProducts } = productDataSlice.actions;
export default productDataSlice.reducer