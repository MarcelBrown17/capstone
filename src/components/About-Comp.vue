<template>
 <body>
    <div class="page-container">
    <div class="black-background">
      <div class="founder-image">
        <!-- image displays here -->
      </div>
      <div class="text">
        <h3 class="font">sdfgbgfdf</h3>
        <h3 class="text">sdfgbgfdf</h3>
        <h3 class="text">sdfgbgfdf</h3>
        <h3 class="text">sdfgbgfdf</h3>
      </div>
    </div>
    <div class="image-container">
      <img
        src="https://i.postimg.cc/QxdJjD11/Screenshot-2023-09-05-120442.png"
        alt="Background Image"
      />
    </div>
  </div>
  <div class="body">
    <div class="location">
      <div class="img">
      </div>
      <div class="info">
        <h3>Location</h3>
        <br />
        <hr color="white" width="160rem" />
        <br />
        <p>
          We are situated in South Africa but HQ/Headquarters are situated in
          Yokohama in Japan and have multiple branches situated globally
        </p>
      </div>
    </div>
    <div class="staff">
      <div class="info-2">
        <h3>About the People</h3>
        <br />
        <hr color="white" width="160rem" />
        <br />
        <p>
          The people of Yokohama, a vibrant Japanese city, embody a fusion of
          tradition and modernity. With a diverse populace, they exude warmth
          and courtesy, embracing innovation while cherishing their cultural
          heritage. From bustling markets to serene parks, Yokohama's residents
          create a dynamic tapestry of urban life, fostering a harmonious blend
          of past and present.
        </p>
      </div>
      <div class="img-2">
       
      </div>
    </div>
    <div class="goals">
      <div class="img-3">
       
      </div>
      <div class="info-3">
        <h3>Goals</h3>
        <br />
        <hr color="white" width="160rem" />
        <br />
        <p>
          Yokohama Drifters, committed to authenticity, aims to exclusively
          offer Japanese-made automobiles. With a focus on quality, innovation,
          and supporting local industry, they cater to enthusiasts seeking
          reliable vehicles while promoting Japan's automotive excellence.
        </p>
      </div>
    </div>
    <div class="company">
      <div class="info-4">
        <h3>About the Company</h3>
        <br />
        <hr color="white" width="160rem" />
        <br />
        <p>
          The Company was founded in 2017 and gained title of most loved
          dealership by the locals of Yokohama and by the fans of JDM (Japanese
          Domestic Market) around the world and was founded by Zubair Matthee &
          Marcel Brown
        </p>
      </div>
      <div class="img-4">
       
      </div>
    </div>
  </div>
 </body>
</template>
<script></script>
<style scoped>

body{
    margin-top:5rem;
}
.page-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin-top: rem;
}

.black-background {
  flex: 0.5;
  background-color: #000;
  color: white;
  padding-left: 5rem;
  padding-top: 2rem;
}

.image-container {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.image-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.founder-image{
border-radius:50%;
background-image: url();
height:30px;
width: 30px;
}

.location {
  background-color: black;
  display: flex;
  height: 15rem;
}

.staff {
  background-color: black;
  display: flex;
  height: 15rem;
}

.goals {
  background-color: black;
  display: flex;
  height: 15rem;
}
.company {
  background-color: black;
  display: flex;
  height: 15rem;
}

.info {
  color: white;
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Julius Sans One", sans-serif;
}

.info-2 {
  color: white;
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Julius Sans One", sans-serif;
}

.info-3 {
  color: white;
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Julius Sans One", sans-serif;
}

.info-4 {
  color: white;
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Julius Sans One", sans-serif;
}

.location-symbol {
  width: 9rem;
  margin-top: 3rem;
}

.img {
  background-image: url(https://i.postimg.cc/TYDVKmGz/peakpx-11.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70rem;
}
.img-2 {
  background-image: url(https://i.postimg.cc/W4zWfnQd/peakpx-12.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70rem;
}

.img-3 {
  background-image: url(https://i.postimg.cc/TYkV1W7x/peakpx-13.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70rem;
}

.img-4 {
  background-image: url(https://i.postimg.cc/LX50WMbK/peakpx-14.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70rem;
}

@media only screen and (max-width: 300px) {
  h1 {
    color: white;
    font-size: 1.9rem;
    font-family: "Monoton", cursive;
  }
  .hero-info {
    position: relative;
    top: 35%;
    right: 0%;
  }

  .hero {
    height: 30rem;
    background-position-x: -10rem;
  }

  .location {
    background-color: black;
    display: flex;
    flex-direction: column;
    height: 25rem;
  }

  .staff {
    background-color: black;
    display: flex;
    height: 35rem;
    flex-direction: column-reverse;
  }

  .goals {
    background-color: black;
    display: flex;
    height: 35rem;
    flex-direction: column;
  }
  .company {
    background-color: black;
    display: flex;
    height: 25rem;
    flex-direction: column-reverse;
  }

  .img {
    background-image: url(https://i.postimg.cc/TYDVKmGz/peakpx-11.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
  }
  .img-2 {
    background-image: url(https://i.postimg.cc/W4zWfnQd/peakpx-12.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
    margin-top: 2rem;
  }

  .img-3 {
    background-image: url(https://i.postimg.cc/TYkV1W7x/peakpx-13.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
    margin-top: 2rem;
  }

  .img-4 {
    background-image: url(https://i.postimg.cc/LX50WMbK/peakpx-14.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
  }

  .info {
    color: rgb(255, 255, 255);
    width: auto;
    display: flex;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
    font-family: "Julius Sans One", sans-serif;
    flex-direction: column;
  }

  .info-2 {
    color: white;
    width: auto;
    display: flex;
    margin-top: 4rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: "Julius Sans One", sans-serif;
  }

  .info-3 {
    color: white;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
    font-family: "Julius Sans One", sans-serif;
  }
  .info-4 {
    color: white;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
    font-family: "Julius Sans One", sans-serif;
  }

  .body {
    display: flex;
    flex-direction: column;
  }
}
</style>
