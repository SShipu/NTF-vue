<template>
   <main class="max-w-screen-xl px-4 py-4 lg:px-8 mx-auto">
        <Navbar />
        <DigitalArts />
        <AmazingNft />
        <TopCollection />
        <SiteFooter />
   </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import SiteFooter from '../components/SiteFooter.vue'
import DigitalArts from '../views/index/DigitalArts.vue'
import AmazingNft from '../views/index/AmazingNft.vue'
import TopCollection from '../views/index/TopCollection.vue'
</script>

<style lang="scss" scoped>

</style>