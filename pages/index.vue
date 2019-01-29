<template>
	<v-container>
		<v-layout align-center justify-center>
			<v-flex xs12 md6 class="login-form">
				<h1 class="title_label">New Horizon - Admin</h1>
				<h2 class="sub_label"><center><v-icon>person</v-icon> Login</center></h2>
				<v-card light>
					<template v-if="options.isLoggingIn"><center><h4 class="ifLog">Log in to your admin portal</h4></center></template>
					<template v-else><center><h4 class="ifLog">Create a new account</h4></center></template>
					<v-form>
						<v-container>
							<v-text-field
								prepend-icon="person"
								label="Name"
								v-if="!options.isLoggingIn"
								v-model="user.name"
								light
							>
							</v-text-field>
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
							<v-text-field
								prepend-icon="lock"
								label="Confirm Password"
								type="password"
								light
								v-if="!options.isLoggingIn"
							>
							</v-text-field>
							<v-checkbox
								light
								label="Stay logged in?"
								hide-details
								class="logged_box"
								v-if="options.isLoggingIn"
							>
							</v-checkbox>
							<v-btn block
								v-if="options.isLoggingIn"
								to="/event-list"
								type="submit"
								color="success"
							>
								Sign In
							</v-btn>
							<v-btn block
								v-else
								type="submit"
								@click.prevent="options.isLoggingIn = true"
								color="success"
							>
								Sign Up
							</v-btn>
							<h5 class="ifSigh" v-if="options.isLoggingIn">Don't have an account?</h5>
							<v-layout justify-center> 
								<v-btn 
									light
									v-if="options.isLoggingIn"
									@click="options.isLoggingIn = false"
								>
								Sign Up
								</v-btn>
							</v-layout>
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
			user: {

			},
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

	.ifLog{
		padding-top: 15px;
		text-align: center;
	}

	.sub_label{
		margin-bottom: 10px;
	}

	.login-form{
		max-width: 500px;
	}

	.logged_box{
		margin-bottom: 20px;
	}

	.ifSigh{
		text-align: center;
		margin-top: 10px;
	}
</style>
