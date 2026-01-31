<script>
  import SectionWrapper from './SectionWrapper.svelte'

  let { id = null } = $props()
</script>

<SectionWrapper {id}>
  <div class="crw-resume"></div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-resume {
  }
</style>
