<template>
  <div>
    <nav-bar :title="title" :isShow="false"></nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="name"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="telephone"
        name="telephone"
        type="tel"
        label="电话"
        placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]"
      />
      <van-field
        v-model="id_card"
        name="id_card"
        label="身份证"
        placeholder="身份证"
        :rules="[{ required: true, message: '请填写身份证' }]"
      />
      <van-field
        v-model="client"
        name="client"
        label="委托人"
        placeholder="委托人"
        :rules="[{ required: true, message: '请填写委托人' }]"
      />
      <van-field
        readonly
        clickable
        name="contract_date"
        :value="contract_date"
        label="合同时间"
        placeholder="点击选择合同时间"
        @click="showCalendar = true"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <van-popup v-model="showCalendar" position="bottom">
      <van-calendar v-model="showCalendar" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" :show-confirm="false"/>
    </van-popup>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      minDate: new Date(),
      maxDate: this.nextYearDate(),
      showCalendar: false,
      name: "",
      telephone: "",
      id_card: "",
      client: "",
      contract_date: "",
    };
  },
  computed: {
    
  },
  methods: {
    nextYearDate(){
      let date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date;
    },
    
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirm(date) {
      const [start, end] = date;
      this.contract_date  = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.showCalendar = false;
    },
  },
  created() {},
  mounted() {}
};
</script>

<style  scoped>
</style>