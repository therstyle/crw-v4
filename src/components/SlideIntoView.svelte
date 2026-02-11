<script>
  import elementVisible from '../utils/elementVisible'

  let { settings = {} } = $props()
  let isVisible = $state(false)
</script>

<div
  use:elementVisible={settings}
  oncrwElementVisible={() => (isVisible = true)}
  class="crw-slide-into-view"
  data-is-visible={isVisible}
>
  <slot />
</div>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-slide-into-view {
    @include mixins.slide-up-on-visible;
  }
</style>
