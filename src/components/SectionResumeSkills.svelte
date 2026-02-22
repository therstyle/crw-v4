<script>
  import SectionResumeSkill from './SectionResumeSkill.svelte'
  import SlideIntoView from './shared/SlideIntoView.svelte'

  let { title = null, items = [] } = $props()

  const sortedItems = items.sort((a, b) => a.title.localeCompare(b.title))
  const hasTitle = $derived(title !== null)
  const hasSkills = $derived(sortedItems.length > 0)
</script>

<SlideIntoView settings={{ threshold: 0.1 }}>
  <aside class="crw-skills">
    {#if hasTitle}
      <h3>{title}</h3>
    {/if}

    {#if hasSkills}
      <ul>
        {#each sortedItems as skill, index (index)}
          <li id={`skill-${index}`}>
            <SectionResumeSkill {...skill} />
          </li>
        {/each}
      </ul>
    {/if}
  </aside>
</SlideIntoView>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-skills {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;
    max-width: 260px;
    margin-inline: auto;

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 24px;
    }

    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-1);
    }
  }
</style>
