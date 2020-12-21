<template>
    <div id= "obtenerProducto">
        <h2 align="center" class="tituloConsulta">Administrar productos </h2>
        <div class = "contenido">
            <div class="formularioGet">
                <form v-on:submit.prevent="procesarConsulta" Class= "diseñoFormulario">
                    <ul>
                        <li class="liEstilo"><input class="estiloInput" type="text" v-model="codigoProducto" placeholder="Codigo Producto"></li>
                        <button type="submit" class="boton">Consultar </button>
                    </ul>
                </form>
            </div>
            <div class="informacion">
                             
                <h2 class="textoInformacion">Información</h2>
                
                <p v-if="hay_datos" class="item"><span>Código: </span> <input class="input" type="text"  v-model="product.codigo" readonly> </p>                
                <p v-if="hay_datos" class="item"><span>Nombre: </span> <input class="input" type="text"  id="campo1" v-model="product.nombre"  > </p>
                <p v-if="hay_datos" class="item"><span>Cantidad Disponible: </span><input class="input" type="text"  id="campo2" v-model="product.cantidad_disponible" > </p>
                <p v-if="hay_datos" class="item"><span>Costo Adquisición: $</span> <input class="input" type="text"  id="campo3" v-model="product.costo_adquisicion" > </p>
                <p v-if="hay_datos" class="item"><span>Precio Venta: $</span> <input class="input" type="text" id="campo4" v-model="product.precio_venta"  > </p>
                <button v-on:click="editarProducto" v-if="hay_datos" class="botonAdministrar">Modificar</button>
                <button v-on:click="borrarProducto" v-if="hay_datos" class="botonAdministrar">Eliminar</button> 
                
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
                    alert("ERROR: No se encuentra el producto")
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
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
.formularioGet{
    border-radius: 10px;
}
.tituloConsulta{
    font-family: 'Handlee', cursive;
}
.contenido{
    display: flex;
    align-items: center;
}
.liEstilo{
    list-style: none;
}
.textoInformacion{
    text-align: center;
    font-family: 'Handlee', cursive;
}
.informacion{
    border: 1px solid #000000;
    align-items: center;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    text-align: ce;
}
.estiloInput{
    border-radius: 10px;
    margin-right: 20px;
    margin: 10px;
    text-align: center;
}
.botonConsultar{
    border-radius: 10px;
    margin-right: 20px;
}
.item{
    font-family: 'Handlee', cursive;
}
.botonAdministrar{
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
    margin: 10px;
    margin-right: 0px;
    margin-left: 40px;
    font-family: 'Roboto Mono', monospace;
}
</style>
