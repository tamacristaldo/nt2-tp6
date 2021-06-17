<template>

  <section class="usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>
      
      <button class="btn btn-warning my-3 mr-3" @click="getUsuariosFetch()">Pedir then catch</button>    
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxios()">Pedir async await</button>    

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-success table-sm">
          <thead class="thead-dark">
            <tr>
              <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post,index) in posts" :key="index">
              <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 v-else class="alert alert-danger">No se encontraron datos</h5>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        posts:[],        
        url:'https://60bbf43d3a39900017b2e190.mockapi.io/api/Users'
      }
    },
    methods: {
      /* ---- AJAX: FETCH ---- */
      async getUsuariosFetch() {
        console.log('getUsuarios')
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS GET',respuesta.data)
          this.posts = respuesta.data
        }
        catch(error) {
          console.log(error)
        }
      },

      /* ---- AJAX: AXIOS ---- */
      getUsuariosAxios(){
        this.axios(this.url)
        .then(respuesta => {
        console.log('AXIOS',respuesta.data)
        this.posts = respuesta.data
        })
        .catch(e => console.error(e))
      }
    },

    

    computed: {
      getCols(){
        return Object.keys(this.posts[0]);
      }
    }
}


</script>

<style scoped>
.jumbotron{
  background-color: rgb(250, 250, 250);
  color: white;
}
h2{
  color: black;
}
</style>
