import app from '../index'
import request from "supertest"

describe("suite for main endpoint", function () {
    it("Check how the server handles an unexpected error", async () => {
        let data = await request(app).get('/')
        expect(data.status).toBe(500)
    })
})