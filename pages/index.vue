<template>
	<v-layout
	row
	justify-center
	align-center>
		<v-flex md3></v-flex>
		<v-flex md6>
			<v-layout 
			column>
				<v-flex>
					<v-layout column>
						<h3>SIGN IN</h3>
						<br>
						<v-flex>
							<v-text-field
							full-width
							label="User"
							outline
						></v-text-field>
						</v-flex>
						<v-text-field
							full-width
							label="Password"
							outline
						></v-text-field>
						<v-flex>
							<v-btn color="pink" class="white--text" to="/event-list">
							Sign in
							</v-btn>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex md3></v-flex>
	</v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
	layout: 'login',
	components: {
		Logo,
		VuetifyLogo
	}
}
</script>
