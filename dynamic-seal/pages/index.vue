<template>
    <div>
        <!-- <NavBar></NavBar> -->
        <div class="w-screen bg-zinc-100 flex flex-col md:grid md:grid-cols-[60%_40%] md:grid-rows-1 font-heading">
            <div class="p-12 md:p-24 hero md:pb-12 min-h-[60vh] md:min-h-[80vh] w-full h-full bg-clip-text">
                <h1 class="text-transparent
            
                       leading-none text-7xl lg:text-9xl xl:text-[15rem]">Dynamic <br />Seal</h1>
                <img alt="seal" src="/img/Seal_NoEyes.svg" class="my-6 min-w-[70%] max-w-[80%]  md:max-w-[60%] md:min-w-[50%]">
                <div class="text-cyan-800 text-4xl lg:text-6xl mt-12 flex flex-row flex-wrap ">
                    <RouterLink class="hover:underline mr-16" to="/about">About</RouterLink>
                    <RouterLink class="hover:underline mr-16" to="/blog">Posts</RouterLink>
                </div>
            </div>
            <div class="sidebar min-h-[10vh] h-full w-full
                    ">

            </div>
        </div>
    </div>
</template>

<style>

html.dark .hero {
    background-image: url('/img/Splash_Light.svg');
    background-size: stretch;
    /* background-repeat: no-repeat; */
}

.hero {
    background-image: url('/img/Splash_2.svg');
    background-size: cover;
    /* background-repeat: no-repeat; */
}

.sidebar {
    background-image: url('/img/Splash_2.svg');
    background-size: cover;
    background-repeat: no-repeat;
}

html.dark .sidebar {
    background-image: url('/img/Splash_Light.svg');
    background-size: cover;
    background-repeat: no-repeat;
}


a.effect-shine:hover {
  -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  -webkit-mask-size: 100%;
  animation: shine 2s;
}

</style>