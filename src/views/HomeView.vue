<template>
    <div class="title">
        <h1>おすすめの壁紙アプリ</h1>
    </div>
    <div class="startButton">
        <El-button size="large" @click="$router.push({ path: '/Question' })">スタート</El-button>
    </div>
    
</template>



<style>
.title {
    margin: 20%
}

.title h1{
    font-size: 5vmin;
    text-align: center;
}

.startButton{
    text-align: center;
}

</style>