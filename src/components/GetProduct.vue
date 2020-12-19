<template>
    <div id= "obtenerProducto">
        <h2 align="center">Consultar producto </h2>
        <div class = "contenido">
            <div class="formularioGet">
                <form v-on:submit.prevent="procesarConsulta" Class= "diseñoFormulario">
                    <ul>
                        <li class="liEstilo"><input class="estiloInput" type="text" v-model="codigoProducto" placeholder="Codigo Producto"></li>
                        <button type="submit" class="boton">CONSULTAR </button>
                    </ul>
                </form>
            </div>
            <div class="informacion">
                             
                <h2>Información</h2>
                
                <p v-if="hay_datos"><span>Código: </span> <input type="text"  v-model="product.codigo" readonly> </p>                
                <p v-if="hay_datos"><span>Nombre: </span> <input type="text"  id="campo1" v-model="product.nombre"  > </p>
                <p v-if="hay_datos"><span>Cantidad Disponible: </span><input type="text"  id="campo2" v-model="product.cantidad_disponible" > </p>
                <p v-if="hay_datos"><span>Costo Adquisición: </span> <input type="text"  id="campo3" v-model="product.costo_adquisicion" > </p>
                <p v-if="hay_datos"><span>Precio Venta: </span> <input type="text" id="campo4" v-model="product.precio_venta"  > </p>
                <button v-on:click="editarProducto" v-if="hay_datos" class="boton">Modificar</button>
                <button v-on:click="borrarProducto" v-if="hay_datos" class="boton">Eliminar</button> 
                
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
            codigoProducto:"",
            hay_datos: false,
            product:{
                codigo: "",                
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
            
            axios.get("https://mygic-api.herokuapp.com/product/"+self.codigoProducto)
                .then((result)=>{
                    self.product.codigo = result.data.codigo
                    self.product.nombre = result.data.nombre
                    self.product.cantidad_disponible = result.data.cantidad_disponible
                    self.product.costo_adquisicion = result.data.costo_adquisicion
                    self.product.precio_venta = result.data.precio_venta
                    self.hay_datos=true
                    alert("Codigo: "+ self.product.codigo+"\nNombre: "+ self.product.nombre + "\nCantidad Disponible: " + self.product.cantidad_disponible + "\nCosto Adquisición: " + self.product.costo_adquisicion + "\nPrecio Venta: " + self.product.precio_venta)
                    
                })
                .catch((error)=>{
                    self.hay_datos = false
                    alert("ERROR: " + error)
                })
        },
        editarProducto:function(){
            let self = this

            axios.put("https://mygic-api.herokuapp.com/product/", self.product, {headers: {}})
                .then((result)=>{
                    alert("Producto Actualizado Correctamente")
                    self.hay_datos = false
                })
                .catch((error)=>{
                    alert("ERROR: " + error.response.status)
                })
        },
        borrarProducto:function(){
            let self = this

            axios.delete("https://mygic-api.herokuapp.com/product/"+self.codigoProducto)
                .then((result)=>{
                    self.product.codigo = result.data.codigo
                    self.product.nombre = result.data.nombre
                    self.product.cantidad_disponible = result.data.cantidad_disponible
                    self.product.costo_adquisicion = result.data.costo_adquisicion
                    self.product.precio_venta = result.data.precio_venta
                    self.hay_datos= false
                    alert("Se eliminó con éxito:\nCodigo: "+ self.product.codigo+"\nNombre: "+ self.product.nombre + "\nCantidad Disponible: " + self.product.cantidad_disponible + "\nCosto Adquisición: " + self.product.costo_adquisicion + "\nPrecio Venta: " + self.product.precio_venta)
                    
                })
                .catch((error)=>{
                    self.hay_datos = true
                    alert("ERROR: " + error)
                })


        }

    }

}
</script>

<style>
.formularioGet{
    border-radius: 10px;
}
.contenido{
    display: flex;
    align-items: center;
}
.liEstilo{
    list-style: none;
}
.informacion{
    border: 1px solid #000000;
    align-items: center;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
.estiloInput{
    border-radius: 10px;
    margin-right: 20px;
    margin: 10px;
}
.botonConsultar{
    border-radius: 10px;
    margin-right: 20px;
}
</style>
