import { createTRPCRouter } from "~/server/api/trpc";
import { exerciseRouter } from "./routers/excercise";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  exercise: exerciseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
