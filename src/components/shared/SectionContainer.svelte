<script>
  import SectionTitle from './SectionTitle.svelte'

  let {
    id = null,
    title = null,
    horzCenter = false,
    vertCenter = false,
  } = $props()

  let isVisible = $state(false)

  const hasTitle = $derived(title !== null)
</script>

<section
  {id}
  class="crw-section-container"
  class:crw-section-container--horz-center={horzCenter}
  class:crw-section-container--vert-center={vertCenter}
>
  {#if hasTitle}
    <SectionTitle {title} {isVisible} />
  {/if}

  <div class="crw-section-container__inner">
    <div class="section-container__content">
      <slot />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../styles/vars';

  .crw-section-container {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;

    --section-container-inner-max-width: 1440px;
    --section-container-inner-padding-inline: var(--space-4);

    &__inner {
      width: calc(100% - (var(--section-container-inner-padding-inline) * 2));
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
  }
</style>
