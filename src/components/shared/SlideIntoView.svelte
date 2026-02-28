<script lang="ts">
  import elementVisible from '../../utils/elementVisible.ts'

  let { settings = {}, elementType = 'div' } = $props()
  let isVisible = $state(false)
</script>

<svelte:element
  this={elementType}
  use:elementVisible={settings}
  oncrwElementVisible={() => (isVisible = true)}
  class="crw-slide-into-view"
  data-is-visible={isVisible}
>
  <slot />
</svelte:element>

<style lang="scss">
  @use '../../styles/vars';
  @use '../../styles/mixins';

  .crw-slide-into-view {
    @include mixins.slide-up-on-visible;
  }
</style>
