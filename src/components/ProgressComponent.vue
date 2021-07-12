<template>
	<div class="progress" style="width: 100%; margin-bottom: 5%;">
		<div class="progress-bar" :style="style"></div>
	</div>
</template>
<script>

    export default{
        props: ['style']
    }
</script>
