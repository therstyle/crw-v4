<script>
  import SectionContainer from './shared/SectionContainer.svelte'
  import SectionResumeSkill from './SectionResumeSkill.svelte'

  let { id = null, resume = null, skills = null } = $props()

  const hasResume = $derived(resume !== null)
  const hasSkills = $derived(skills !== null)
</script>

<SectionContainer {id} title={resume?.title}>
  <div class="crw-resume">
    <div class="crw-resume__content">
      {#if hasResume}
        <div class="crw-resume__timeline">
          {#each resume?.items as item, index (index)}
            <article class="crw-resume__timeline-entry" data-year={item?.year}>
              <header>
                <img
                  src={item?.logo}
                  alt={item?.company ?? ''}
                  loading="lazy"
                />
                <div class="crw-resume__company-info">
                  <h3>{item?.company} | {item?.location}</h3>
                  <small>{item?.jobTitle}</small>
                </div>
              </header>
              <ul class="crw-resume__timeline-details">
                {#each item?.details as detail, detailIndex (detailIndex)}
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
                <SectionResumeSkill {...skill} />
              </li>
            {/each}
          </ul>
        </aside>
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

    &__timeline {
      max-width: 60vw;
      margin: 0 7vw;
      position: relative;

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

    &__timeline-entry {
      padding: var(--space-3);
      padding-inline-end: 0;
      border-bottom: 1px solid var(--light-gray);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        display: block;
        border-radius: 100%;
        top: 6.1vw;
        left: calc(var(--space-3) - var(--space-6) - 24px);
        margin-left: calc(var(--space-3) + 12px);
        width: 24px;
        height: 24px;
        border: 5px solid var(--red);
        background: var(--body-bg);

        @include mixins.min(xl) {
          top: 90px;
        }

        @include mixins.max(sm) {
          left: calc(-4.1vw - 14px);
          margin-left: calc(4.1vw + 7px);
          width: 14px;
          height: 14px;
          border: 3px solid var(--red);
          background: var(--body-bg);
        }
      }

      &::after {
        content: attr(data-year);
        font-weight: 600;
        color: var(--red);
        font-size: 4.1vw;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(180deg);
        position: absolute;
        left: -7vw;
        top: 2.1vw;
        display: inline-block;

        @include mixins.min(xl) {
          font-size: 59px;
          left: -6.375rem;
          top: 1.938rem;
        }

        @include mixins.max(sm) {
          font-size: 5vw;
          left: -9vw;
          top: 2.1vw;
        }
      }

      &:last-child {
        border-color: transparent;
      }

      header {
        display: flex;
        gap: calc(var(--space-1) + var(--space-half));
        align-items: center;

        @include mixins.max(sm) {
          flex-direction: column;
          align-items: flex-start;
        }

        h3 {
          line-height: 1;

          @include mixins.max(sm) {
            font-size: 15px;
          }
        }

        small {
          display: block;
        }
      }

      img {
        min-width: 42px;
        max-width: 42px;
        max-height: 42px;
        padding: 7px;
        background: var(--white);
        border-radius: 50%;

        @include mixins.max(sm) {
          min-width: 28px;
          max-width: 28px;
          max-height: 28px;
        }
      }
    }

    &__timeline-details {
      padding-inline-start: 0;
      margin-block-end: 0;

      > li {
        font-size: 16px;
        line-height: 1.5;
        list-style: none;
        position: relative;
        margin-inline-start: 30px;
        margin-block-end: var(--space-2);

        @include mixins.max(sm) {
          font-size: 13px;
          margin-inline-start: 20px;
        }

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 5px;
          left: -30px;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background: var(--red);
          margin-right: 10px;

          @include mixins.max(sm) {
            width: 8px;
            height: 8px;
            left: -20px;
          }
        }
      }
    }

    &__skills {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      width: 100%;
      max-width: 264px;

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
  }
</style>
