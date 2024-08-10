<template>
    <header
        class="container d-flex align-items-center justify-content-between py-3 bg-white dark:bg-black border-bottom border-slate-200 mb-5">
        <div class="d-flex align-items-center w-50">
            <a class="fw-bold h4 primary-color font-mono text-decoration-none me-lg-5 me-md-4"
                href="#">NFTERS</a>
            <div class="d-none d-lg-flex justify-content-evenly w-100 fw-medium font-sans">
                <a class="text-black text-decoration-none me-4 link-item" href="#">Marketplace</a>
                <a class="text-black text-decoration-none me-4 link-item" href="#">Resource</a>
                <a class="text-black text-decoration-none link-item" href="#">About</a>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-end w-70">
            <div class="position-relative me-md-4 search-input">
                <input type="search" class="form-control rounded-pill px-4 py-2" id="search" placeholder="Search" />
                <svg class="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
            </div>
            <button
                class="btn btn-primary d-none d-lg-inline-flex me-3 rounded-pill px-5 py-2 primary-bg-color primary-border-color">
                Upload
            </button>
            <button
                class="btn btn-outline-primary d-none d-lg-inline-flex rounded-pill px-lg-4 py-2 primary-color primary-border-color">
                Connect Wallet
            </button>
        </div>
        <div class="d-lg-none ms-3" @click.prevent="toggleMobileNav">
            <button class="btn btn-outline-secondary rounded-md" type="button" aria-haspopup="dialog"
                aria-expanded="false" aria-controls="radix-:R1hnla:" data-state="closed">
                <svg class="bi bi-list h5 m-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z">
                    </path>
                </svg>
                <span class="visually-hidden">Toggle navigation menu</span>
            </button>
        </div>
        <MobileNavbar v-if="showMobileNav" :show="showMobileNav" @close="toggleMobileNav" />
    </header>



</template>

<script setup>
import { ref } from 'vue';
import MobileNavbar from './MobileNavbar.vue';

const showMobileNav = ref(false);

const toggleMobileNav = () => {
    showMobileNav.value = !showMobileNav.value
}
</script>

<style lang="scss" scoped>
.search-input {
    width: 50%;
}

@media screen and (max-width: 991px) {
    .search-input {
        width: 100%;
    }
}

</style>