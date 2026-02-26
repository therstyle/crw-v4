<script lang="ts" module>
  import type { SectionResumeSkillProps } from './SectionResumeSkill.svelte'

  interface Resume {
    title: string
    items: ResumeItems[]
  }

  interface ResumeItems {
    year: number
    company: string
    location: string
    logo: {
      image: string
      dark?: boolean
    }
    jobTitle: string
    details: string[]
  }

  interface Skills {
    title: string | null
    items: SectionResumeSkillProps[]
  }

  export interface SectionResumeProps {
    id: string | null
    title?: string | null
    resume: Resume | null
    skills: Skills | null
  }
</script>

<script lang="ts">
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionResumeTimeline from './SectionResumeTimeline.svelte'
  import SectionResumeSkills from './SectionResumeSkills.svelte'

  let { id, title = null, resume, skills }: SectionResumeProps = $props()

  const hasResume = $derived(resume !== null)
  const hasSkills = $derived(skills !== null)
</script>

<SectionContainer {id} title={title ?? resume?.title} titleMarginBottom={true}>
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
