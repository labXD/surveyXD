import {userRoutes} from '@/user/api'
import { createRouter } from './utils';

export const appRouter = createRouter().merge(
  'user.', userRoutes
)

export type AppRouter = typeof appRouter;


