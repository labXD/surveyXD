import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@/trpc/shared/types';

export const trpc = createReactQueryHooks<AppRouter>();
