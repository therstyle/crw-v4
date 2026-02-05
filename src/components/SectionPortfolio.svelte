<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionPortfolioItem from './SectionPortfolioItem.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionContainer {id} {title}>
  <div class="crw-portfolio">
    <div class="crw-portfolio__container">
      <div class="crw-portfolio__container-left">
        <button
          aria-label="Prev"
          class="crw-portfolio__button crw-portfolio--button-prev"
        ></button>
      </div>

      <div class="crw-portfolio__container-main">
        {#each items as item, index (index)}
          <div class="crw-portfolio__item-wrapper">
            <SectionPortfolioItem {...item} />
          </div>
        {/each}
      </div>

      <div class="crw-portfolio__container-right">
        <button
          aria-label="Next"
          class="crw-portfolio__button crw-portfolio--button-next"
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
    }

    &__container-main {
      flex: 1;
      display: flex;
      gap: var(--space-2);
      overflow: auto;
    }

    &__item-wrapper {
      flex: 1;
      min-width: calc(50% - var(--space-1));
      display: flex;
    }

    &__button {
      display: flex;
      width: 48px;
      height: 48px;
      border: none;
      border-radius: 50%;
    }
  }
</style>
