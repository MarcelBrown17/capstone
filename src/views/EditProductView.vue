<template>
  <NavBarComp/>
  <div>
    <div class="edit-Div">
      <h1 class="h1">Edit</h1>
      <router-link to="/admin" class="head"
        ><button class="button">Back</button></router-link
      >
      <form @submit.prevent="editProduct" class="edit-form">
        <input type="text" v-model="edit.prodName" placeholder="Name" />
        <input type="number" v-model="edit.quantity" placeholder="Quantity" />
        <input type="number" v-model="edit.price" placeholder="Amount" />
        <input type="text" v-model="edit.Category" placeholder="Category" />
        <input type="text" v-model="edit.prodUrl" placeholder="Image URL" />
        <button type="submit" class="btn">Save</button>
      </form>
    </div>
  </div>
  <br>
  <FooterComp/>
</template>

<script>
import NavBarComp from '@/components/NavBar-Comp.vue'
import FooterComp from '../components/Footer-Comp.vue'
export default {
  components: {
    NavBarComp,
    FooterComp
  },
  data() {
    return {
      edit: {
        prodID: this.id,
        prodName: "",
        quantity: "",
        price: "",
        Category: "",
        prodUrl: ""
      },
    };
  },
  props: ["id"],
  methods: {
    editProduct() {
      this.$store
        .dispatch("saveEdit", this.edit)
        .then(() => {
          // this.$router.push("/admin");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style scoped>

.h1 {
  color: #ffffff;
  font-family: "Cinzel", serif;

}

.head {
  color: #ffffff;
}

.btn {
  color: #ffffff;
}
.button,.btn {
  background-color: black;
  color: white;
  border: 1px solid;
  height: 2.4rem;
  width: 6rem;
  margin-top: 2rem;
  font-family: "Cinzel", serif;

}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  margin-top: 2rem;
  width: 25rem;
}

body {
  background-color: black;
  height: 100vh !important;
}

.button:hover, .btn:hover {
  background-color: white;
  color: black;
  transition: 0.5s;
  box-shadow: 0 0 5px white;
}

@media only screen and (max-width:300px){
  input {
    width: 15rem;
  }
}
</style>
