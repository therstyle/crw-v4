<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionResumeTimeline from './SectionResumeTimeline.svelte'
  import SectionResumeSkills from './SectionResumeSkills.svelte'

  let { id = null, resume = null, skills = null } = $props()

  const hasResume = $derived(resume !== null)
  const hasSkills = $derived(skills !== null)
</script>

<SectionContainer {id} title={resume?.title} titleMarginBottom={true}>
  <div class="crw-resume">
    <div class="crw-resume__content">
      {#if hasResume}
        <SectionResumeTimeline {...resume} />
      {/if}

      {#if hasSkills}
        <SectionResumeSkills {...skills} />
      {/if}
    </div>
  </div>
</SectionContainer>

<style lang="scss">
  @use '../styles/vars.scss';
  @use '../styles/mixins.scss';

  .crw-resume {
    &__content {
      display: flex;

      @include mixins.max(md) {
        flex-direction: column;
        gap: 7vw;
      }
    }
  }
</style>
