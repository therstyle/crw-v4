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

      <div class="crw-intro__bottom-content">
        {#if hasDescription}
          <div class="crw-intro__description">
            {description}
          </div>
        {/if}

        <a href="#portfolio" class="crw-intro__scroll-down"
          ><span>Scroll</span></a
        >
      </div>
    </div>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  @keyframes scroll-down {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-12px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .crw-intro {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      max-width: 1000px;
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

    &__bottom-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
    }

    &__description {
      text-wrap: balance;
    }

    &__scroll-down {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-family: var(--accent-font);
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--white);
      text-decoration: none;

      --scroll-down-icon-size: 32px;

      &::before {
        content: '';
        display: block;
        width: var(--scroll-down-icon-size);
        height: var(--scroll-down-icon-size);
        mask-image: url('/images/icon-mouse.svg');
        mask-repeat: no-repeat;
        mask-size: cover;
        background: currentColor;
        animation: scroll-down linear 1.5s infinite;
      }
    }
  }
</style>
