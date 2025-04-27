import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017"

export const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error(
                "Please define the MONGODB_URI environment variable inside .env.local"
            );
        }
        if (mongoose.connection.readyState === 1) {
            return;
        }
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1)
    }
};