export const Footer = () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../../components/navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const Post = () => import('../../components/post.vue' /* webpackChunkName: "components/post" */).then(c => wrapFunctional(c.default || c))
export const Sidebar = () => import('../../components/sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
