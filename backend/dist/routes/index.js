import { Router } from "express";
import userRoute from "./user_routes.js";
import chatRouter from "./chat_routes.js";
const appRouter = Router();
appRouter.use('/user', userRoute); //domain/api/v1/user
appRouter.use('/chats', chatRouter); //domain/api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map