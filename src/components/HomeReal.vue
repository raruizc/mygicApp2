<template>
    <div id='home'>
        <div class="contededorImg"> <img src="../assets/producto2.png"></div>
        <div class="contenedorTexto">
            <p class='parrafo'>
                Aquí podrá administrar los productos de su empresa. No pierda el control de su inventario.
                ¡Bienvenido a MyGIC!
            </p>                
        </div>       
    </div>
</template>

<script>

export default{
    name:"HomeReal",    

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
#home{
    display: flex;
    align-items: center;

}
.contededorImg {
    width: 30%;
    background-color: rgb(255, 255, 255);
    margin: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #000000;
} 
.contenedorTexto{
    width: 70%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #000000;
    justify-content: center;    
}
.parrafo{
    font-family: 'Handlee', cursive;
    align-items: center;
    font-size: 20pt;
}
</style>
