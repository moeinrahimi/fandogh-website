<template>
  <div class="row">
    <div class="col-md-6 col-xs-12" >
      <h2>ساخت ایمیج</h2>
      <div class="fandogh-form-group">
        <f-input name="name" v-model="name" styles="input-white input-block input-dashboard" placeholder="نام ایمیج را در این قسمت بنویسید"> </f-input>
      </div>
      <div class="fandogh-form-group">
        <f-input name="version" v-model="version" class="version" styles="input-white input-block input-dashboard" placeholder="ورژن ایمیج را در این قسمت بنویسید"> </f-input>
      </div>
      <div class="fandogh-form-group margin-40">
        <file class="file" id="file" />
      </div>
      <div class="fandogh-form-group margin-top-100">
        <f-button v-if="!loading" @onClick="createImage" styles="red block"  > اتمام ساخت </f-button>
        <progress-bar v-if="loading" :progress="progress"> </progress-bar>
      </div>

    </div>
  </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import File from '~/components/elements/file'
  import {formData} from "~/utils/formData";
  import ProgressBar from '~/components/Dashboard/progress-bar'
  import ErrorReporter from '~/utils/ErrorReporter'

  export default {
    layout: 'dashboard',
    data(){
      return {
        name: '',
        version: '',
        loading: false
      }
    },
    computed:{
      progress(){
        return this.$store.state.progress
      }
    },
    components:{
      FInput,
      FButton,
      File,
      ProgressBar
    },
    methods:{
      createImage(){
        this.loading = true
        this.$store.dispatch('createImage', {name: this.name}).then(res => {

            this.$notify({
              title: res.message,
              time: 3000,
              type: 'success'
            })

          if(this.version.length){

            let fd = formData([
              {
                name: 'version',
                value: this.version
              },
              {
                type: 'image',
                name: 'file'
              }
            ])
            this.$store.dispatch('createImageVersion', {name: this.name, formData: fd}).then(res => {
              this.$notify({
                title: res.message,
                time: 4000,
                type: 'success'
              })
              this.$router.push('/dashboard/images')
            }).catch(e => {
              console.log(e)
              ErrorReporter(e, this.$data, true).forEach(error => {
                this.$notify({
                  title: error,
                  time: 4000,
                  type: 'error'
                })
              })
            })
          } else {
            this.$router.push('/dashboard/images')
          }
        }).catch(e => {
          ErrorReporter(e, this.$data, true).forEach(error => {
            this.$notify({
              title: error,
              time: 4000,
              type: 'error'
            })
          })
        })
      }
    }
  }
</script>