<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionPortfolioItem from './SectionPortfolioItem.svelte'

  let { id = null, title = null, items = [] } = $props()

  let scrollItems = $state(2)
  let currentItem = $state(0)
  let scrollItemRef = []

  const totalItems = $derived(items.length)

  function prev() {
    if (currentItem <= scrollItems) {
      currentItem = 0
    } else {
      currentItem = currentItem - scrollItems
    }
    scrollToCurrent()
  }

  function next() {
    if (currentItem >= scrollItems) {
      currentItem = scrollItems
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
</script>

<SectionContainer {id} {title} innerFillHeight={true}>
  <div
    class="crw-portfolio"
    data-current-item={currentItem}
    style:--portfolio-scroll-items={scrollItems}
  >
    <div class="crw-portfolio__container">
      <div class="crw-portfolio__container-left">
        <button
          href={`#portfolio-item-${currentItem}`}
          aria-label="Prev"
          class="crw-portfolio__button crw-portfolio--button-prev"
          aria-disabled={currentItem === 0 ? true : null}
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

      <div class="crw-portfolio__container-right">
        <button
          href={`#portfolio-item-${currentItem + scrollItems}`}
          aria-label="Next"
          class="crw-portfolio__button crw-portfolio--button-next"
          aria-disabled={currentItem >= totalItems - scrollItems}
          onclick={next}
        ></button>
      </div>
    </div>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';
  @use '../styles/mixins.scss';

  .crw-portfolio {
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-2);
      min-height: 100%;
    }

    &__container-main {
      flex: 1;
      display: flex;
      gap: var(--space-2);
      overflow: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__item-wrapper {
      flex: 1;
      min-width: calc(50% - (var(--space-2) / var(--portfolio-scroll-items)));
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
