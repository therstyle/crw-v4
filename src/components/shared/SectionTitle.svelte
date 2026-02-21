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
  <h2 data-is-visible={isVisible}>
    <span>{title}</span>
  </h2>
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

    --crw-section-title-padding-inline-start: var(--space-4);
    //--crw-section-title-background-offset: var(--space-2);

    @include mixins.max(sm) {
      --crw-section-title-padding-inline-start: var(--space-1);
      //--crw-section-title-background-offset: var(--space-1);
    }

    //&::before {
    //  content: '';
    //  grid-area: main;
    //  width: calc(100% + (var(--space-4) * 2) + var(--main-nav-width));
    //  background: hsla(0, 0%, 100%, 0.1);
    //  transition: var(--global-transition);
    //  transition-delay: 0.3s;
    //  translate: calc(
    //      -100% -
    //        (
    //          var(--main-nav-width) +
    //            var(--crw-section-title-padding-inline-start) + var(--space-1)
    //        )
    //    )
    //    0;
    //  opacity: 0;
    //}

    //&[data-is-visible='true'] {
    //  &::before {
    //    opacity: 1;
    //    translate: calc(
    //        (var(--crw-section-title-padding-inline-start) - var(--space-1)) *
    //          -1
    //      )
    //      0;
    //    width: calc(
    //      100% + var(--crw-section-title-padding-inline-start) +
    //        var(--crw-section-title-background-offset)
    //    );
    //  }
    //}

    h2 {
      font-size: 88px;
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
      grid-area: main;
      display: inline-grid;
      grid-template-areas: 'main';
      grid-template-columns: calc(
        100% + var(--crw-title-background-padding-inline)
      );
      grid-template-rows: calc(
        100% + var(--crw-title-background-padding-block)
      );
      place-items: center;
      margin-block-end: calc(var(--crw-title-background-padding-block) * 2);

      --crw-title-background-padding-inline: var(--space-4);
      --crw-title-background-padding-block: var(--space-2);

      @include mixins.max(sm) {
        font-size: 36px;

        --crw-title-background-padding-inline: var(--space-2);
        --crw-title-background-padding-block: var(--space-1);
      }

      &::before {
        content: '';
        transition: var(--global-transition);
        grid-area: main;
        width: 100%;
        height: 100%;
        background: var(--med-gray-alpha);
        opacity: 0;
        translate: -200% 0;

        @include mixins.prefers-motion {
          transition-delay: 0.6s;
        }
      }

      &[data-is-visible='true'] {
        &::before {
          opacity: 1;
          translate: -20% 0;
          border-radius: 50px;
          width: 200%;
        }
      }

      > span {
        grid-area: main;
        z-index: 2;
      }
    }
  }
</style>
