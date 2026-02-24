<script>
  import { isDark } from '../stores/theme.js'
  import SlideIntoView from './shared/SlideIntoView.svelte'

  let {
    logo = null,
    company = null,
    year = null,
    location = null,
    jobTitle = null,
    details = [],
  } = $props()

  const hasLogo = $derived(logo !== null)
  const hasCompany = $derived(company !== null)
  const hasLocation = $derived(location !== null)
  const hasJobTitle = $derived(jobTitle !== null)
  const hasCompanyInfo = $derived(hasCompany || hasLocation || hasJobTitle)
  const hasDetails = $derived(details.length > 0)
</script>

<article class="crw-timeline-entry" data-year={year}>
  <SlideIntoView>
    <header>
      {#if hasLogo}
        <div class="crw-timeline-entry__company-logo">
          <img
            src={logo.image}
            alt={company ?? ''}
            loading="lazy"
            width="42"
            height="42"
            data-dark-logo={logo.dark}
            data-is-dark={$isDark}
          />
        </div>
      {/if}

      {#if hasCompanyInfo}
        <div class="crw-timeline-entry__company-info">
          {#if hasLocation || hasCompany}
            <h3>
              {#if hasCompany}<span class="crw-timeline-entry__company"
                  >{company}</span
                >{/if}
              {#if hasLocation}<span class="crw-timeline-entry__location"
                  >{location}</span
                >{/if}
            </h3>
          {/if}

          {#if hasJobTitle}<small>{jobTitle}</small>{/if}
        </div>
      {/if}
    </header>
  </SlideIntoView>

  {#if hasDetails}
    <div class="crw-timeline-entry__timeline-details">
      {#each details as detail, detailIndex (detailIndex)}
        <SlideIntoView
          ><div class="crw-timeline-entry__timeline-detail">
            {detail}
          </div></SlideIntoView
        >
      {/each}
    </div>
  {/if}
</article>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-timeline-entry {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-3) 0 var(--space-3);
    border-bottom: 1px solid var(--border-color);
    position: relative;

    @include mixins.max(xxs) {
      padding: var(--space-2) var(--space-2) 0 var(--space-2);
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      border-radius: 100%;
      top: 6.1vw;
      left: calc(var(--space-3) - var(--space-6) - 24px);
      margin-left: calc(var(--space-3) + 12px);
      width: var(--timeline-entry-dot-size);
      height: var(--timeline-entry-dot-size);
      border: 5px solid var(--red);

      --timeline-entry-dot-size: 24px;

      @include mixins.min(xl) {
        top: 90px;
      }

      @include mixins.max(sm) {
        left: calc(-4.1vw - 14px);
        margin-left: calc(4.1vw + 7px);
        border-width: 3px;

        --timeline-entry-dot-size: 14px;
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

      small {
        display: block;
      }
    }

    &__company-logo {
      background: var(--main-font-color);
      border-radius: 50%;
      padding: var(--company-logo-padding);
      overflow: hidden;
      max-width: var(--company-logo-size);
      max-height: var(--company-logo-size);
      display: flex;
      justify-content: center;
      align-items: center;

      --company-logo-size: 42px;
      --company-logo-padding: 8px;

      @include mixins.max(sm) {
        --company-logo-size: 28px;
      }

      img {
        min-width: calc(
          var(--company-logo-size) - var(--company-logo-padding) * 2
        );
        width: 100%;
        height: auto;
        display: block;
        border-radius: 50%;

        &[data-is-dark='false'][data-dark-logo='true'] {
          filter: grayscale(1) invert(1);
        }
      }
    }

    &__company-info {
      display: flex;
      flex-direction: column;

      @include mixins.max(xxs) {
        gap: var(--space-1);
      }

      h3 {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.5ch;
        line-height: 1;

        @include mixins.max(sm) {
          font-size: 15px;
        }

        @include mixins.max(xxs) {
          flex-direction: column;
        }
      }
    }

    &__company {
      white-space: nowrap;
      border-inline-end: 2px solid var(--main-font-color);
      padding-inline-end: 0.5ch;

      @include mixins.max(xxs) {
        border-inline-end: none;
        padding-inline-end: 0;
      }
    }

    &__location {
      @include mixins.max(xxs) {
        font-size: 13px;
      }
    }

    &__timeline-details {
      padding-inline-start: 0;
      margin: 0;
    }

    &__timeline-detail {
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
        left: var(--timeline-detail-bullet-left);
        width: var(--timeline-detail-bullet-size);
        height: var(--timeline-detail-bullet-size);
        border-radius: 50%;
        background: var(--red);
        margin-right: 10px;

        --timeline-detail-bullet-size: 12px;
        --timeline-detail-bullet-left: -30px;

        @include mixins.max(sm) {
          --timeline-detail-bullet-size: 8px;
          --timeline-detail-bullet-left: -20px;
        }
      }
    }
  }
</style>
