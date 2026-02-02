<script>
  import { onMount } from 'svelte'

  let { title = null } = $props()

  let isVisible = $state(false)
</script>

<header class="crw-section-title">
  <h2>{title}</h2>
</header>

<style lang="scss">
  @use '../../styles/vars';

  .crw-section-title {
    padding: 15px 20px 20px var(--space-4);

    h2 {
      font-size: 88px;
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
    }
  }
</style>
