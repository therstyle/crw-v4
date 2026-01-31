<script>
  import SectionContainer from './shared/SectionContainer.svelte'

  let {
    id = null,
    subTitle = null,
    title = null,
    description = null,
  } = $props()

  const hasSubTitle = $derived(subTitle !== null)
  const hasTitle = $derived(title !== null)
  const hasDescription = $derived(description !== null)
</script>

<SectionContainer {id} horzCenter={true} vertCenter={true}>
  <div class="crw-intro">
    <div class="crw-intro__content">
      <header>
        {#if hasSubTitle}
          <span class="crw-intro__sub-title">{subTitle}</span>
        {/if}

        {#if hasTitle}
          <h1 class="crw-intro__title">{@html title}</h1>
        {/if}
      </header>

      {#if hasDescription}
        <div class="crw-intro__description">
          {description}
        </div>
      {/if}
    </div>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-intro {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      max-width: 60vw;
      text-align: center;

      header {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
    }

    &__sub-title {
      color: var(--red);
      font-family: var(--accent-font);
      font-size: 16px;
      text-transform: uppercase;
    }

    &__title {
      font-size: clamp(90px, 16px + 9vw, 150px);
      font-weight: 800;
      line-height: 0.85;
      text-transform: uppercase;
    }
  }
</style>
