<template>
	<v-container>
		<v-layout align-center justify-center>
			<v-flex xs12 md6 class="login-form">
				<h1 class="title_label">New Horizon - Admin</h1>
				<h2><center><v-icon>person</v-icon> Login</center></h2>
				<v-card light>
					<v-form>
						<v-container>
							<v-text-field
								prepend-icon="email"
								label="Email"
								type="emial"
								light
							>
							</v-text-field>
							<v-text-field
								prepend-icon="lock"
								label="Password"
								type="password"
								light
							>
							</v-text-field>
							<v-checkbox
								light
								label="Stay logged in?"
								hide-details
								class="logged_box"
							>
							</v-checkbox>
							<v-btn block
								to="/event-list"
								type="submit"
								color="success"
							>
								LogIn
							</v-btn>
						</v-container>
					</v-form>	
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

export default {
	layout: 'login',
	data() {
		return{
			options: {
				isLoggingIn: true,
				shouldStayLoggedIn: true
			}
		}
	}
}
</script>

<style>

	.title_label{
		text-align: center;
		margin-bottom: 25px;
	}

	.login-form{
		max-width: 500px;
	}

	.logged_box{
		margin-bottom: 20px;
	}
</style>
