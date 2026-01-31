<script>
  import SectionContainer from './shared/SectionContainer.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionContainer {id} {title} vertCenter={true}>
  <div class="crw-contact">
    <ul>
      {#each items as item, index (index)}
        <li id={`portfolio-item-${index}`}>
          <a href={item?.url} target="_blank">
            <img src={item?.logo} alt={item?.title} />
            <span>{item?.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-contact {
  }
</style>
