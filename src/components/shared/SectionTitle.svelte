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
    display: inline-grid;
    grid-template-areas: 'main';
    margin-right: auto;
    padding-inline-start: var(--crw-section-title-padding-inline-start);
    @include mixins.slide-up-on-visible;

    &--margin-bottom {
      margin-block-end: var(--space-8);
    }

    --crw-section-title-padding-inline-start: var(--space-5);
    --crw-section-title-background-offset: var(--space-2);

    @include mixins.max(sm) {
      --crw-section-title-padding-inline-start: var(--space-3);
      --crw-section-title-background-offset: var(--space-1);
    }

    &::before {
      content: '';
      grid-area: main;
      width: calc(100% + (var(--space-4) * 2) + var(--main-nav-width));
      background: hsla(0, 0%, 100%, 0.1);
      transition: var(--global-transition);
      transition-delay: 0.3s;
      translate: calc(
          -100% -
            (
              var(--main-nav-width) +
                var(--crw-section-title-padding-inline-start) + var(--space-1)
            )
        )
        0;
      opacity: 0;
    }

    &[data-is-visible='true'] {
      &::before {
        opacity: 1;
        translate: calc(
            (var(--crw-section-title-padding-inline-start) - var(--space-1)) *
              -1
          )
          0;
        width: calc(
          100% + var(--crw-section-title-padding-inline-start) +
            var(--crw-section-title-background-offset)
        );
      }
    }

    h2 {
      font-size: 88px;
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
      grid-area: main;
      z-index: 2;

      @include mixins.max(sm) {
        font-size: 36px;
      }
    }
  }
</style>
