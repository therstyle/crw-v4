<script>
  import { onMount } from 'svelte'

  let { title = null } = $props()

  let isVisible = $state(false)
</script>

<header>
  <h2>{title}</h2>
</header>

<style lang="scss">
  @use '../styles/vars';

  h2 {
    font-size: 8.8rem;
    font-weight: 800;
    line-height: 1;
  }
</style>
