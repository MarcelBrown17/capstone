<template>
  <body>
	<div class="wrapper">
		<input checked="checked" class="dots" name="testi" title="slide1" type="radio"> <input class="dots" name="testi" title="slide2" type="radio"> <input class="dots" name="testi" title="slide3" type="radio"> <input class="dots" name="testi" title="slide4" type="radio"> <input class="dots" name="testi" title="slide5" type="radio">
		<div class="mainSlider">
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, eius. Consequatur, et eum fuga debitis, incidunt quia!</p>
				<h2>Someone Famous 1</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, eius. Consequatur, et eum fuga debitis, incidunt quia!</p>
				<h2>Someone Famous 2</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, eius. Consequatur, et eum fuga debitis, incidunt quia!</p>
				<h2>Someone Famous 3</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, eius. Consequatur, et eum fuga debitis, incidunt quia!</p>
				<h2>Someone Famous 4</h2>
			</div>
			<div class="content">
				<div class="img-area"><img alt="" src="https://images.pexels.com/photos/9968247/pexels-photo-9968247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nisi, eius. Consequatur, et eum fuga debitis, incidunt quia!</p>
				<h2>Someone Famous 5</h2>
			</div>
		</div>
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
	height: 400px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-flow: row nowrap;
	-webkit-box-align: end;
	align-items: flex-end;
	-webkit-box-pack: center;
	justify-content: center;
	margin: 67px 0 0;
	margin-bottom: 2rem;
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

</style>
