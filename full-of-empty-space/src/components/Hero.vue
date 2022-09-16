<script setup>
</script>

<template>
    <div>
    <section class="hero">
        <h1>Full of em<span class="color-invert">pty space</span></h1>
        <h2>Tales from a nerd screaming into the void</h2>
    </section>
    <section>
        <h1>Color tests!</h1>
        <h2 class="text2">Text 2</h2>
        <h2 class="text3">Text 3</h2>
        <h2 class="text4">Text 4</h2>
        <h2 class="text5">Text 5</h2>
        <h2 class="text6">Text 6</h2>

        <p>potato</p>
    </section>
    </div>
</template>

<style scoped>

span.color-invert {
    color: var(--blog-bg);
    background: var(--blog-text1);
}

.hero h1 {
    /* font-family: "Noto Sans"; */
    font-weight: bolder;
    font-size: clamp(4rem, 5vw, 7rem);
    padding-bottom: var(--size-6);
    text-transform: lowercase;
}

.hero {
    font-family: Oswald;
    /* display: grid;
    align-items: center;
    justify-items: center; */
}

</style>
