<template>
  <div id="app">
    
      <div class="header">
        <nav class="estiloNav">
          <h1 class="nombreApp">MyGIC</h1>
          <div class="contenedorBotones">
            <button v-on:click="procesarInicio" class="boton" > Inicio</button>
            <button v-on:click="procesarCrearProducto" class="boton">Crear</button>
            <button v-on:click="selectGet" class="boton">Consultar  </button>
          </div>
        </nav>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>

      <div class="footer">
        <p>Desarrollado por G2M3Grupo3</p>

      </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data: function(){
  return{
      home: true,
      create: false
    }
  },

  methods:{
    procesarInicio:function(){
      //this.$router.push({name: 'Home'})
      if(this.$route.name != 'home'){
        
        this.$router.push({name: 'home'})        
      }

    },
    
    procesarCrearProducto:function(){ 
      
      if(this.$route.name != 'createProduct'){
        
        this.$router.push({name: 'createProduct'})        
      }         
      
    },

    selectGet:function(){
      if(this.$route.name != 'getProduct'){
        
        this.$router.push({name: 'getProduct'})        
      }  
    }
  },

  created: function(){
    
    this.$router.push({name: 'home'})        
    
  }
}

</script>

<style>
#app{
  background-image: linear-gradient(to bottom right, white 0%, rgb(183, 240, 50) 100%);
}

.estiloBody{
  margin: 0 0 0 0; 
  background-color: -webkit-linear-gradient(top, #f00 0%, #00f 100%);;
}
.header{
  width: 90%;
  border-radius: 5px;
  margin: auto;
  border: 1px solid #000000;
  display: flex;
}
.estiloNav{
  background-color:  #99FF99;
  width: 100%;
  padding: 5px;
  margin: 5px;
  display: flex; 
  align-items: center; 
}
.nombreApp{
  margin-left: 60px;
  font-size: 40pt; 
  font-family: 'Langar', cursive;
}
.contenedorBotones{
  margin-left: 50%;
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
  /*border-radius: 20px;
  padding: 5px 20px;
  margin:0px; */
  
}
.boton:hover{
  background-color: #00A86B;
}
.main{
  width: 90%;
  background-color: #ffff80;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #000000;

  display: flex;
  justify-content: center;
}
.footer{      
  background-color: #99FF99;
  width: 90%;
  
    
  margin: auto;
  border-radius: 5px;
  border: 1px solid #000000;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  /*margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;*/
}

</style>
