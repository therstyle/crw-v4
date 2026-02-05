<script>
  import SectionContainer from './shared/SectionContainer.svelte'

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
          <article id={`portfolio-item-${index}`} class="crw-portfolio__item">
            <a href={item?.url} target="_blank">
              <img src={item?.image} alt={item?.title} loading="lazy" />
            </a>

            <div class="crw-portfolio__item-info">
              <h3>{item?.title}</h3>
              <p>{@html item?.description}</p>
              <div class="crw-portfolio__item-details">
                <a href={item?.url} target="_blank">View Project</a>
              </div>
            </div>
          </article>
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

  .crw-portfolio {
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-1);
    }

    &__container-main {
      flex: 1;
      display: flex;
      gap: var(--space-1);
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
