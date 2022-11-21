<template>
  <h1>{{ store?.title }}</h1>
</template>

<script>
export default {
  name: 'UserStoreHomePage',
  async asyncData({ app, req, error }) {
    if (process.server) {
      const subdomain = req.headers.host.split('.')[0].trim()
      const { data: stores } = await app.$axios('data.json')
      const mathStore = stores.find((s) => s.store === subdomain)
      if (mathStore) {
        return { store: mathStore }
      }
      error({
        statusCode: 404,
        message: 'This page could not be found',
      })
    }
  },
  data() {
    return {
      store: null,
    }
  },
}
</script>
