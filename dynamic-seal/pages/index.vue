<template>
    <div class="hero w-screen h-screen flex flex-col items-center justify-center">
        <h1 class="text-cyan-900 sm:text-6xl md:text-9xl lg:text-[12rem] text-center flex-center">Dynamic Seal</h1> 
        <img alt="seal" src="/img/Seal_NoBg.svg" class="m-6 w-1/3">
        <div class="text-cyan-900 sm:text-3xl md:text-6xl flex flex-row items-center justify-around space-x-16">
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/blog">Posts</RouterLink>
        </div>
    </div>
</template>

<style>

.hero {
    background-image: url('/img/Splash.svg');
    background-size: cover;
    background-repeat: no-repeat;
}

</style>