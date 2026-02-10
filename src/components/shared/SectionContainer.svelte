<script>
  import SectionTitle from './SectionTitle.svelte'

  let {
    id = null,
    title = null,
    horzCenter = false,
    vertCenter = false,
    innerFillHeight = false,
    titleMarginBottom = false,
  } = $props()

  let isVisible = $state(false)

  const hasTitle = $derived(title !== null)
</script>

<section
  {id}
  class="crw-section-container"
  class:crw-section-container--horz-center={horzCenter}
  class:crw-section-container--vert-center={vertCenter}
  class:crw-section-container--inner-fill-height={innerFillHeight}
  class:crw-section-container--has-title={hasTitle}
>
  {#if hasTitle}
    <SectionTitle {title} {isVisible} {titleMarginBottom} />
  {/if}

  <div class="crw-section-container__inner">
    <div class="crw-section-container__content">
      <slot />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../styles/vars';
  @use '../../styles/mixins';

  .crw-section-container {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    //scroll-margin: var(--space-2);

    --section-container-inner-max-width: 1440px;
    --section-container-inner-padding-inline: var(--space-4);

    @include mixins.max(sm) {
      --section-container-inner-padding-inline: var(--space-1);
    }

    &__inner {
      width: 100%;
      max-width: var(--section-container-inner-max-width);
      margin: 0 auto;
      padding-inline: var(--section-container-inner-padding-inline);
    }

    &--vert-center {
      justify-content: center;
    }

    &--horz-center {
      align-items: center;
    }

    &--inner-fill-height {
      .crw-section-container__inner {
        flex: 1;
      }

      .crw-section-container__content {
        display: flex;
        min-height: 100%;
      }
    }

    &--has-title {
      padding-top: var(--space-5);
    }
  }
</style>
