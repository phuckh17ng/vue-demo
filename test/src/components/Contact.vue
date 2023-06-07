<script setup lang="ts"></script>

<template>
	<div class="contact">
		<div class="contact-mask-1">
			<img src="../assets/pic13.png" id="banner1" />
			<img src="../assets/pic12.png" id="figure3" />
		</div>
		<div class="contact-mask-2">
			<img src="../assets/pic14.png" id="banner2" />
		</div>
		<div class="contact-content">
			<div class="contact-content-title">
				<p1>Join Our Team</p1>
				<p2>It takes the world's best <br />talent to change the game.</p2>
				<button>Explore Careers</button>
			</div>
			<form class="get-in-touch">
				<h1>Get in Touch</h1>
				<p>
					I'm a paragraph. Click here to add<br />
					your own text and edit me.
				</p>

				<div class="form-name">
					<div-firstname>
						<label for="firstname">First Name * </label>
						<input type="text" name="firstname" id="firstname" />
					</div-firstname>
					<div-lastname>
						<label for="lastname">Last Name * </label>
						<input type="text" name="lastname" id="lastname" />
					</div-lastname>
				</div>

				<div class="email">
					<label for="email">Email * </label>
					<input type="text" name="email" id="email" />
				</div>

				<div class="message">
					<label for="message">Leave us a message... </label>
					<textarea type="text" name="message" id="message" />
				</div>

				<button type="submit">Submit</button>
			</form>
			<form class="subscribe">
				<p>Subscribe to Our Newsletter</p>
				<div class="subscribe-input">
					<div>
						<label for="email">Email *</label>
						<input type="text" name="email" />
					</div>
					<button type="submit">Join</button>
				</div>
			</form>
		</div>
		<div class="header-logo">
			<p>Tripo Games</p>
			<p style="font-weight: 300; font-size: 16px; margin-left: 10vh">
				© 2035 by Tripo. Powered and secured by Wix
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact {
	background: #f6f4f0;
	height: 100%;
	width: 100%;
	position: relative;

	.contact-mask-1 {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		z-index: 1;
		> img {
			overflow: hidden;
			position: relative;
			height: 100%;
			width: 100%;
			object-fit: cover;
			z-index: 1;
		}
		#figure3 {
			position: absolute;
			bottom: 0vh;
			right: 8%;
			width: auto;
			height: 400px;
			transform: translateY(500px);
			opacity: 0;
			transition: all 1.2s ease-out;
		}
	}
	.contact-mask-2 {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		z-index: 1;
		> img {
			overflow: hidden;
			position: relative;
			height: 100%;
			width: 100%;
			object-fit: cover;
			z-index: 1;
		}
	}
}

.contact-content {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0px;
	z-index: 10;
	.contact-content-title {
		max-width: 1280px;
		margin: auto;

		> p1 {
			color: #f6f4f0;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			font-size: 24px;
			font-weight: 600;
			margin-top: 10vh;
			display: block;
		}
		> p2 {
			color: #f6f4f0;
			font-family: "Suez One", serif;
			font-size: 76px;
			margin-top: 5vh;
			display: block;
		}
		> button {
			font-size: 16px;
			margin-top: 5vh;
			padding: 24px;
			border-radius: 14px;
			border: none;
			background: #fcff72;
		}
	}
}
.get-in-touch {
	width: 438px;
	background: #fff;
	border-radius: 20px;
	position: absolute;
	bottom: 20%;
	left: 13%;
	padding: 36px;
	> h1,
	p {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 36px;
		color: #272443;
	}
	p {
		font-size: 20px;
		margin-top: 24px;
		font-weight: 400;
	}
	.form-name {
		display: flex;
		margin-top: 24px;
		justify-content: space-between;
		> div-firstname,
		> div-lastname {
			width: calc(50% - 16px);
			display: flex;
			flex-direction: column;
			> label {
				// width: calc(92% - 32px);
				color: #272443;
				font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			}
			> input {
				// width: calc(92% - 32px);
				margin-top: 10px;
				padding: 0 16px 0 16px;
				height: 56px;
				border-radius: 10px;
				outline: none;
				border: 0.5px solid #272443;
			}
		}

		> div-firstname {
			justify-content: start;
		}
		> div-lastname {
			> input {
				align-items: end;
			}
		}
	}

	.email {
		margin-top: 24px;
		> label {
			display: block;
			color: #272443;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		}
		> input {
			margin-top: 10px;
			padding: 0 16px 0 16px;
			height: 56px;
			border-radius: 10px;
			outline: none;
			border: 0.5px solid #272443;
			width: calc(100% - 36px);
		}
	}

	.message {
		margin-top: 24px;
		> label {
			display: block;
			color: #272443;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		}
		> textarea {
			margin-top: 10px;
			padding: 16px 16px 0 16px;
			height: 112px;
			border-radius: 10px;
			outline: none;
			border: 0.5px solid #272443;
			width: calc(100% - 36px);
			resize: none;
		}
	}
	> button {
		background: #272443;
		color: #fff;
		font-size: 16px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		height: 56px;
		width: 100%;
		margin-top: 24px;
		border: none;
		border-radius: 10px;
		transition: background ease 0.35s;
		margin-bottom: 10px;
	}
	> button:hover {
		background: #da392b;
	}
}
.subscribe {
	position: absolute;
	width: 388px;
	background: #da392b;
	bottom: 20%;
	right: 13%;
	border-radius: 20px;
	padding: 36px 24px;
	> p {
		color: #f6f4f0;
		font-size: 24px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
	}
	.subscribe-input {
		display: flex;
		justify-content: space-between;
		align-items: end;
		> div {
			width: 75%;
		}
		> div > label {
			color: #f6f4f0;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			display: block;
			margin-top: 10px;
		}
		> div > input {
			margin-top: 10px;
			height: 56px;
			border-radius: 10px;
			outline: none;
			border: none;
			padding: 0 16px 0 16px;
			width: calc(100% - 32px);
		}
		> button {
			height: 56px;
			width: 20%;
			border-radius: 10px;
			border: none;
			background: #fcff72;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			font-size: 16px;
		}
	}
}
.header-logo {
	display: flex;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	align-items: center;
	justify-content: center;
	background: #da392b;
	padding: 12px 24px 12px 24px;
	font-size: 24px;
	font-family: "Suez One", serif;
	font-weight: 500;
	color: white;
	box-shadow: rgba(128, 12, 132, 0.15) 5px 13px 10px -10px;
}
</style>
