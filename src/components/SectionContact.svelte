<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import TextCircle from './shared/TextCircle.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionContainer {id} {title}>
  <div class="crw-contact">
    <ul>
      {#each items as item, index (index)}
        <li id={`portfolio-item-${index}`}>
          <TextCircle url={item?.url} title={item?.title} icon={item?.logo} />
        </li>
      {/each}
    </ul>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-contact {
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    ul {
      display: flex;
      gap: var(--space-1);
      justify-content: center;
    }
  }
</style>
