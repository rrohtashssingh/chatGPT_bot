//this function is to connect the database to the application;
import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new error("Cannot connect to Mongodb");
    }
}
//this function is to disconnect the database to the application;
async function disconnectToDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new error("Could not disconnect to Mongodb");
    }
}
export { connectToDatabase, disconnectToDatabase };
//# sourceMappingURL=connection.js.map