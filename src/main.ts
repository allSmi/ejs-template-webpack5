import 'tailwindcss/tailwind.css'

import { init as initMonitor } from './monitor'

initMonitor()

import(/* webpackChunkName: "ajs" */ './dImport/a')
