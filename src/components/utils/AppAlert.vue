<template>
    <div
        :class="`alert alert-${theme}`"
        role="alert"
    >
        <header class="alert-heading">
            <slot name="heading"></slot>
        </header>
        <div class="alert-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
import ThemeMixin from '@/mixins/theme';

export default {
    name: 'AppAlert',
    mixins: [ ThemeMixin ]
}
</script>

<style scoped>
.alert-heading {
    font-weight: bold;
}
</style>