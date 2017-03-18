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
        <table class="table table-bordered table-stripped" width="100%">
          <thead>
          <tr>
            <th width="60">No</th>
            <th>Name</th>
            <th width="70">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, idx) in items">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <a @click="editThis(item)"><i class="fa fa-pencil fa-2x"></i></a>
              <a @click="deleteThis(item)"><i class="fa fa-trash fa-2x"></i></a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import './menu.js'

  export default {
    name: 'country-page',
    data: function () {
      return {
        items: [],
        loading: false
      }
    },
    mounted () {
      this.getList()
      console.log()
    },
    methods: {
      getList: function () {
        this.loading = true
        this.$http.get(process.env.API_URL + '/countries').then(response => {
          this.items = response.body.data
          this.loading = false
        }, response => {
          // error callback
        })
      },
      editThis: function (item) {
        this.$router.push('/country/form?id=' + item._id)
      },
      deleteThis: function (item) {
        this.loading = true
        this.$http.delete(process.env.API_URL + '/api/countries/' + item._id).then(response => {
          this.getList()
        }, response => {
          // error callback
        })
      }
    }
  }

</script>

<style scoped>

</style>
