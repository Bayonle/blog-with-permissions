<template>
    <div class="permission" v-if="$auth.can(allowed)">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        allowed: {
            type: String,
            default: ''
        }
    }
}
</script>