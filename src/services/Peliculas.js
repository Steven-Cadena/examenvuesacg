import Global from "../components/Global";
import axios from "axios";

export default class ServiciosPeliculas{

    getGeneros(){
        return new Promise(function(resolve){
            var request = "api/generos";
            var url = Global.urlapipeliculas + request;
            axios.get(url).then(res => {
                resolve(res.data);
            })
        });
    }

    getNacionalidades(){
        return new Promise(function(resolve){
            var request = "api/nacionalidades";
            var url = Global.urlapipeliculas + request;
            axios.get(url).then(res => {
                resolve(res.data);
            })
        });
    }

    // getPeliculasNacionalidad(id){
    //     return new Promise(function(resolve){
    //         var request = "api/nacionalidades/" + id;
    //         var url = Global.urlapipeliculas + request;
    //         axios.get(url).then(res => {
    //             resolve(res.data);
    //         })
    //     });
    // }

    // getPeliculasGenero(id){
    //     return new Promise(function(resolve){
    //         var request = "api/generos/" + id;
    //         var url = Global.urlapipeliculas + request;
    //         axios.get(url).then(res => {
    //             resolve(res.data);
    //         })
    //     });
    // }
}