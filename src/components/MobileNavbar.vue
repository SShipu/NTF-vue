<template>
        <!-- MOBILE NAV -->
        <div class="modal-backdrop fade" :class="{ 'show': show }"></div>
        <div role="dialog" class="modal fade d-block"
            :class="{ 'show': show }" style="background: rgba(0, 0, 0, 0.5);">
            <div class="modal-dialog modal-dialog-slideout h-100 m-0 position-fixed end-0" style="max-width: 75%;">
                <div class="modal-content h-100 border-0">
                    <div class="modal-body p-4">
                        <a class="d-block mb-3 text-black fs-5 fw-semibold text-decoration-none link-item" href="#">Marketplace</a>
                        <a class="d-block mb-3 text-black fs-5 fw-semibold text-decoration-none link-item" href="#">Resource</a>
                        <a class="d-block mb-3 text-black fs-5 fw-semibold text-decoration-none link-item" href="#">About</a>
                        <button
                            class="btn btn-primary w-100 rounded-pill px-5 py-2 mb-3 primary-bg-color primary-border-color">
                            Upload
                        </button>
                        <button
                            class="btn btn-outline-primary w-100 rounded-pill px-lg-4 py-2 primary-color primary-border-color">
                            Connect Wallet
                        </button>
                    </div>
                    <button type="button" class="btn-close position-absolute top-0 end-0 p-3" @click="$emit('close')"></button>
                </div>
            </div>
        </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>