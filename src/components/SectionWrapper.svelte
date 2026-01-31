<script>
  import {onMount} from "svelte";

  let {
    id = null
  } = $props()

  let isVisible = $state(false)
</script>

<section id={id}>
  <slot />
</section>

<style lang="scss">
  @use '../styles/vars';

  section {
    padding: var(--space-8);
    min-height: calc(100dvh - (var(--space-8) * 2));
    width: calc(100% - (var(--space-8) * 2));
  }
</style>
