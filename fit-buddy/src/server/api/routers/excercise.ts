import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const exerciseRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.exercises.findMany();
  }),
});
