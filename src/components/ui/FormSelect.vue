<template>
  <div class="form__item">
    <p class="form__item-text">{{ text }}</p>
    <div @click="selectIsOpen = !selectIsOpen" 
    :class="selectIsOpen && 'select--active'"
    class="select ">
      <img class="select__arrow" src="../../img/arrow.png" alt="Стрелочечка" />
      <p class="select__title">{{ activ_options || text }}</p>
      <ul
        :class="selectIsOpen && 'select__content--active'"
        class="select__content "
      >
        <li
          v-for="opdion_item in options"
          :key="opdion_item.id"
          @click="UpdateSelectValue(opdion_item.value, opdion_item.text)"
          class="select__content-item"
        >
          {{ opdion_item.text }}
        </li>
      </ul>
    </div>
    <span class="form__item-help">Введено не корректное значение</span>
  </div>
</template>

<script>
export default {
  props: {
    dateFormKey: {
      type: String
    },
    text: {
      type: String,
      default: "Выберите значение"
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      selectIsOpen: false,
      activ_options: ""
    };
  },
  methods: {
    UpdateSelectValue(value, text_value) {
      this.$emit("UpdateSelectValue", { key: this.dateFormKey, value: value });
      this.activ_options = text_value;
    }
  }
};
</script>
