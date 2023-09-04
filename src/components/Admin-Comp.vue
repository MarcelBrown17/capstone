<template>
  <div>
    <div class="btns">
      <Modal />
      <h1 class="hh1">Products</h1>
    </div>
    <div class="table-container">
      <table class="responsive-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product URL</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>
              <img :src="product.prodUrl" :alt="product.prodName" class="img" />
            </td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R {{ product.amount }}</td>
            <td>{{ product.Category }}</td>
            <td>
              <div class="btns">
                <button @click="deleteProduct(product.prodID)" class="delete">
                  Delete
                </button>
                <button class="delete">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="users">
    <h1 class="hh1">Users</h1>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>User Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userProfile }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .delete {
      width: 5rem;
    background-color: black;
    color: white;
    height: 3rem;
    font-family: "Julius Sans One", sans-serif;
  }
  
  .delete:hover {
      transition: 0.5s;
      background-color: white ;
      box-shadow: 0 0 10px white;
      color: black;
  }

 
  .btns {
    display: flex;
    flex-direction: column;
  }
  .img {
    width: 18rem;
    height: 12rem;
  }

  .hh1 {
    color: black;
  }
  
  table {
    width: 100%;
  }
  .table {
    margin-top: 50px;
    border: 3px solid black;
    width: 100%;
  }
  
  tr {
    background-color: black;
    border: 3px solid black;
    width: 100%;
  }
  
  td {
    color: white;
    border: 3px solid black;
    font-family: "Julius Sans One", sans-serif;
  
  }
  
  th {
      color: white;
    border: 3px solid black;
    font-family: "Julius Sans One", sans-serif;
  }
  
  .hero {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 40rem;
  }
  
  .hero-info {
    position: relative;
    top: 35%;
  }
  

  @media only screen and (max-width: 768px) {
      html, body {
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
        font-family: "Monoton", cursive;
      }
  
      .table-container,table {
        overflow-x: auto;
      }

  
      th, td {
        padding: 0.5rem;
      }
  }
</style>
