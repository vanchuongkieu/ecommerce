import Helper from '~/common/helpers'

export default (context, inject) => {
  inject('helper', new Helper(context))
}
