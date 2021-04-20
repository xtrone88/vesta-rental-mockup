<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-4">Personal Info</h1>
        </v-col>
        <v-card class="mx-auto pa-16 rounded-xl">
          <InfoForm class="pr-16 pl-16" field="First Name" valueEdit="John" type="text"/>
          <InfoForm class="pr-16 pl-16" field="Last Name" valueEdit="Smith" type="text"/>
          <InfoForm class="pr-16 pl-16" field="Gender" valueEdit="Male" type="text"/>
          <InfoForm class="pr-16 pl-16" field="Email" valueEdit="johnsmith@mail.com" type="text"/>
          <InfoForm class="pr-16 pl-16" field="Phone" valueEdit="1 202 555 0191" type="text"/>
          <InfoForm class="pr-16 pl-16" field="Birthday date" valueEdit="1990-12-10" type="date"/>
          <InfoForm class="pr-16 pl-16" field="Zip" valueEdit="91752" type="text"/>
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
