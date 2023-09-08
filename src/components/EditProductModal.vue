<template>
    <b-modal v-model="showModal" title="Edit Product">
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="productName"
            v-model="editedProduct.prodName"
          />
        </div>
        <div class="form-group">
          <label for="productQuantity">Quantity</label>
          <input
            type="number"
            class="form-control"
            id="productQuantity"
            v-model="editedProduct.quantity"
          />
        </div>
        <div class="form-group">
          <label for="productPrice">Price</label>
          <input
            type="number"
            class="form-control"
            id="productPrice"
            v-model="editedProduct.price"
          />
        </div>
        <!-- Add more fields as needed -->
  
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </b-modal>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
      showModal: Boolean,
    },
    data() {
      return {
        editedProduct: {},
      };
    },
    watch: {
      product: {
        handler(newVal) {
          this.editedProduct = { ...newVal };
        },
        immediate: true,
      },
    },
    methods: {
      updateProduct() {
        this.$emit("update", this.editedProduct);
      },
    },
  };
  </script>
  