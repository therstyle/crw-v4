<script>
  import SectionWrapper from './SectionWrapper.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionWrapper {id} {title}>
  <div class="crw-portfolio"></div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-portfolio {
  }
</style>
