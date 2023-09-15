<template>
  <body>
	<div class="wrapper">
		<input checked="checked" class="dots" name="testi" title="slide1" type="radio"> <input class="dots" name="testi" title="slide2" type="radio"> <input class="dots" name="testi" title="slide3" type="radio"> <input class="dots" name="testi" title="slide4" type="radio"> <input class="dots" name="testi" title="slide5" type="radio">
		<div class="mainSlider">
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p class="text">I had an amazing experience at this formal wear store. The staff went above and beyond to help me find the perfect suit for an upcoming event. Their attention to detail and personalized recommendations made the shopping process enjoyable and stress-free.</p>
				<h2>Rowan November</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>This store offers a remarkable selection of high-quality formal wear. I was impressed by the variety of styles, colors, and sizes available. Whether you're looking for a classic tuxedo or a modern suit, they have you covered.

</p>
				<h2>Zubair Matthee</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>What sets this store apart is their exceptional tailoring service. They ensured that my suit fit me like a glove. The tailors are skilled professionals who take pride in their work, resulting in a perfectly tailored outfit that received countless compliments.</p>
				<h2>Codi Jacobs</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Despite the top-notch quality and service, the prices here are reasonable. I was pleasantly surprised by the affordability of their formal wear. You can look stylish and elegant without breaking the bank.</p>
				<h2>Zavier Davids</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/9968247/pexels-photo-9968247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Shopping at this store was a breeze. They have a well-organized layout, making it easy to browse and find what you need. Plus, the checkout process was efficient, and I left with my purchase in no time. It's a one-stop shop for all your formal wear needs.</p>
				<h2>Ronan Smith</h2>
			</div>
		</div>
	</div>

	<div class="ways-to-pay">
		<i></i>
		<i></i>
		<i></i>
	</div>
</body>
</template>

<script>
export default{
    
}
</script>

<style scoped>
*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
}
html, body {
	height: 100%;
}

.wrapper {
	background: rgb(0, 0, 0);
	height: 550px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-flow: row nowrap;
	-webkit-box-align: end;
	align-items: flex-end;
	-webkit-box-pack: center;
	justify-content: center;
	margin: 4rem 0 0;
	margin-bottom: 4rem;
}
.mainSlider {
	position: absolute;
	top: 80px;
	left: 0;
	width: 500%;
	height: auto;
	transition: left 0.4s;
	display: flex;
	flex-flow: row nowrap;
}
.content {
	height: 100%;
	text-align: center;
	display: flex;
	-webkit-box-flex: 1;
	flex: 1;
	flex-flow: column nowrap;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
}
.content h2 {
	font-size: 18px;
	color: #fff;
	font-family: montserrat;
}
.content p {
	font-size: 30px;
	font-family: cookie;
	line-height: 1.7;
	color: #fff;
	margin-top: -20px;
	margin-bottom: 20px;
	max-width: 750px;
}
.img-area img {
	width: 100%;
}
.img-area {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	display: inline-block;
	margin-bottom: 40px;
	border: 5px solid #fff;
}
.dots {
	width: 12px;
	height: 12px;
	margin: 15px 10px;
	z-index: 10;
	outline: 10px solid white;
	outline-offset: -6px;
	cursor: pointer;
	appearance: none;
	backface-visibility: hidden;
	border-radius: 50%;
}
.dots:checked:nth-of-type(1)~.mainSlider {
	left: 0%;
}
.dots:checked:nth-of-type(2)~.mainSlider {
	left: -100%;
}
.dots:checked:nth-of-type(3)~.mainSlider {
	left: -200%;
}
.dots:checked:nth-of-type(4)~.mainSlider {
	left: -300%;
}
.dots:checked:nth-of-type(5)~.mainSlider {
	left: -400%;
}

@media only screen and (max-width: 300px) {
.dots {
display: none !important;
}
.content{
padding: 30px !important;
padding-bottom: 30px !important;
}
.wrapper {
padding-bottom: 30px !important;
}
}

</style>
