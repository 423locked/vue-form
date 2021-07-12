<template>
    <div>
        <table class="table table-bordered">
        <tr v-for="field in entities" v-bind:key="field">
            <td>{{ field.name }}</td>
            <td>{{ field.value }}</td>
        </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ["entities"],
    };
</script>
