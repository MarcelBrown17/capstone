<template>
<body>
    <div class="contact-container">
      <h1 class="fw-bold" id="header">Contact Us</h1>
      <form
        class="contact-form"
        action="https://formspree.io/f/xeqbjwzr"
        method="POST"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            name="name"
            required placeholder="Name"
          />
        </div>
        <div class="form-group">
            <label for="lastName">Surname</label>
            <input
              type="text"
              id="lastName"
              class="form-control"
              name="lastName"
              required placeholder="Surname"
            />
          </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="email"
            name="email"
            required placeholder="Email"
          />
        </div>
        <div class="form-group">
            <label for="Reason">Reason for contacting us.</label>
            <input
              type="text"
              id="Reason"
              class="form-control"
              name="Reason"
              required placeholder="Reason for contacting us."
            />
          </div>
          <div class="form-group">
            <label for="name">Country</label>
            <input
              type="text"
              id="name"
              class="form-control"
              name="name"
              required
              placeholder="Country"
            />
          </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            class="form-control"
            name="message"
            required placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" class="contact-button">Send</button>
      </form>
      <div class="faq-container">
        <div class="faq-row">
            <div class="faq-box">
                <h3>DISPATCH & DELIVERY</h3>
                <p>How do I get free delivery on Envy Essentials orders?</p>
                <p>What are Envy Essentials' delivery options?</p>
                <p class="text">Can my Envy Essentials order be dispatched internationally?</p>
            </div>
            <div class="faq-box">
                <h3>RETURNS</h3>
                <p>How do I return my Envy Essentials order?</p>
                <p>What is Envy Essentials' returns policy?</p>
                <p class="text">Where is my refund?</p>
            </div>
            <div class="faq-box">
                <h3>ENVY ESSENTIALS MEMBERSHIP</h3>
                <p>What is Envy Essentials Membership?</p>
                <p>How do I become an Envy Essentials Member?</p>
                <p class="text">How do I get the most out of NRC or NTC?</p>
            </div>
        </div>
        <div class="faq-row">
          <div class="faq-box">
            <h3>ORDERS</h3>
            <p>Were is my Envy Essentials order?</p>
            <p>Can I change or cancel my Envy Essentials order?</p>
            <p class="text">What payment options can I use on Envy Essentials orders?</p>
        </div>
        <div class="faq-box">
            <h3>PRODUCT INFO</h3>
            <p>How do I get Envy Essentials' newest product releases?</p>
            <p>How do I find the right size for Envy Essentials products?</p>
            <p class="text">Do Envy Essentials products have a warranty?</p>
        </div>
        <div class="faq-box">
            <h3>CORPORATE</h3>
            <p>Where can I get more info about Envy Essentials, Inc.?</p>
            <p class="text">Where is the Envy Essentials store closest to me?</p>
        </div>
        </div>
    </div>
      <div class="contact-icon-container">
        <div class="contact-box">
          <i class="fas fa-shopping-cart"></i>
            <h3>Products</h3>
            <p>011 256 0701</p>
            <p>24 hours a day</p>
            <p>7 days a week</p>
        </div>
        <div class="contact-box">
          <i class="fas fa-phone-alt"></i>
            <h3>NRC</h3>
            <p>+31 (0) 20 5820542</p>
            <p>10:00–19:00</p>
            <p>Monday–Friday</p>
        </div>
        <div class="contact-box">
          <i class="fas fa-comments"></i>
            <h3>Chat with us</h3>
            <p>24 hours a day</p>
            <p>7 days a week</p>
        </div>
    </div>
    </div>
  </body>
  </template>
  <script>

</script>

<style scoped>
.faq-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 3rem !important;
  }

  .text{
    padding-bottom: 2rem;
  }
  .faq-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
  }
  .faq-box {
      width: 30%;
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 30px;
      margin: 10px;
      text-align: center;
      border-radius: 5px;
      height: 70% !important;
      text-align: center;
      
  }

  h3 {
      font-size: 18px;
      margin-top: 0;
  }

  p {
      font-size: 14px;
  }
  #header{
      font-size: 55px !important;
      margin-top: 0px;
  }
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.contact-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #000;
  min-height: 100vh;
  margin-top:6rem ;
}
.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
 
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-group label {
  font-weight: bold;
  margin-top: 10px;
}
.form-group input{
  padding: 25px;
  border: 0;
  border-radius: 0%;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  outline: none;
  background-color: #ffffff;
  width: 90%;
font-size: 15px;
  align-items: center !important;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: grey;
}
.contact-button {
  grid-column: span 2;
  background-color: #000;
  color: #ffffff;
  border: 0;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
  margin-top: 25px !important;
  margin-bottom: 3rem !important;
  width: 90px;
  margin: auto;
}
.contact-button:hover {
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
  border: 3px solid black;
}
label {
  font-size: 25px !important;
  margin-left: 7px;
}
.form-group textarea{
  padding: 18px;
  border: 0;
  border-radius: 0%;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  outline: none;
  background-color: #ffffff;
  margin-left: 4px !important;
  font-size: 16px;
  width:90%;
  align-items: center !important;
}
  .contact-icon-container {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      margin-bottom: 15px !important;
  }
  .contact-box {
      text-align: center;
  }
  .contact-box i {
      font-size: 36px;
      margin-bottom: 10px;
  }
@media only screen and (max-width: 300px) {
.contact-form {
display: flex !important;
flex-direction: column !important;
}
.form-group input { 
width: 50% !important;
margin: auto !important;
margin-top: 1rem !important;
}

.form-group textarea { 
width: 50% !important;
margin: auto !important;

}
label { 
/* display: none; */
font-size: large
!important;
margin-left:46px  !important;
}
#header{
font-size: 40px!important;
}
.contact-icon-container{
display: flex !important;
flex-direction: column !important;
gap: 2rem;
}

.faq-row{
display: flex !important;
flex-direction: column !important;
gap: 2rem;

}
.faq-box{
margin: auto !important;
width: 70%;

}
}
</style>