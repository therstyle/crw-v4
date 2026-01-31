<script>
  import SectionTitle from './SectionTitle.svelte'

  let { id = null, title = null } = $props()

  let isVisible = $state(false)

  const hasTitle = $derived(title !== null)
</script>

<section {id} class="crw-section-container">
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
    min-height: 100dvh;

    --section-container-inner-max-width: 1440px;
    --section-container-inner-padding-inline: var(--space-4);

    &__inner {
      width: 100%;
      max-width: var(--section-container-inner-max-width);
      margin: 0 auto;
      padding-inline: var(--section-container-inner-padding-inline);
    }

    &--section-intro {
      padding: var(--space-8);
      min-height: calc(100dvh - (var(--space-8) * 2));
      width: calc(100% - (var(--space-8) * 2));

      --section-container-inner-padding-inline: 0;
    }
  }
</style>
