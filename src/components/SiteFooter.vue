<template>
    <div class="container mt-5 pt-5">
        <div class="row g-4">
            <div class="col-12 col-md-4">
                <p class="font-mono fw-bold fs-4">NFTERS</p>
                <p class="text-body-secondary my-5">
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens
                    (NFTs). Buy, sell, and discover exclusive digital items.
                </p>
                <div class="d-flex gap-4 fs-1">
                    <a href="https://www.facebook.com/" target="_blank" class="btn p-0">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            class="facebook fs-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://x.com/" target="_blank" class="btn p-0">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" class="fs-1"
                            viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" class="btn p-0">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            class="linkedin fs-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="col-6 col-md-2">
                <p class="fw-bold font-sans fs-6 mb-3">Market Place</p>
                <div class="d-flex flex-column align-items-start gap-2">
                    <a class="text-body text-decoration-none p-0 link-item">All NFTs</a>
                    <a class="text-body text-decoration-none p-0 link-item">New</a>
                    <a class="text-body text-decoration-none p-0 link-item">Art</a>
                    <a class="text-body text-decoration-none p-0 link-item">Sports</a>
                    <a class="text-body text-decoration-none p-0 link-item">Utility</a>
                    <a class="text-body text-decoration-none p-0 link-item">Music</a>
                    <a class="text-body text-decoration-none p-0 link-item">Domain Name</a>
                </div>
            </div>
            <div class="col-6 col-md-2">
                <p class="fw-bold font-sans fs-6 mb-3">My Account</p>
                <div class="d-flex flex-column align-items-start gap-2">
                    <a class="text-body text-decoration-none p-0 link-item">Profile</a>
                    <a class="text-body text-decoration-none p-0 link-item">Favorite</a>
                    <a class="text-body text-decoration-none p-0 link-item">My Collections</a>
                    <a class="text-body text-decoration-none p-0 link-item">Settings</a>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <p class="fw-bold font-sans fs-5 mb-3">Stay in the loop</p>
                <p class="text-body-secondary">
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and
                    tricks for navigating NFTs.
                </p>
                <div class="input-group mt-3 rounded-pill">
                    <input type="email" class="form-control rounded-start" placeholder="Enter your email address..."
                        aria-label="Email">
                    <button class="btn btn-primary rounded-end primary-bg-color primary-border-color">Subscribe Now</button>
                </div>
            </div>
        </div>
        <hr class="mt-5" />
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.facebook {
    opacity: 1;
    color: rgb(59 89 152);
}

.linkedin {
    opacity: 1;
    color: rgb(0 122 185);
}
</style>