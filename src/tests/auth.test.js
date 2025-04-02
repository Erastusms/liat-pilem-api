const request = require("supertest");
const app = require("../../server"); // Import express app
const db = require("../config/db"); // Import database connection
const UserModel = require("../models/UserModel");

describe("Auth API", () => {
    let token, refreshToken;

    beforeAll(async () => {
        await db.query("DELETE FROM users"); // Clear user data sebelum test
    });

    afterAll(async () => {
        await db.end(); // Tutup koneksi database setelah test selesai
    });

    /** ✅ TEST: Register User **/
    test("POST /api/v1/auth/register - should register a new user", async () => {
        const res = await request(app).post("/api/v1/auth/register").send({
            username: "testuser",
            email: "testuser@example.com",
            password: "password123",
        });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("message", "User Registered Succesfully");
    });

    /** ❌ TEST: Register User (Email sudah digunakan) **/
    test("POST /api/v1/auth/register - should fail if email already exists", async () => {
        const res = await request(app).post("/api/v1/auth/register").send({
            username: "testuser2",
            email: "testuser@example.com",
            password: "password123",
        });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("message", "Email already registered");
    });

    /** ✅ TEST: Login User **/
    test("POST /api/v1/auth/login - should login user and return token", async () => {
        const res = await request(app).post("/api/v1/auth/login").send({
            email: "testuser@example.com",
            password: "password123",
        });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Login successful");
        expect(res.body.data).toHaveProperty("token");
        expect(res.body.data).toHaveProperty("refreshToken");
        token = res.body.data.token; // Simpan token untuk test berikutnya
        refreshToken = res.body.data.refreshToken; // Simpan token untuk test berikutnya
    });

    /** ❌ TEST: Login User (Password salah) **/
    test("POST /api/v1/auth/login - should fail if password is incorrect", async () => {
        const res = await request(app).post("/api/v1/auth/login").send({
            email: "testuser@example.com",
            password: "wrongpassword",
        });

        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty("message", "Invalid Password");
    });

    /** ✅ TEST: Logout User **/
    test("POST /api/v1/auth/logout - should logout user", async () => {
        const res = await request(app)
            .post("/api/v1/auth/logout").send({ refreshToken })
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Logout successful");
    });

    /** ❌ TEST: Logout tanpa token **/
    test("POST /api/v1/auth/logout - should fail if no refreshToken", async () => {
        const res = await request(app).post("/api/v1/auth/logout");

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("message", "Refresh token is required");
    });
});
