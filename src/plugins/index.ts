/**
 * Vue Plugin Registrations
 *
 */

import type { App } from 'vue'
import router from '@/router'
import pinia from '@/plugins/pinia.ts'
import elementPlus from '@/plugins/element-plus'

export function registerPlugins(app: App) {
  app.use(router).use(pinia).use(elementPlus)
}
