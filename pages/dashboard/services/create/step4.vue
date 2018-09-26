<template>
    <div>
        <h2>مرحله پایانی </h2>
        <div class="row">
            <div class="col-md-6 col-xs-12" >

                <div class="row flex">
                    <div class="col-md-4">
                        <f-input v-model="mount_path"  styles="input-white input-block input-dashboard" placeholder="Mount Path"> </f-input>
                    </div>
                    <div class="col-md-4">
                        <f-input v-model="sub_path"  styles="input-white input-block input-dashboard" placeholder="Sub Path"> </f-input>
                    </div>

                    <div class="col-md-4">
                        <f-button @onClick="addPath" styles="blue block" > افزودن به جدول</f-button>
                    </div>
                </div>
                <div class="fandogh-form-group margin-top-100">
                    <f-button styles="red block"  > عملیات دیپلوی </f-button>
                </div>
            </div>
            <div class="col-md-6 col-xs-12" >
                <f-table :small="true" :header="header" :data="envsData"  title="env" :actions="[{title:`<img src='/icons/ic-delete.svg' /> `, action:'delete'}]" />
            </div>
        </div>
    </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FTable from '~/components/Dashboard/table'
  import FCheckbox from '~/components/elements/checkbox'
  import MultiSelect from '~/components/Dashboard/multiselect'
  export default {
    layout: 'dashboard',
    data(){
      return {
        image: this.$route.params.image,
        header: ['نام متغییر', 'مقدار متغیر', 'مخفی'],
        mount_path: '',
        sub_path: '',
        volume_mounts: [
        ]
      }
    },
    components:{
      FInput,
      FButton,
      FCheckbox,
      FTable,
      MultiSelect
    },
    computed:{
      envsData(){
        return this.$dataTable({rows: this.volume_mounts, length: 2, props: ['mount_path', 'sub_path' ], id: 'mount_path'})
      }
    },
    methods:{
      delete(name){
        this.volume_mounts = this.volume_mounts.filter(item => item.mount_path !== name)
      },
      addPath(){
        this.volume_mounts.push(
          {mount_path: this.mount_path, sub_path: this.sub_path}
        )
      }
    },
    watch:{
      volume_mounts(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'spec.volume_mounts'})
      },
    }
  }
</script>

<style scoped lang="stylus">
    .field-description
        font-size: 14px
        color: #b5b5b5
</style>