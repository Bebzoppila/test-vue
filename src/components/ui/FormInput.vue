<template>
  <div class="form__item">
    <label class="form__item-text" :for="RandomId">{{ lable_text }}</label>
    <input
      v-model.trim="valueInput"
      class="form__item-input"
      :id="RandomId"
      :placeholder="placeHolder"
      :type="type"
    />
    <span :class="valid && 'form__item-help--active'" class="form__item-help"
      >Введено не корректное значение</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      RandomId: "",
      valueInput: "",
      valid: false
    };
  },
  created() {
    this.RandomId = Math.random();
  },
  emits: ["ChangeValue"],
  props: {
    formDateKey: {
      type: String
    },
    lable_text: {
      type: String,
      default: "Введите"
    },
    pattern: {
      type: RegExp
    },
    placeHolder: {
      type: String,
      default: "Введите что то"
    },
    formDateKey: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    }
  },
  computed: {},
  methods: {
    ChangeValues(emit_value, valid) {
      this.$emit("ChangeValue", { key: this.formDateKey, value: emit_value });
      this.valid = valid;
    }
  },

  watch: {
    valueInput() {
      this.pattern.test(this.valueInput)
        ? this.ChangeValues(this.valueInput, false)
        : this.ChangeValues("", true);
    }
  }
};
</script>
