<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    <h4>Выберите письмо</h4>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: ['mailId'],
  computed: {
    email() {
      console.log(this.mailId)
      return this.emails.find(e => e.id === parseInt(this.mailId))
    }
  }
}
</script>

<style scoped>

</style>