<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-4">Personal Info</h1>
        </v-col>
        <v-card class="mx-auto pa-9 rounded-xl">
          <InfoForm field="First Name" valueEdit="John"/>
          <InfoForm field="Last Name" valueEdit="Smith"/>
          <InfoForm field="Gender" valueEdit="Male"/>
          <InfoForm field="Email" valueEdit="johnsmith@mail.com"/>
          <InfoForm field="Phone" valueEdit="1 202 555 0191"/>
          <InfoForm field="Birthday date" valueEdit="1990-12-10"/>
          <InfoForm field="Zip" valueEdit="91752"/>
        </v-card>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import InfoForm from '../../components/person.info.form';

export default {
  name: "LessorBiddingPage",
  title: "Bidding",

  data: () => ({
    date: null,
    menu: false,
  }),
  components: {
    InfoForm,
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  computed: {
    
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
