<script>
  import SectionResumeTimelineEntry from './SectionResumeTimelineEntry.svelte'

  let { items = [] } = $props()
</script>

<div class="crw-timeline">
  {#each items as item, index (index)}
    <SectionResumeTimelineEntry {...item} />
  {/each}
</div>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-timeline {
    max-width: 60vw;
    margin: 0 7vw;
    position: relative;

    @include mixins.max(md) {
      margin-inline-end: 0;
      max-width: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 100%;
      background: var(--light-gray);
    }

    > :first-child {
      padding-block-start: 0;
    }
  }
</style>
