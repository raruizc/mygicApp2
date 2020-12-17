<template>
    <div id= "obtenerProducto">
        <h2 align="center">Consultar producto </h2>
        <div class = "contenido">
            <div class="formulario">
                <form v-on:submit.prevent="procesarConsulta" Class= "diseñoFormulario">
                    <ul>
                        <li class="liEstilo"><input type="text" v-model="codigo" placeholder="Codigo Producto"></li>
                        <button type="submit" class="boton">CONSULTAR </button>
                    </ul>
                </form>
            </div>
            <div class="informacion">
                             
                <h2>Información</h2>                
                <p v-if="hay_datos"><span>Nombre </span>{{product.nombre}}</p>
                <p v-if="hay_datos"><span>Cantidad Disponible </span>{{product.cantidad_disponible}}</p>
                <p v-if="hay_datos"><span>Costo Adquisición </span>{{product.costo_adquisicion}}</p>
                <p v-if="hay_datos"><span>Precio Venta </span>{{product.precio_venta}}</p>                  
                    
                
            </div>
            
        </div>  
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "getProduct",
    data:function(){
        return{
            codigo:"",
            hay_datos: false,
            product:{
                nombre: "",
                cantidad_disponible:"",
                costo_adquisicion:"",
                precio_venta:""
            }
        }
    },
    methods:{
        procesarConsulta:function(){
            let self = this
            axios.get("https://mygic-api.herokuapp.com/product/"+self.codigo)
                .then((result)=>{
                    self.product.nombre = result.data.nombre
                    self.product.cantidad_disponible = result.data.cantidad_disponible
                    self.product.costo_adquisicion = result.data.costo_adquisicion
                    self.product.precio_venta = result.data.precio_venta
                    self.hay_datos=true
                    alert("Nombre: "+ self.product.nombre + "\nCantidad Disponible: " + self.product.cantidad_disponible + "\nCosto Adquisición: " + self.product.costo_adquisicion + "\nPrecio Venta: " + self.product.precio_venta)
                    
                })
                .catch((error)=>{
                    self.hay_datos = false
                    alert("ERROR: " + error.response.status)
                })
        }
    }

}
</script>

<style>
.contenido{
    display: flex;
    align-items: center;
}
.liEstilo{
    list-style: none;
}
.informacion{
    border: 1px solid #000000;
    justify-content: center;
    border-radius: 5px;
}
</style>