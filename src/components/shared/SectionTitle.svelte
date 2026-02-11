<script>
  import elementVisible from '../../utils/elementVisible'

  let { title = null, titleMarginBottom = false } = $props()

  let isVisible = $state(false)
</script>

<header
  class="crw-section-title"
  class:crw-section-title--margin-bottom={titleMarginBottom}
  use:elementVisible
  oncrwElementVisible={() => (isVisible = true)}
  data-is-visible={isVisible}
>
  <h2>{title}</h2>
</header>

<style lang="scss">
  @use '../../styles/vars';
  @use '../../styles/mixins';

  .crw-section-title {
    padding: 15px 20px 20px var(--space-4);
    padding-block-start: 0;
    @include mixins.slide-up-on-visible;

    @include mixins.max(sm) {
      padding-inline-start: var(--space-2);
    }

    &--margin-bottom {
      margin-block-end: var(--space-8);
    }

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
