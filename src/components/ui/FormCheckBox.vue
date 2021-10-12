<template>
  <div class="form__item">
    <div class="checkbox">
      <input
        class="checkbox__input"
        id="checkbox"
        placeholder="Введите Ваше имя"
        type="checkbox"
        v-model="checbox"
      />
      <label class="subtitle checkbox__text" for="checkbox"
        >Принимаю
        <a class="subtitle__link" href="">условия</a> использования</label
      >
    </div>
    <span class="form__item-help">Введено не корректное значение</span>
  </div>
</template>

<script>
export default {
  props: {
    dateFormKey: {
      type: String
    }
  },
  data() {
    return {
      checbox: false
    };
  },
  watch: {
    checbox(new_val) {
      new_val
        ? this.$emit("UpdateCheckBoxValue", {
            key: this.dateFormKey,
            value: new_val
          })
        : this.$emit("UpdateCheckBoxValue", {
            key: this.dateFormKey,
            value: ""
          });
    }
  }
};
</script>
