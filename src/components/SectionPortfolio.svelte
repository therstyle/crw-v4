<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionPortfolioItem from './SectionPortfolioItem.svelte'
  import SlideIntoView from './SlideIntoView.svelte'

  let { id = null, title = null, items = [] } = $props()

  let currentItem = $state(0)
  let scrollItemRef = $state([])
  let isMobile = $state(null)

  let scrollItems = $derived(isMobile ? 1 : 2)
  const totalItems = $derived(items.length)
  const disablePrev = $derived(currentItem === 0 ? true : null)
  const disableNext = $derived(currentItem >= totalItems - scrollItems)

  function prev() {
    if (currentItem <= scrollItems) {
      currentItem = 0
    } else {
      currentItem = currentItem - scrollItems
    }
    scrollToCurrent()
  }

  function next() {
    if (currentItem > totalItems) {
      currentItem = 0
    } else {
      currentItem = currentItem + scrollItems
    }
    scrollToCurrent()
  }

  function scrollToCurrent() {
    scrollItemRef[currentItem].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  $effect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    isMobile = mediaQuery.matches

    const handler = (e) => {
      isMobile = e.matches
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  })
</script>

<SectionContainer {id} {title} innerFillHeight={true}>
  <div
    class="crw-portfolio"
    data-current-item={currentItem}
    style:--portfolio-scroll-items={scrollItems}
    data-is-mobile={isMobile}
    data-scroll-items={scrollItems}
  >
    <SlideIntoView>
      <div class="crw-portfolio__container">
        <div class="crw-portfolio__container-prev">
          <button
            href={`#portfolio-item-${currentItem}`}
            aria-label="Prev"
            class="crw-portfolio__button crw-portfolio--button-prev"
            aria-disabled={disablePrev}
            onclick={prev}
          ></button>
        </div>

        <div class="crw-portfolio__container-main">
          {#each items as item, index (index)}
            <div
              bind:this={scrollItemRef[index]}
              class="crw-portfolio__item-wrapper"
            >
              <SectionPortfolioItem {...item} />
            </div>
          {/each}
        </div>

        <div class="crw-portfolio__container-next">
          <button
            href={`#portfolio-item-${currentItem + scrollItems}`}
            aria-label="Next"
            class="crw-portfolio__button crw-portfolio--button-next"
            aria-disabled={disableNext}
            onclick={next}
          ></button>
        </div>
      </div>
    </SlideIntoView>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';
  @use '../styles/mixins.scss';

  .crw-portfolio {
    display: flex;
    align-items: center;

    --portfolio-items-max-width: calc(100% / var(--portfolio-scroll-items));
    --portfolio-items-gap: var(--space-2);
    --portfolio-items-total-gap: calc(
      var(--portfolio-items-gap) / var(--portfolio-scroll-items)
    );
    --portfolio-items-min-width: calc(
      var(--portfolio-items-max-width) - var(--portfolio-items-total-gap)
    );

    &[data-scroll-items='1'] {
      --portfolio-items-max-width: 100%;
      --portfolio-items-gap: 0;
      --portfolio-items-min-width: 100%;
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-2);
      min-height: 100%;

      @include mixins.max(md) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          'main main'
          'prev next';
      }
    }

    &__container-prev {
      @include mixins.max(md) {
        grid-area: prev;
        align-self: start;
        justify-self: end;
      }
    }

    &__container-next {
      @include mixins.max(md) {
        grid-area: next;
        align-self: start;
      }
    }

    &__container-main {
      flex: 1;
      display: flex;
      gap: var(--portfolio-items-gap);
      overflow: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
      grid-area: main;

      @include mixins.max(md) {
        align-self: end;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__item-wrapper {
      flex: 1;
      min-width: var(--portfolio-items-min-width);
      display: flex;
      scroll-snap-align: start;
    }

    &__button {
      display: flex;
      width: 48px;
      height: 48px;
      border: none;
      border-radius: 50%;
      background: var(--white);
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      &::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        margin: auto;
        background: currentColor;
        mask-image: url('/images/icon-caret.svg');
        mask-repeat: no-repeat;
        mask-size: cover;
      }

      &[aria-disabled='true'] {
        opacity: 0.5;
        pointer-events: none;
      }
    }

    &--button-next {
      rotate: 180deg;
    }
  }
</style>
