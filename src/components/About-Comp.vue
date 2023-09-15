<template>
 <body>
  <div class="page-container">
      <div class="black-background">
      <h1 class="heading">About Us</h1>
        <div class="founder-image">
          <!-- image displays here -->
        </div>
        <div class="text">
          <h2 class="font">The founder of Envy Essentials</h2>
        </div>
      </div>
      <div class="image-container">
        <img
          src="https://i.postimg.cc/HxpPWPgG/B4-B7-FEE2-89-A5-4099-8516-1-FB59-CEF86-E6-scaled.jpg"
          alt="Background Image" class="Background Image"
        />
      </div>
    </div>
    <div class="body">
      <div class="location">
        <div class="img"></div>
        <div class="info">
          <h3>Location</h3>
          <br />
          <br />
          <p class="p-text">
            We are situated in South Africa but HQ/Headquarters are situated in
    Paris in France and have multiple branches situated globally
          </p>
        </div>
      </div>
      <div class="staff">
        <div class="info-2">
          <h3>About the People</h3>
          <br />

          <br />
          <p class="p-text">
            The people of France, a vibrant French city, embody a fusion of
      tradition and modernity. With a diverse populace, they exude warmth
      and courtesy, embracing innovation while cherishing their cultural
      heritage. From bustling markets to serene parks, Paris's
      residents create a dynamic tapestry of urban life, fostering a
      harmonious blend of past and present.
          </p>
        </div>
        <div class="img-2"></div>
      </div>
      <div class="goals">
        <div class="img-3"></div>
        <div class="info-3">
          <h3>Goals</h3>
          <br />
          <br />
          <p class="p-text">
            Envy Essentials, committed to authenticity, aims to exclusively
            offer formal wear, With a focus on quality,
            innovation, and supporting local industry, they cater to enthusiasts
            seeking reliable formal wear while promoting France's fashion
            excellence.
          </p>
        </div>
      </div>
      <div class="company">
        <div class="info-4">
          <h3>About the Company</h3>
          <br />
          <br />
          <p class="p-text">
            The Company was founded in 2015 and gained the title of the most loved
      clothing store by the locals of Paris and by the fans of Fashion around the world and was founded by
     Marcel Brown
          </p>
        </div>
        <div class="img-4"></div>
      </div>
    </div>
  </body>
    
  </template>
<script></script>
<style scoped>

.Background Image{
  background-position: center !important;
}

.heading{
  margin-top: 5rem;
  margin-left: 7rem;
}
      body {
        margin: 0;
      }
      .page-container {
        display: flex;
        height: 100vh;
        overflow-x: hidden;
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

      .founder-image {
        background-image: url(https://i.postimg.cc/sf5mq9r1/c12-marcel-brown-1.jpg);
        background-position-x: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: 2rem;
        height: 50%;
        width: 80% !important;
      }

      .location {
        background-color: black;
        display: flex;
        height: 20rem;
        text-align: center;
      }

      .staff {
        background-color: black;
        display: flex;
        height: 20rem;
        text-align: center;
      }

      .goals {
        background-color: black;
        display: flex;
        height: 20rem;
        text-align: center;
      }
      .company {
        background-color: black;
        display: flex;
        height: 20rem;
        text-align: center;
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

      .img {
        background-image: url(https://i.postimg.cc/3w9hjqY1/location.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 70rem;
        height: 20rem;
      }
      .img-2 {
        background-image: url(https://i.postimg.cc/Ghg2FH3V/peopleagain.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 70rem;
        height: 20rem;
      }

      .img-3 {
        background-image: url(https://i.postimg.cc/8cX7zbyk/goal-again.webp);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 70rem;
        height: 20rem;
      }

      .img-4 {
        background-image: url(https://i.postimg.cc/zvk24yG1/pexels-alexander-suhorucov-6457579-1024x683.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        width: 70rem;
        height: 20rem;
      }

      .text {
        margin-left: 5px;
        margin-top: 2em !important;
      }
      .p-text {
        padding: 0 40px !important;
      }

      @media only screen and (max-width: 300px) {
        body {
          margin: 0% !important;
          padding: 0% !important;
        }
        h1 {
          color: white;
          font-size: 1.9rem;
          font-family: "Monoton", cursive;
        }

        .location {
          background-color: black;
          display: flex;
          flex-direction: column;
          height: 30rem;
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
          height: 30rem;
          flex-direction: column-reverse;
        }

        .img {
          width: auto;
          height: 25rem;
        }
        .img-2 {
          width: auto;
          height: 25rem;
        }

        .img-3 {
          width: auto;
          height: 25rem;
        }

        .img-4 {

          width: auto;
          height: 25rem !important;
padding-bottom:10rem !important ;
        }

        .info {
          color: rgb(255, 255, 255);
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Julius Sans One", sans-serif;
          flex-direction: column;
        }

        .info-2 {
          color: white;
          width: auto;
          display: flex;

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

          align-items: center;
          justify-content: center;
          font-family: "Julius Sans One", sans-serif;
        }
        .info-4 {
          color: white;
          width: auto;
          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;
          font-family: "Julius Sans One", sans-serif;
        }
        .p-text {
          text-align: center;
          padding: 20px !important;
          margin-bottom: 1rem !important;
        }
        .text {
          padding: 0px !important;
          margin: 0px 0px !important;
           margin-top: -7rem !important;
           margin-left: 1rem !important;
        }

        .founder-image {
          height: 20rem !important;
          width: 15rem !important;
          margin-right: 11rem !important;
          margin-top: -4rem;
        }

        h2 {
          margin-top: 4rem !important;
          padding-right: 13rem;
        }
        h1 {
          margin-top: 7rem !important;
          margin-left: 3.5rem !important;
        }
        h3 {
          margin-top: 2rem !important;
          margin-bottom: -2rem !important;
        }
        .black-background {
          display: grid !important;
          grid-template-columns: repeat(1fr);
          padding-left: 2rem !important;
        }
        .image-container {
          display: none !important;
        }
        .page-container {
          background-color: #000;
          padding: 0px !important;
          margin: 0px !important;
        }
      }
    </style>