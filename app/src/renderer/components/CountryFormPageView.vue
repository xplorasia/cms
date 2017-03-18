<template>
  <div class="row">
    <div class="col-md-12">

      <div id="loader" v-if="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="loading"></div>
      </div>

      <div v-if="! loading">
        <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>

        <button class="btn btn-primary" @click="saveForm">Submit</button>
      </div>

    </div>
  </div>
</template>

<script>
// import VueFormGenerator from 'vue-form-generator'

  export default {
    name: 'country-page',
    data: function () {
      return {

        model: {

        },

        schema: {

        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true
        },

        mode: this.$route.query.id ? 'update' : 'create',
        id: this.$route.query.id,
        loading: false
      }
    },
    mounted () {
      this.getForm()
      if (this.$route.query.id) {
        let id = this.$route.query.id
        this.$http.get(process.env.API_URL + '/countries/' + id).then(response => {
          this.model = response.body
        }, response => {
          // error callback
        })
      }
    },
    methods: {
      getForm: function () {
        this.loading = true
        this.$http.get(process.env.API_URL + '/forms/countries').then(response => {
          this.model = response.body.model
          this.schema = response.body.schema
          this.loading = false
        }, response => {
          // error callback
        })
      },
      saveForm: function () {
        this.loading = true
        if (this.mode === 'update') {
          this.$http.put(process.env.API_URL + '/countries/' + this.id, this.model).then(response => {
            this.$router.push('/country')
          }, response => {
            // error callback
          })
        } else {
          this.$http.post(process.env.API_URL + '/countries', this.model).then(response => {
            if (response.status === 201) {
              this.$router.push('/country')
            }
          }, response => {
            // error callback
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
