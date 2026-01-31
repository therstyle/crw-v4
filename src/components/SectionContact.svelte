<script>
  import SectionWrapper from "./SectionWrapper.svelte";

  let {
    id = null,
  } = $props();
</script>

<SectionWrapper id={id}>
  <div class="crw-contact">
  </div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-contact {
  }
</style>
