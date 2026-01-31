<script>
  import SectionWrapper from './SectionWrapper.svelte'
  import SectionTitle from './SectionTitle.svelte'

  let { id = null, resume = null, skills = null } = $props()

  const hasResume = $derived(resume !== null)
  const hasSkills = $derived(skills !== null)
</script>

<SectionWrapper {id}>
  <div class="crw-resume">
    <SectionTitle title={resume.title}></SectionTitle>
    <div class="crw-resume__content">
      {#if hasResume}
        <div class="crw-resume__timeline">
          {#each resume?.items as item, index (index)}
            <article class="crw-resume__timeline-entry" data-year={item.year}>
              <header>
                <img src={item.logo} alt={item.company} />
                <div class="crw-resume__company-info">
                  <h3>{item.company} | {item.location}</h3>
                  <small>{item.jobTitle}</small>
                </div>
              </header>
              <ul class="crw-resume__timeline-details">
                {#each item.details as detail, detailIndex (detailIndex)}
                  <li>{detail}</li>
                {/each}
              </ul>
            </article>
          {/each}
        </div>
      {/if}

      {#if hasSkills}
        <aside class="crw-resume__skills">
          <h3>{skills?.title}</h3>
          <ul>
            {#each skills?.items as skill, index (index)}
              <li id={`skill-${index}`}>
                <div>
                  <span>{skill.title}</span>
                  <span>{skill.year}</span>
                </div>
              </li>
            {/each}
          </ul>
        </aside>
      {/if}
    </div>
  </div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-resume {
    &__content {
      display: flex;
    }
  }
</style>
