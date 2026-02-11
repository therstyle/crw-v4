<script>
  import SectionResumeSkill from './SectionResumeSkill.svelte'
  import elementVisible from '../utils/elementVisible.js'

  let { title, items = [] } = $props()
  let isVisible = $state(false)
</script>

<aside
  class="crw-skills"
  use:elementVisible={{ threshold: 0.1 }}
  oncrwElementVisible={() => (isVisible = true)}
  data-is-visible={isVisible}
>
  <h3>{title}</h3>
  <ul>
    {#each items as skill, index (index)}
      <li id={`skill-${index}`}>
        <SectionResumeSkill {...skill} />
      </li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-skills {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;
    max-width: 264px;
    margin-inline: auto;
    @include mixins.slide-up-on-visible;

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
