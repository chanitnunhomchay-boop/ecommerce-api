const request = require("supertest")
const app = require("../src/app")

describe("API Test",()=>{

test("GET products",async ()=>{
    const res = await request(app).get("/api/v1/products")
    expect(res.statusCode).toBe(200)
})

})
