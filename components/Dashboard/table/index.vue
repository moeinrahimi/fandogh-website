<template>
    <div class="table">
        <div class="table-header">
            <h2>
                ایمیج های شما
            </h2>
        </div>
        <div class="table-content">
            <table cellspacing="0" >
                <tbody>
                    <tr>
                        <th v-for="(name, index) in header" :class="[index%2 ? 'gray-1' : 'white']">{{name}}</th>
                    </tr>
                    <tr v-for="(array, index) in data">
                        <td v-for="(value, jendex) in array" :class="[index%2 !== 0 && jendex%2 === 0 ? 'white' : index%2 === 0 && jendex%2 !== 0 ? 'gray-2': 'gray-1']" v-html="value">  </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
      props:['header', 'data']
    }
</script>

<style lang="stylus" scoped>

    .table
        background-color #fff
        width 100%
        font-family yekan, sans-serif
        td, th
            min-width 220px
            height 90px
            text-align center
            &:last-child
                width 100%

        .table-header
            background-color: #291996;
            display block
            box-sizing border-box
            padding 10px
            text-align center
            border-radius 10px 10px 0 0
            h2
                font-size 16px
                line-height 0
    .white
        background-color #fff
    .gray-1
        background-color  rgba(217,217,217, .2)
    .gray-2
        background-color #F1F3F9
</style>