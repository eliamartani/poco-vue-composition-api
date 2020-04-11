<template>
  <div class="profile">
    <div class="profile__base" :class="{ 'profile__base--loading': !userData }">
      <div v-if="userData">
        <img
          :src="userData.picture.large"
          :alt="name"
          loading="lazy"
          width="128"
          height="128"
        />
        <h1>{{ name }}</h1>
        <p>{{ userData.dob.age }} years old</p>
        <p>{{ userData.email }}</p>
        <p>{{ userData.cell }}</p>
      </div>
      <Loading v-else />
    </div>
    <div class="profile__options">
      <button :disable="!userData" @click="handleClick">
        Find another person
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from '@vue/composition-api'
import { get } from '@/services/profile'

export default {
  components: {
    Loading: () => import('./Loading')
  },
  setup() {
    const userData = ref(null)
    const name = computed(() =>
      userData.value
        ? `${userData.value.name.first} ${userData.value.name.last}`
        : ''
    )
    const fetchData = async () => {
      userData.value = null

      try {
        const user = await get()

        userData.value = user
      } catch (err) {
        throw new Error(err)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      handleClick: fetchData,
      name,
      userData
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  background: #5fafc7;
  border: 0;
  border-radius: 0;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 5px;
}

img {
  background: #fff;
  border-radius: 50%;
  border: 10px #fff solid;
  margin-top: -74px;
}

h1 {
  color: #186c86;
  font-size: 2rem;
  margin: 1rem 0;
}

header {
  background: #ea4c89;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 20rem;
}

p {
  color: #000;
  font-size: 1.2rem;

  & + p {
    margin-top: 0.5rem;
  }
}

.profile {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 1rem 0;
  width: 100%;

  &__base {
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 2rem 2rem;
    max-width: 30rem;
    min-height: 19rem;
    text-align: center;
    width: 100%;

    &--loading {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
  }

  &__options {
    margin-top: 2rem;
  }
}
</style>
