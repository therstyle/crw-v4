<script>
  import SectionWrapper from "./SectionWrapper.svelte";

  let {
    id = null,
  } = $props();
</script>

<SectionWrapper id={id}>
  <div class="crw-portfolio">
  </div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-portfolio {
  }
</style>
