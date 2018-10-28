<template>
   <div class="services">
    <div class="active-plan-header">
  <h2>جزئیات حساب شما</h2>
  </div>

      <div class="service-container">
  <service :plan="activePlan.plan" :configs="activePlan.configs" :progressBar="60"/>
  </div>
  <div class="active-plan-header">
  <h2>انتخاب پلن</h2>
  </div>
  <div class="all-plans">
    <service v-for="service in services" :plan="service.plan" :configs="service.configs" :key="service.plan.title" />

    </div>
  </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import FButton from '~/components/elements/button'
    import FDate from '~/utils/date'
    import Alert from '~/components/Dashboard/alert'
    import service from "~/components/Dashboard/service";

    export default {
      layout: 'dashboard',
      name : 'plans',
      async asyncData({store, route, redirect}){
        try {
        //  await store.dispatch('getImages')
        } catch (e) {
          if(e.status === 401){
            redirect('/user/login')
          }
        }
      },
      data(){
    return {
      activePlan: {
        plan: {
          icon: "blimp.png",
          title: "مفتی",
          price: "رایگان",
          iconFirst: true,
          hasInfo: false,
        },
        configs: [{ title: "RAM", value: "400MB", icon: "ram.png" }]
      },
      services: [
        {
          plan: { icon: "bicycle.png", title: "مفتی", price: "رایگان" },
          configs: [
            { title: "CPU", value: "Unknown", icon: "cpu.png" },
            { title: "RAM", value: "400MB", icon: "ram.png" },
            { title: "STORAGE", value: "2GB", icon: "storage.png" }
          ]
        },
        {
          plan: { icon: "sail-boat.png", title: "پلن 1", price: "99,000" },
          configs: [
            { title: "CPU", value: "0.5Core", icon: "cpu.png" },
            { title: "RAM", value: "1GB", icon: "ram.png" },
            { title: "STORAGE", value: "5GB", icon: "storage.png" }
          ]
        },
        {
          plan: {
            icon: "blimp-active.png",
            title: "پلن 2",
            price: "190,000",
            isActive: true
          },
          configs: [
            { title: "CPU", value: "1Core", icon: "cpu.png" },
            { title: "RAM", value: "2GB", icon: "ram.png" },
            { title: "STORAGE", value: "10GB", icon: "storage.png" }
          ]
        },
        {
          plan: { icon: "helicopter.png", title: "پلن 3", price: "390,000" },
          configs: [
            { title: "CPU", value: "2Core", icon: "cpu.png" },
            { title: "RAM", value: "4GB", icon: "ram.png" },
            { title: "STORAGE", value: "20GB", icon: "storage.png" }
          ]
        },
        {
          plan: { icon: "rocket.png", title: "پلن 4", price: "1,500,000" },
          configs: [
            { title: "CPU", value: "8Core", icon: "cpu.png" },
            { title: "RAM", value: "16GB", icon: "ram.png" },
            { title: "STORAGE", value: "40GB", icon: "storage.png" }
          ]
        },
        {
          plan: { icon: "truck.png", title: "پلن 5", price: "تماس بگیرید" },
          configs: [
            { title: "CPU", value: "-", icon: "cpu.png" },
            { title: "RAM", value: "-", icon: "ram.png" },
            { title: "STORAGE", value: "-", icon: "storage.png" }
          ]
        }
      ]
    };
      },
      components:{
        FTable,
        FButton,
        service
      },
      computed:{

      },
      methods:{

      }
    }
</script>


<style lang="stylus" scoped>
.services {
  background-color: #f0f4f8;
}

.active-plan-header 
  padding: 45px 80px;
  @media screen and (max-width:630px)
    padding 0 


.all-plans 
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 80px;
  margin-bottom: 50px;
  border-radius: 10px;
  border: solid 1px #e7e8ea;
  background-color: #fff;
  @media (max-width: 820px) {
    margin auto
  }



.service-container 
  width 624px
  border-radius: 10px;
  border: solid 1px #e7e8ea;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap  wrap
  margin: 0 80px;
  @media screen and (max-width:630px)
    width 100%
    margin: auto;
  @media (max-width: 820px) {
    margin auto
  }


</style>