<script>
  import SectionWrapper from "./SectionWrapper.svelte";

  let {
    id = null,
    subTitle = null,
    headline = null,
    description = null
  } = $props();
</script>

<SectionWrapper id={id}>
  <div class="crw-intro">
    <div class="crw-intro__content">
      <h6>{subTitle}</h6>
      <h1>{@html headline}</h1>

      <div class="crw-intro__description">
        {description}
      </div>
    </div>
  </div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-intro {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      max-width: 40vw;

      h6 {
        color: var(--red);
        font-size: 1.6rem;
        margin-bottom: var(--space-1);
      }
    }
  }
</style>
