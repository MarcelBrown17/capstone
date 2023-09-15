<template>
  <div>
    <div class="top">
      <h1 class="hh1">Products</h1>
      <Modal />
    </div>
    <div class="table-container">
      <table class="responsive-table">
        
        <thead>
          <tr class="table-header">
            <th>Product ID</th>
            <th>Product URL</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="product in products" :key="product.prodID">
            <td class="product">{{ product.prodID }}</td>
            <td class="product">
              <img
                :src="product.prodUrl"
                :alt="product.prodName"
                class="img"
                id="product"
              />
            </td>
            <td class="product">{{ product.prodName }}</td>
            <td class="product">{{ product.quantity }}</td>
            <td class="product">R {{ product.price }}</td>
            <td class="product">{{ product.Category }}</td>
            <td class="buttons">
              <div class="btns">
                <button @click="deleteProduct(product.prodID)" class="delete">
                  Delete
                </button>
               <button class="edit"> <router-link
                  class="editlink"  :to="{ name: 'Edit', params: { id: product.prodID } }">
                
                  Edit
                </router-link></button>
              </div>
            </td>
          </tr>
      
        </tbody>
      </table>
    </div>
  </div>
  <div class="users">
    <h1 class="hh1 px-5 mx-4">Users</h1>
    <table class="user-table">
   
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Password</th>
          <th>User Role</th>
          <th>Email</th>
          <th>User Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="user-body">
        <tr v-for="user in users" :key="user.userID">
          <td class="user">{{ user.userID }}</td>
          <td class="user">{{ user.firstName }}</td>
          <td class="user">{{ user.lastName }}</td>
          <td class="user">{{ user.userPass }}</td>
          <td class="user">{{ user.userRole }}</td>
          <td class="user">{{ user.emailAdd }}</td>
          <td class="user">
            <img
              :src="user.userImage"
              :alt="user.firstName"
              class="img"
              id="user"
            />
          </td>
          <td class="buttons">
              <div class="btns">
                <button @click="deleteUser(user.userID)" class="delete">
                  Delete
                </button>
               <button class="edit"> <router-link
                  :to="`/edit-user/${user.userID}`"
                  class="editlink"
                >
                  Edit
                </router-link></button>
              </div>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Modal from "@/components/add-modal-comp.vue";
import spinner from "./SpinnerComp.vue";
export default {
  components: {
    Modal,
    spinner, 
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(prodID) {
      this.$store.dispatch("ProdDeleted", prodID);
    },

    deleteUser(userID) {
      this.$store.dispatch("UserDeleted", userID);
    },
  },
};
</script>

<style scoped>
.edit {
  width: 5rem;
  background-color: black;
  color: rgb(255, 245, 245);
  height: 3rem;
  margin: auto;
  text-align: center;
  text-decoration: none;
}
.editlink {
 color: white;
  text-decoration: none;
}
.delete {
  width: 5rem;
  background-color: black;
  color: rgb(255, 245, 245);
  height: 3rem;
  margin: auto;
  text-align: center;
  text-decoration: none;
}

.delete:hover {
  transition: 0.5s;
  background-color: white;
  box-shadow: 0 0 10px white;
  color: black;
}
.edit:hover {
  transition: 0.5s;
  background-color: white;
  box-shadow: 0 0 10px white;
  color: black !important;
}
.editlink:hover {
  color: black;
}

.img {
  width: 9rem;
  height: 9rem;
}

.hh1 {
  color: black;
}
.product {
  justify-content: center !important;
  align-content: center !important;
  text-align: center;
}
.responsive-table {
  width: 90%;
  justify-content: center;
  margin: auto;
  text-align: center;
}

tr {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgb(0, 0, 0);
  width: 100%;
}

td {
  color: rgb(0, 0, 0);
  border: 3px solid rgb(0, 0, 0);
  font-family: "Julius Sans One", sans-serif;
}

th {
  color: rgb(0, 0, 0);
  border: 3px solid black;
  font-family: "Julius Sans One", sans-serif;
}

h1 {
  color: rgb(0, 0, 0);
  font-size: 3rem;
}
.btns {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: auto;
 
}
.top{
  margin-top: 3rem;
  margin-left: 5rem;
  padding-bottom: 2rem;
}

.user-table {
  width: 90%;
  justify-content: center;
  margin: auto;
  text-align: center;
}

button {
  border-radius: 10px !important;
}
.users{
  margin-bottom: 2rem;
}

@media only screen and (max-width: 768px) {
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  h1 {
    color: white;
    font-size: 1.9rem;
    border-left: 3px solid black;
  }

  .table-container,
  table {
    overflow-x: auto;
  }

  th,
  td {
    padding: 0.5rem;
  }
  .btns{
    margin-left: 4rem !important;
  }
  
}
</style>
