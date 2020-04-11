<template>
  <footer>
    <ul>
      <li>PROVE OF CONCEPT VUE COMPOSITION API</li>
      <li>&copy; {{ year }}</li>
      <li>
        <a href="https://randomuser.me/" rel="noopener">API</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  setup() {
    const year = new Date().getFullYear()

    return {
      year
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000;

  &:hover {
    text-decoration: none;
  }
}
footer {
  margin: 1rem 0;
  text-align: center;
}
li + li {
  &:before {
    content: '-';
    margin: 0 5px;
  }
}
li,
ul {
  display: inline;
}
ul {
  list-style: none;
}
</style>
