<template>
    <div class="form-group" style="margin-bottom: 20px;">
        <label>{{ name }}</label>
        <span v-if="activated" style="margin-left: 10px;">
            <fa-icon v-show="valid" :icon="['fas', 'check-circle']" style="color: green;" />
            <fa-icon v-show="!valid" :icon="['fas', 'exclamation-circle']" style="color: darkorange;" />
        </span>
		<input type="text" class="form-control" :value="value" @click="Activate" @input="onInput">
    </div>
</template>
<script>
    export default {
        props: ['i', 'name', 'value', 'valid'],
        data: () => ({
            activated: false
        }),
        methods: {
            Activate() {
                this.activated = true;
            },
            onInput(e) {
                this.$emit('fieldinput', e.target.value);
            }
        }
    }
</script>