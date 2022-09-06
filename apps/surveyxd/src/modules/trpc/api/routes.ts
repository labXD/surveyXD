import {userRoutes} from '@/user/api'
import { createRouter } from './utils';
import {surveyRoutes} from '@/survey/api'

export const appRouter = createRouter().merge(
  'user.', userRoutes, 
).merge('survey.', surveyRoutes)

export type AppRouter = typeof appRouter;


