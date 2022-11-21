export default class Helper {
  constructor(context) {
    this.$domain = context.env.MAIN_DOMAIN
  }

  subdomain(name) {
    return `http://${name}.${this.$domain}`
  }
}
