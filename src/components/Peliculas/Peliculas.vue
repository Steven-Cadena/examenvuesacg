<template>
    <div>
        <h1>Peliculas Padre</h1>
        <!-- <div v-for="(pelicula,index) in peliculas" :key="index">
            <Pelicula/>
        </div>  -->
    </div>
</template>
<script>
//import Pelicula from './Pelicula.vue';
//import ServiciosPeliculas from './../../services/Peliculas';
//const service = new ServiciosPeliculas();
export default {
    name:"Peliculas",
    // components: {
    //     //Pelicula
    // },
    // methods: {
    //     cargarPeliculaGenero(){
    //         service.getPeliculasGenero(this.idGenero).then(res =>{
    //             this.peliculas = [];
    //             this.peliculas = res;
    //         });
    //     },
    //     cargarPeliculaNacionalidad(){
    //         service.getPeliculasNacionalidad(this.idNacionalidad).then(res =>{
    //             this.peliculas = [];
    //             this.peliculas = res;
    //         });
    //     }

    // },
    // mounted(){
    //     this.idGenero = this.$route.params.idGenero;
    //     this.idNacionalidad = this.$route.params.idNacionalidad;
    //     if(this.idGenero!=null){
    //         this.cargarPeliculaGenero(this.idGenero);
    //     }
    //     if(this.idNacionalidad!=null){
    //         this.cargarPeliculaNacionalidad(this.idNacionalidad);
    //     }
    // },
    // data(){
    //     return{
    //         peliculas: [],
    //         idGenero: 0,
    //         idNacionalidad: 0,
    //     }
    // }
}
</script>