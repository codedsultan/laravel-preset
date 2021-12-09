import { createApp, h } from "vue"
import { InertiaProgress } from "@inertiajs/progress"
import { createInertiaApp } from "@inertiajs/inertia-vue3"
// import vClickOutside from './library/v-click-outside'

InertiaProgress.init({ color: "red" })

createInertiaApp({
    resolve: (name) =>
        import(`./Pages/${name}.vue`).then((module) => module.default),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el)
            // .directive('vClickOutside', vClickOutside)
    },
})
