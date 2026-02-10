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
  @use '../../styles/mixins';

  .crw-section-title {
    padding: 15px 20px 20px var(--space-4);
    padding-block-start: 0;
    margin-block-end: var(--space-8);

    h2 {
      font-size: 88px;
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;

      @include mixins.max(sm) {
        font-size: 36px;
      }
    }
  }
</style>
