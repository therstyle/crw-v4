<script>
  let { logo, company, year, location, jobTitle, details = [] } = $props()
</script>

<article class="crw-timeline-entry" data-year={year}>
  <header>
    <img src={logo} alt={company ?? ''} loading="lazy" />
    <div class="crw-timeline-entry__company-info">
      <h3>
        <span class="crw-timeline-entry__company">{company}</span>
        <span class="crw-timeline-entry__location">{location}</span>
      </h3>
      <small>{jobTitle}</small>
    </div>
  </header>
  <ul class="crw-timeline-entry__timeline-details">
    {#each details as detail, detailIndex (detailIndex)}
      <li>{detail}</li>
    {/each}
  </ul>
</article>

<style lang="scss">
  @use '../styles/vars';
  @use '../styles/mixins';

  .crw-timeline-entry {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-3) 0 var(--space-3);
    border-bottom: 1px solid var(--light-gray);
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

    &__company-info {
      display: flex;
      flex-direction: column;

      @include mixins.max(xxs) {
        gap: var(--space-1);
      }

      h3 {
        display: inline-flex;
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

    &__location {
      border-inline-start: 2px solid var(--white);
      padding-inline-start: 0.5ch;

      @include mixins.max(xxs) {
        border-inline-start: none;
        padding-inline-start: 0;
        font-size: 13px;
      }
    }

    &__timeline-details {
      padding-inline-start: 0;
      margin: 0;

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
  }
</style>
