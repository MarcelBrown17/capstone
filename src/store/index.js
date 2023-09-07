import { createStore } from "vuex";

const YDUrl = "https://envyessentials.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    cart: [], // Initialize an empty cart array to store selected products
  },
  getters: {
    // Define getters if needed
  },
  mutations: {
    setMessage: (state, message) => {
      state.message = message;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
    setSpinner(state, products) {
      state.showSpinner = products;
    },
    // Add a mutation to add a product to the cart
    addToCart(state, product) {
      const cartItem = state.cart.find((item) => item.prodID === product.prodID);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
  },
  actions: {
    getUsers: async (context) => {
      try {
        const res = await fetch(`${YDUrl}users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
        context.commit("setSpinner", false);
      } catch (error) {
        context.commit("setSpinner", true);
        console.error("Error fetching users:", error);
      }
    },
    async getUser(context, id) {
      try {
        const res = await fetch(`${YDUrl}users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const { results, err } = await res.json();
        if (results) {
          context.commit("setUsers", results);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    },
    getProducts: async (context) => {
      try {
        const res = await fetch(`${YDUrl}products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await res.json();
        context.commit("setProducts", products);
        context.commit("setSpinner", false);
      } catch (error) {
        context.commit("setSpinner", true);
        console.error("Error fetching products:", error);
      }
    },
    getProduct: async (context, id) => {
      try {
        const response = await fetch(`${YDUrl}product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const { result } = await response.json();
        context.commit("setProduct", result[0]);
      } catch (error) {
        console.error(error);
      }
    },
    addToCart(context, product) {
      context.commit("addToCart", product);
    },
  },
});
