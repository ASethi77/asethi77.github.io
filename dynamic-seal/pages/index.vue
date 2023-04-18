<template>
    <div>
        <NavBar></NavBar>
        <div class="mx-auto w-[67vw] md:grid md:grid-cols-[80%_20%] lg:grid-cols-[60%_40%] md:grid-rows-1">
            <div class="py-auto p-6 md:pr-24 md:pl-12 hero min-h-[60vh] md:min-h-[80vh] w-full h-full flex items-center justify-center">
                <div id="hero-wrap">
                    <img alt="seal" src="/img/Seal_NoEyes.svg" class="my-6 min-w-[70%] max-w-[90%]">
                    <div class="mt-24 text-4xl md:text-5xl xl:text-6xl flex flex-row flex-wrap justify-center">
                        <RouterLink class="px-5 mx-auto text-center" to="/about">About</RouterLink>
                        <RouterLink class="px-5 mx-auto text-center" to="/blog">Posts</RouterLink>
                    </div>
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

#hero-wrap a {
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

#hero-wrap a:hover {
    @apply underline; 
    @apply underline-offset-8; 
    @apply decoration-[3px];
}

</style>