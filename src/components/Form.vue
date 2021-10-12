<template>
  <form @submit.prevent="Send" class="form">
    <FormInput
      v-for="form_item in form_inputs"
      :key="form_item.key"
      :lable_text="form_item.label"
      :pattern="form_item.pattern"
      :placeHolder="form_item.placeHolder"
      :formDateKey="form_item.form_date_name"
      :type="form_item.typeInput"
      @ChangeValue="UpdateFormDateValues"
    ></FormInput>

    <FormSelect
      :options="select_values"
      dateFormKey="language"
      @UpdateSelectValue="UpdateFormDateValues"
      text="Язык"
    ></FormSelect>

    <FormCheckBox
      dateFormKey="conditions"
      @UpdateCheckBoxValue="UpdateFormDateValues"
    ></FormCheckBox>

    <button :disabled="!DisabledButtons" class="form__btn">
      Зарегистрироваться
    </button>
  </form>
</template>

<script>
import FormInput from "./ui/FormInput.vue";
import FormSelect from "./ui/FormSelect.vue";
import FormCheckBox from "./ui/FormCheckBox.vue";
import SendToBack from "../api/SendToBack";
export default {
  components: {
    FormInput,
    FormSelect,
    FormCheckBox
  },
  data() {
    return {
      form_date: {
        name: "",
        email: "",
        phone: "",
        language: "",
        conditions: ""
      },
      form_inputs: [
        {
          id: 1,
          label: "Имя",
          placeHolder: "Введите Ваше имя",
          pattern: /^([a-zа-яё -]+|\d+)$/i,
          typeInput: "text",
          form_date_name: "name"
        },
        {
          id: 2,
          label: "Email",
          placeHolder: "Введите Ваше email",
          pattern: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
          typeInput: "text",
          form_date_name: "email"
        },
        {
          id: 3,
          label: "Номер телефона",
          placeHolder: "Введите Ваше номер телефона",
          pattern: /^(\s*)?(\+)?([-()+]?\d[- _():=+]?){11}(\s*)?$/,
          typeInput: "text",
          form_date_name: "phone"
        }
      ],
      select_values: [
        { id: 1, text: "Русский", value: "RUS" },
        { id: 2, text: "Английский", value: "ANG" },
        { id: 3, text: "Китаский", value: "CH" },
        { id: 4, text: "Испанский", value: "SP" }
      ]
    };
  },
  computed: {
    DisabledButtons() {
      return Object.values(this.form_date).every(
        element => element.toString().length > 0
      );
    }
  },

  methods: {
    UpdateFormDateValues({ key, value }) {
      this.form_date[key] = value;
    },
    Send() {
      this.DisabledButtons && SendToBack(this.form_date);
    }
  }
};
</script>
