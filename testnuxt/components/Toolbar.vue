<template>
    <v-toolbar dar color = "blue">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">
            <nuxt-link class="title" to="/"> test 툴바 </nuxt-link>
        </v-toolbar-title>

    </v-toolbar>
</template>

<script>
</script>
<style scoped>
.title {
    text-decoration: none !important;
}
.title:visited {
    color: white;
}

</style>