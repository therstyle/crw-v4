<script>
  import SectionContainer from './shared/SectionContainer.svelte'

  let {
    id = null,
    subTitle = null,
    title = null,
    description = null,
    video = null,
  } = $props()

  const hasSubTitle = $derived(subTitle !== null)
  const hasTitle = $derived(title !== null)
  const hasDescription = $derived(description !== null)
  const hasVideo = $derived(video !== null)
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

  {#if hasVideo}
    <div class="crw-intro__bg-video">
      <video autoplay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  {/if}
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
      font-size: clamp(40px, 16px + 9vw, 150px);
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

    &__bg-video,
    &__bg-video::after,
    &__bg-video::before {
      content: '';
      position: fixed;
      width: 100%;
      min-height: 100vh;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &__bg-video {
      z-index: -1;

      &::before {
        background: linear-gradient(
          to right,
          rgba(51, 51, 51, 1) 1%,
          rgba(51, 51, 51, 1) 45%,
          rgba(51, 51, 51, 0) 100%
        );
      }

      &::after {
        background: linear-gradient(
          to bottom,
          rgba(51, 51, 51, 0) 75%,
          rgba(51, 51, 51, 0.99) 99%,
          rgba(51, 51, 51, 1) 100%
        );
      }

      video {
        width: 100%;
        min-height: 100vh;
        object-fit: cover;
        margin-left: 15vw;
      }
    }
  }
</style>
