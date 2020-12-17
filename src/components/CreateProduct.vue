<template>
    <div id="CreateProduct">
        <div class="formulario">
        <h2 class="titulo">Crear producto </h2>
        <form v-on:submit.prevent="guardarProducto" class="diseñoFormulario">
            <ul class="ulEstilo">
                <li class="liEstilo"><input type="text" v-model="product.codigo" placeholder="Codigo Producto"></li>
                <li class="liEstilo"><input type="text" v-model="product.nombre" placeholder="Nombre Producto"></li>
                <li class="liEstilo"><input type="text" v-model="product.cantidad_disponible" placeholder="Cantidad disponible"></li>
                <li class="liEstilo"><input type="text" v-model="product.costo_adquisicion" placeholder="Costo de adquisicion"></li>
                <li class="liEstilo"><input type="text" v-model="product.precio_venta" placeholder="Precio venta"></li>               
                <button type="submit" class="boton">CREAR PRODUCTO</button>
            </ul>
            
            
        </form>
        </div>
        
        <div>
            <div class="contededorImg"> <img src="../assets/logo.png"></div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"CreateProduct",
    data: function(){
        return{
            product:{
                codigo: "",
                nombre: "",
                cantidad_disponible:"",
                costo_adquisicion:"",
                precio_venta:"",
            }
        }
    },

    methods:{
        guardarProducto: function(){
            let self = this
            
            axios.post("https://mygic-api.herokuapp.com/product/", self.product, {headers: {}})
                .then((result)=>{
                    alert("Producto Agregado")
                })
                .catch((error)=>{
                    alert("ERROR: " + error.response.status)
                })
        }
    }
}
</script>

<style>
#CreateProduct{
    display: flex;
    align-items: center;
}
.formulario{
    
    border-radius:15px;
    border:solid 1px rgb(0, 0, 0);    
    width: 90%;
    margin-left: 60px;
    margin-top: 20px;
    background: #ffff80;
    margin: 10px;
    


}
.titulo{
    justify-content: center;
    margin-left: 10%;
}
.diseñoFormulario{
    align-items: center;
    justify-content: center;
    margin: 10px;
    

}
.ulstilo{
    list-style: none;
    align-items: center;
    justify-content: center;
}
.liEstilo{
    list-style: none;
    margin: 0.5%;
    padding: 2pt;
    margin-right: 10%;
    
}
.contededorImg {
    width: 80%;
    background-color: rgb(255, 255, 255);
    margin: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #000000;
} 
.boton{
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    padding: 10px;
    text-decoration: none;
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    text-shadow: 1px 1px 3px #666666;
    border: solid #2a5c28 2px;
    background: #2a5c28;
}

</style>