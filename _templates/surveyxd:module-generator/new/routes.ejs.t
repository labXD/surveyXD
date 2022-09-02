---
to: apps/surveyxd/src/modules/<%=name%>/api/routes.ts
---

import * as trpc from '@trpc/server'

import { createRouter } from '@/trpc/api'

export const <%=name%>Routes = createRouter()

