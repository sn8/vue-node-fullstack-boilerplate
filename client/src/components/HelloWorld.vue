<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>Response from server:</p>
    <p>
      GET <a :href="apiUrl">{{ apiUrl }}</a>
    </p>
    <div
      v-if="response"
      class="server-response"
    >
      {{ response }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data: () => ({
    response: null
  }),

  computed: {
    apiUrl () {
      return `${document.location.origin}/api/`
    }
  },

  mounted () {
    this.sendRequest()
  },

  methods: {
    async sendRequest() {
      const res = await axios.get('/api')

      this.response = res.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-bottom: 50px;
}

a {
  color: #42b983;
}

.server-response {
  width: 300px;
  margin: 0 auto;
  padding: 8px 12px;
  border: 1px solid #e3e3e3;
}
</style>
