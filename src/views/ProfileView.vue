<template>
  <NavBarComp />
  <div>
    <div>
      <h1 class="text-center p-3 heading-text text-white">My Account</h1>
      <div class="card user-card">
        <div class="text-center">
          <img
            src="https://i.postimg.cc/mrpKtmZG/Screenshot-2023-09-07-124437-removebg-preview.png"
            :alt="$store.state.user?.firstName"
            class="img-fluid mb-5"
            style="max-width: 50%; border-radius: 50%"
          />
          <h2 class="text-black">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite>{{ $store.state.user?.userRole }}</cite>
        </div>
        <div>
          <div class="card mb-5 p-3 info-card">
            <span
              ><strong>User ID: </strong>{{ $store.state.user?.userID }}</span
            >
            <br />
            <br />
            <span
              ><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span
            >
            <br />
            <br />
          </div>
          <div class="d-flex">
            <!-- <UpdateUserComp class="btn edit-btn" /> -->
            <button
              type="submit"
              class="btn del-btn"
              id="delete"
              @click="UserDeleted(user.userID)"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>
<script>
import NavBarComp from "../components/NavBar-Comp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    NavBarComp,
    FooterComp,
  },
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData);
    }
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
};
</script>
<style scoped>
.img-fluid {
  width: 6rem;
  margin: auto;
}

.text-center {
  margin-top: 2rem;
}
.user-card {
  margin: auto !important;
  width: 30%;
  border: 3px solid black !important;
}

.d-flex{
justify-content: center !important;
margin-bottom: 2rem;
}

#delete {
  background-color: black;
  margin: auto;
  /* margin-bottom: 2rem; */
}

.info-card {
  border-top: 3px solid black !important;
  border-right: none !important;
  border-left: none !important;
  border-bottom: 3px solid black !important;
  border-radius: 0;
  margin-right: 10px !important;
  margin-left: 10px !important;
}

@media only screen and (max-width: 300px) {
  .card{
    width: 90%;
    margin-top: 5rem !important;
  }
}
</style>
