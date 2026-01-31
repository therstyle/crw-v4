<script>
  import SectionTitle from './SectionTitle.svelte'

  let { id = null, title = null } = $props()

  let isVisible = $state(false)

  const hasTitle = $derived(title !== null)
</script>

<section {id} class={`crw-section-wrapper crw-section-wrapper--section-${id}`}>
  {#if hasTitle}
    <SectionTitle {title} {isVisible} />
  {/if}

  <div class="crw-section-wrapper__inner">
    <div class="section-wrapper__content">
      <slot />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/vars';

  .crw-section-wrapper {
    --section-wrapper-inner-max-width: 1440px;
    --section-wrapper-inner-padding-inline: var(--space-4);

    &__inner {
      width: 100%;
      max-width: var(--section-wrapper-inner-max-width);
      margin: 0 auto;
      padding-inline: var(--section-wrapper-inner-padding-inline);
    }

    &--section-intro {
      padding: var(--space-8);
      min-height: calc(100dvh - (var(--space-8) * 2));
      width: calc(100% - (var(--space-8) * 2));

      --section-wrapper-inner-padding-inline: 0;
    }
  }
</style>
