<template>
	<div>
		<div v-if="!formDone" class="wrapper" style="display: flex; justify-content: center">
			<div style="width: 60%">
			<h1>Your fields</h1>
			<form>

				<progress-bar
					:style="progressStyles"
				></progress-bar>

				<field
					v-for="(field, i) in fields"
					:i="i"
					:name="field.name"
					:value="field.value"
					:valid="field.valid"
					:key="i"
					@fieldinput="onChildInput(i, $event)"
				></field>

				<button type="button" class="btn btn-primary" style="margin-top: 5%;" :disabled="!isFormValid" @click="formDone = true">
					Send Data
				</button>
			</form>
			</div>
		</div>

		<div v-else>
			<data-table
				:entities="this.fields"
			></data-table>
		</div>
	</div>
</template>
<script>
	import FieldComponent from "@/components/FieldComponent.vue";
	import ProgressComponent from "@/components/ProgressComponent.vue";
	import DataTableComponent from "@/components/DataTableComponent.vue";

	export default {
		components: {
			'field': FieldComponent,
			'progress-bar': ProgressComponent,
			'data-table': DataTableComponent
		},
		data: () => ({
			formDone: false,
			fields: [
				{
					name: "Name",
					value: "",
					pattern: /^[a-zA-Z ]{2,30}$/,
				},
				{
					name: "Phone",
					value: "",
					pattern: /^[0-9]{7,14}$/,
				},
				{
					name: "Email",
					value: "",
					pattern: /.+/,
				},
				{
					name: "Some Field 1",
					value: "",
					pattern: /.+/,
				},
				{
					name: "Some Field 2",
					value: "",
					pattern: /.+/,
				},
			],
		}),
		computed: {
			progressAll() {
				return this.fields.length;
			},
			progressDone() {
				//return this.fields(f => f.valid).length();
				let n = 0;
				for (let field of this.fields) {
					if (field.valid) n++;
				}
				return n;
			},
			isFormValid() {
				return this.fields.every(e => e.valid);
			},
			progressStyles() {
				let w = (this.progressDone / this.progressAll * 100) + '%';
				return  {
					width: w
				}
			}
		},
		methods: {
			onChildInput(i, value) {
				let field = this.fields[i];

				field.value = value.trim();
				field.valid = field.pattern.test(value);
			},
		},
		created() {
				return this.fields.forEach((field) => {
				field.valid = false;
			});
		}
	};
</script>