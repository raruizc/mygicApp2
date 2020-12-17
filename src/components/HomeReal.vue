<template>
    <div id='home'>
        <div class="contededorImg"> <img src="../assets/logo.png"></div>
        <div class="contenedorTexto">
            <p class='parrafo'>
                Módulo donde se podrá crear, consultar y modificar los productos de una organizaciónes
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
    font-family: 'Crimson Text', serif;
    align-items: center;
    font-size: 20pt;
}
</style>