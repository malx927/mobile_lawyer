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
        name="datetimePicker"
        :value="value"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-field
        v-model="client"
        name="client"
        label="委托人"
        placeholder="委托人"
        :rules="[{ required: true, message: '请填写委托人' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker type="time" @confirm="onConfirm" @cancel="showPicker = false" />
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
      showPicker: false,
      name: "",
      telephone: "",
      id_card: "",
      client: ""
    };
  },
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style  scoped>
</style>