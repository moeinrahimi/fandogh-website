<template>
    <div>
        <h2>ایجاد سرویس </h2>
        <div class="row">
            <div class="col-md-6 col-xs-12" >
                <wizard btn_title="مرحله بعد">
                    <div class="fandogh-form-group">
                        <f-input v-model="service"  styles="input-white input-block input-dashboard" placeholder="نام سرویس را در این قسمت بنویسید"> </f-input>
                    </div>
                    <div class="fandogh-form-group">
                        <f-select v-model="option" :options="service_types" title="انتخاب نوع سرویس"  />
                    </div>

                    <div class="fandogh-form-group">
                       <div class="custom-row">
                           <div style="flex: 3;">
                               <p>
                                   مقدار رم سرویس:
                               </p>
                           </div>
                           <div style="flex: 1" >
                               <span>MB</span>
                           </div>
                           <div style="flex: 3;" >
                               <f-input v-model="ram"  styles="input-white input-block input-dashboard" placeholder="Min:128, Max:2048"> </f-input>
                           </div>
                       </div>
                    </div>

                    <div v-if="option === 'External'" class="margin-top-50">
                        <h2>
                            External Option
                        </h2>
                        <div class="fandogh-form-group">
                            <f-checkbox title="HTTP" id="http" styles="light" v-model="http" />
                        </div>
                        <div class="fandogh-form-group">
                            <f-input v-model="path"  styles="input-white input-block input-dashboard" placeholder="Path"> </f-input>
                        </div>
                        <div class="fandogh-form-group">
                            <f-input v-model="domain"  styles="input-white input-block input-dashboard" placeholder="دامنه خود را وارد نمایید  "> </f-input>
                        </div>
                    </div>

                </wizard>
            </div>
        </div>
    </div>
</template>

<script>
  import FInput from "~/components/elements/input";
  import FButton from "~/components/elements/button";
  import FTable from "~/components/Dashboard/table";
  import FCheckbox from "~/components/elements/checkbox";
  import FSelect from "~/components/elements/select";

  // yaml generator
  import jsyaml from "js-yaml";
  import Wizard from "~/components/Dashboard/wizard";

  export default {
    data() {
      return {
        internal: false,
        image: this.$route.params.image,
        option: "",
        port: "",
        path: "",
        ram: "",
        http: false,
        domain: "",
        service: "",
        service_types: [
          {
            title: 'External'
          },
          {
            title: 'Internal'
          }
        ],
        data: [
          {
            rows: ["NODE_ENV", "Production"]
          }
        ]
      };
    },
    layout: "dashboard",
    watch: {
      service(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value, path: "name" });
      },
      option(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value, path: "kind" });
      },
      http(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value, path: "allow_http" });
      },
      path(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value, path: "path" });
      },
      domains(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value, path: "domains" });
      },
      ram(value, oldValue) {
        this.$store.dispatch("manifestGenerator", { value: value+'Mi', path: "resources.memory" });
      }
    },
    methods: {
      nextStep() {
        this.$router.push("/dashboard/services/create/step2");
      }
    },
    components: {
      FInput,
      FButton,
      FCheckbox,
      FTable,
      FSelect,
      Wizard
    }
  };
</script>

<style scoped lang="stylus">
    .field-description
        font-size: 14px
        color: #b5b5b5
</style>
