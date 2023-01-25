<template>
    <div>
        <NavBar></NavBar>
        <div class="mx-auto w-[67vw] bg-zinc-100 flex flex-col md:grid md:grid-cols-[80%_20%] lg:grid-cols-[60%_40%] md:grid-rows-1 font-heading">
            <div class="align-middle p-6 md:pr-24 md:pl-12 hero min-h-[60vh] md:min-h-[80vh] w-full h-full">
                <!-- <h1 class="font-teko text-foreground-50 leading-none text-4xl lg:text-6xl xl:text-7xl">Dynamic <br />Seal</h1> -->
                <img alt="seal" src="/img/Seal_NoEyes.svg" class="my-6 min-w-[70%] max-w-[90%]">
                <div class="mt-24 text-cyan-800 text-4xl md:text-5xl xl:text-6xl flex flex-row flex-wrap ">
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