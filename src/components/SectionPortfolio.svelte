<script>
  import SectionWrapper from './SectionWrapper.svelte'

  let { id = null, items = [] } = $props()
</script>

<SectionWrapper {id}>
  <div class="crw-portfolio"></div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-portfolio {
  }
</style>
