<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <h1 class="title">Регистрация</h1>
      <p class="subtitle">
        Уже есть аккаунт?
        <a class="subtitle__link" href="">Войти</a>
      </p>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  name: "App",
  components: {
    Form
  }
};
</script>

<style lang="sass" src="./styles/main.sass"></style>
