<template>
  <div class="card-container">
      <section class="column-1">
        <div class="card-1">
          <div class="card-body1">
            <div class="card-info">
              <h3 class="h31">Formal Wear</h3>
            </div>
          </div>
        </div>
        <div class="card-2">
          <div class="card-body2">
            <div class="card-info">
              <h3 class="h32">New Products coming soon</h3>
            </div>
          </div>
        </div>
      </section>
      <section class="flex-col">
        <div class="card-3-container">
          <div class="card-3">
            <div class="card-body3">
              <div class="card-info-3">
                <h3 class="h33">Welcome to Envy Essential</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="card-4">
            <div class="card-body4">
              <div class="card-info">
                <h3 class="h34">Monthly Sales</h3>
              </div>
            </div>
          </div>
          <div class="card-5">
            <div class="card-body5">
              <div class="card-info">
                <h3 class="h35">Contact Us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="column-1">
        <div class="card-6">
          <div class="card-body6">
            <div class="card-info">
              <h3 class="h36">Learn more about us</h3>
            </div>
          </div>
        </div>
        <div class="card-7 rounded-5">
          <div class="card-body7">
            <div class="card-info">
              <h3 class="h37">Unisex Wear</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
        body{
            padding: 0 !important;
            margin: 0 !important;
        }
      .card-container {
        display: flex;
        flex-direction: row;
        margin-top: 9rem;
        color: rgb(0, 0, 0);
      }
      .flex-1 {
        display: flex;
        gap: 7px;
        margin: 6px;
      }
      .flex-col {
        margin: 6px;
      }

      .h31 {
        font-weight: bold;
        font-size: 40px;
        text-align: center !important;
        margin-top: -1rem;
      }
      .h32 {
        font-weight: bold;
        font-size: 30px;
      }
      .h33 {
        font-weight: bold;
        font-size: 40px;
      }
      .h34 {
        font-weight: bold;
        font-size: 40px;
        text-align: center;
        margin-top: 8px;
      }
      .h35 {
        font-weight: bold;
        font-size: 40px;
      }
      .h36 {
        font-weight: bold;
        font-size: 40px;
        text-shadow: -1px 1px 0 black;
        color: white;
        text-align: right;
      }
      .h37 {
        font-weight: bold;
        font-size: 40px;
        text-align: center;
        margin-top: 8rem;
      }

      .card-body1 {
        background-color: rgb(255, 255, 255);
        width: 23rem;
        height: 29rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid black;
        /* background-image: url(https:i.postimg.cc/HW96LzHM/95559ca9a79f7da23522cb702e5eb2e8.jpg); */
        background-image: url(../assets/1\ \(1\).jpg);
        background-position-x: center;
        background-repeat: no repeat;
        color: #fff;
        image-rendering: optimizeSpeed !important;
      }
      .card-body2 {
        background-color: rgb(255, 255, 255);
        width: 23rem;
        height: 14rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid black;
        /* background-image: url(https:i.postimg.cc/50ZfGJ7h/wp1853889.webp); */
        background-image: url(../assets/2.webp);
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        image-rendering: optimizeSpeed !important;
      }
      .card-body3 {
        background-color: rgb(255, 255, 255);
        width: 44.5rem;
        height: 22rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid black;
        image-rendering: optimizeSpeed !important;
        /* background-image: url(https:i.postimg.cc/PfcXpX21/19-11-12-205-1-min-1024x684.jpg); */
        background-image: url(../assets/3.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
      }
      .card-body4 {
        background-color: rgb(255, 255, 255);
        width: 22rem;
        height: 21rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid rgb(0, 0, 0);
        /* background-image: url(https:/i.postimg.cc/zvYnn0HT/138256028-special-offer-sale-banner-on-black-background-sale-up-to-70-percent-off-big-sale-end-of-se.jpg); */
        background-image: url(../assets/4.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        image-rendering: optimizeSpeed !important;
      }
      .card-body5 {
        background-color: rgb(255, 255, 255);
        width: 22rem;
        height: 21rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid rgb(0, 0, 0);
        /* background-image: url(https:/i.postimg.cc/L4JFJvmn/business-laptop-computer-flatlay.jpg); */
        background-image: url(../assets/5.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        image-rendering: optimizeSpeed !important;
      }
      .card-body6 {
        background-color: rgb(255, 255, 255);
        width: 23rem;
        height: 14rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid rgb(0, 0, 0);
        /* background-image: url(https:i.postimg.cc/FRB0BTLf/photo-1611348586755-53860f7ae57a.jpg); */
        background-image: url(../assets/6.jpg);
        background-position: center;
        background-repeat: no-repeat;
        image-rendering: optimizeSpeed !important;
      }
      .card-body7 {
        background-color: rgb(255, 255, 255);
        width: 23rem;
        height: 29rem;
        border-radius: 12px;
        padding: 1rem;
        border: 5px solid black;
        /* background-image: url(https:/i.postimg.cc/x8JQY1Ff/V-107-2.webp); */
        background-image: url(../assets/7.webp);
        background-position: center;
        background-repeat: no-repeat;
        color: #fff;
        image-rendering: optimizeSpeed !important;
      }
      .card-1 {
        margin: 6px;
      }
      .card-2 {
        margin: 6px;
      }
      .card-3 {
        margin: 6px;
      }
      .card-3 {
        margin: 6px;
      }
      .card-6 {
        margin: 6px;
      }
      .card-7 {
        margin: 6px;
      }
      .column-1 {
        margin: 6px;
      }

      @media only screen and (max-width: 300px) {
        .card-container {
          flex-direction: column;
          margin: auto !important;
          gap: 2rem !important;
        }
        .card-body1 {
          margin: auto !important;
          margin-top: 10rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .card-body2 {
          margin: auto !important;
          margin-top: -2rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .card-body3 {
          margin: auto !important;
          margin-top: -1rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
       
        .card-body4 {
          margin: auto !important;
          margin-top: 1rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .card-body5 {
          margin: auto !important;
          margin-top: 1rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .card-body6 {
          margin: auto !important;
          margin-top: -1rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .card-body7 {
          margin: auto !important;
          margin-top: -2rem !important;
          font-size: 10px !important;
          width: 90% !important;
        }
        .flex-col {
          display: flex !important;
          flex-direction: column;
          margin: 0px;
        }
        .flex-1 {
          display: flex !important;
          flex-direction: column;
          margin: 0px;
        }
        .column-1 {
          display: flex !important;
          flex-direction: column;
          gap: 3rem;
          margin: 0px;
        }
      }
    </style>
