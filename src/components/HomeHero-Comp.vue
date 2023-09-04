<template>
  <div class="card-container">
    <section class="column-1">
      <div class="card-1">
        <div class="card-body1">
          <div class="card-info">
            <h3>Hi there</h3>
          </div>
        </div>
      </div>
      <div class="card-2">
        <div class="card-body2">
          <div class="card-info">
            <h3>Hi there</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="flex-col">
      <div class="card-3">
        <div class="card-body3">
          <div class="card-info-3">
            <h3>Hi there</h3>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="card-4">
          <div class="card-body4">
            <div class="card-info">
              <h3>Hi there</h3>
            </div>
          </div>
        </div>
        <div class="card-5">
          <div class="card-body5">
            <div class="card-info">
              <h3>Hi there</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="column-1">
      <div class="card-6">
        <div class="card-body6">
          <div class="card-info">
            <h3>Hi there</h3>
          </div>
        </div>
      </div>
      <div class="card-7 rounded-5">
        <div class="card-body7">
          <div class="card-info">
            <h3>Hi there</h3>
          </div>
        </div>
      </div>
    </section>
    <router-link to="/signin"><button>thr</button></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  color: white;
}

.flex-1 {
  display: flex;
  gap: 7px;
  margin: 6px;
}

.flex-col {
  margin: 6px;
}
.card-body1 {
  background-color: black;
  width: 23rem;
  height: 27rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body2 {
  background-color: black;
  width: 23rem;
  height: 10rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body3 {
  background-color: black;
  width: 44.5rem;
  height: 20rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body4 {
  background-color: black;
  width: 22rem;
  height: 17rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body5 {
  background-color: black;
  width: 22rem;
  height: 17rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body6 {
  background-color: black;
  width: 23rem;
  height: 12rem;
  border-radius: 12px;
  padding: 1rem;
}
.card-body7 {
  background-color: black;
  width: 23rem;
  height: 25rem;
  border-radius: 12px;
  padding: 1rem;
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

.card-6 {
  margin: 6px;
}

.card-7 {
  margin: 6px;
}

.column-1 {
  margin: 6px;
}
</style>
