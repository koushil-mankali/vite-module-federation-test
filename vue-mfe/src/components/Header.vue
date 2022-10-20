<script setup lang="ts"></script>

<template>
    <nav class="nav">
        <div class="ttl">Micro Frontend Test App</div>
        <div class="menu">
            <div class="menuItem">Home</div>
            <div class="menuItem">About</div>
            <div class="menuItem">Contact</div>
            <div class="menuItem">Vue app</div>
        </div>
    </nav>
</template>

<style scoped>
.nav{
    width: 100%;
    height: 70px;
    background-color: #ffb703;  
    box-shadow: 2px 2px 2px #e9c46a;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ttl{
    font-weight: 600;
    font-size: 2.5rem;
    color: #f1faee;
    cursor: pointer;
}

.menu{
    display: flex;
    font-size: 1.4rem;
    font-weight: 500;
    color: #f7ede2;
}

.menuItem{
    margin: 0.5rem;
    cursor: pointer;
}
</style>