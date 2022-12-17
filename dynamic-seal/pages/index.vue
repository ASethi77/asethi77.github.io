<template>
    <div class="hero w-screen h-screen flex flex-col items-center justify-center">
        <h1 class="text-cyan-900 text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-center flex-center">Dynamic Seal</h1> 
        <img alt="seal" src="/img/Seal_NoBg.svg" class="m-6 max-w-[50%] md:max-w-[33%]">
        <div class="text-cyan-900 text-2xl md:text-3xl lg:text-5xl flex flex-row items-center justify-around space-x-16">
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