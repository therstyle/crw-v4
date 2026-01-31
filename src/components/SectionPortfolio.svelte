<script>
  import SectionContainer from './shared/SectionContainer.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionContainer {id} {title}>
  <div class="crw-portfolio">
    {#each items as item, index (index)}
      <article id={`portfolio-item-${index}}`} class="crw-portfolio__item">
        <a href={item?.url} target="_blank">
          <img src={item?.image} alt={item?.title} />
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
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-portfolio {
  }
</style>
