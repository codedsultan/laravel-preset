<template>
<div>
	<h1 class="text-green-400 text-xl">{{ welcomeMessage }}</h1>
    <p>The world is yours</p>
    <p>By me coffee</p>
</div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',

    computed: {
        welcomeMessage() {
            return this.$page.props.welcomeMessage;
        }
    }
});
</script>
