<template>
    <div>
        <NavBar :hide-all-nav-links="true"></NavBar>
        <div id="main-links" class="mx-auto w-[80vw] max-lg:flex max-lg:flex-col-reverse lg:relative lg:h-[80vh]">
            <div class=" retrobar bg-cyan-900 lg:h-full lg:w-full"/>
            <div class=" retrobar bg-sky-700 lg:h-4/5 lg:w-4/5"/>
            <div class=" retrobar bg-orange-100 lg:h-3/5 lg:w-3/5"/>
            <RouterLink tag="div" to="/blog" class="linkitem retrobar bg-amber-200 lg:h-2/5 lg:w-2/5">
                <p class="px-6 pb-[1.5rem] lg:text-3xl lg:text-left lg:flex-initial max-lg:mb-auto mt-auto" to="/posts">Posts</p>
            </RouterLink>
            <RouterLink tag="div" to="/about" class="linkitem retrobar bg-red-400 lg:h-1/5 lg:w-1/5">
                <p class="px-6 pb-[1.5rem] lg:text-3xl lg:text-left lg:flex-initial max-lg:mb-auto mt-auto" to="/about">About</p>
            </RouterLink>
        </div>
    </div>
</template>

<style>

#main-links .retrobar:first-child {
    @apply rounded-b-lg;
}

#main-links .retrobar:last-child {
    @apply rounded-t-lg;
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

#hero-wrap a {
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

#hero-wrap a:hover {
    @apply underline; 
    @apply underline-offset-8; 
    @apply decoration-[3px];
}

.retrobar {
    @apply mx-auto;
    @apply max-lg:text-3xl;
    @apply max-lg:block;
    @apply max-lg:h-24;
    @apply max-lg:w-full;
    @apply text-center;
    @screen lg {
        @apply absolute;

        &:not(:first-child) {
            @apply rounded-br-[150px];
        }
    }
}

.linkitem {
    transition: all 300ms ease;
    @apply flex;
    @apply max-lg:justify-center;
    @screen lg {
        @apply justify-start;
        @apply items-end;
    }
}

.linkitem:hover {
    @screen lg {
    @apply h-full;
    @apply w-full;
    @apply rounded-none;
    }
}

</style>