#!/usr/bin/env node
import {cwd} from 'node:process'
import {writeFileSync} from 'node:fs'
import {join} from "pathe";
import {green} from "kolorist";
import consola from "consola";
// @ts-ignore
import minimist from "minimist";

const argv = minimist(process.argv.slice(2))
const [vueVersion,cssLoader,filePath] = argv._
const userRoot = cwd()
console.log(vueVersion,cssLoader)
const vue3BaseCode = `<template>
 <div>

 </div>
</template>

<script lang="ts" setup>

</script>

<style lang="{lang}" scoped>

</style>`

const vue2BaseCode = `<template>
 <div>

 </div>
</template>

<script>
 export default {
  name:'',
  data(){
     return{}
  },
  methods:{
      
  }
 }
</script>

<style lang="{lang}" scoped>

</style>`

const code = {
    vue3:vue3BaseCode,
    vue2:vue2BaseCode
}

const resultCode = code[vueVersion].replace('{lang}',cssLoader)

//filePath, such as './index.vue', will write the corresponding code to your 'index.vue' file
writeFileSync(join(userRoot,filePath),resultCode)

consola.success(green('vue code is created!!!'))



