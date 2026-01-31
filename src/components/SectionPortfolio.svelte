<script>
  import SectionWrapper from './SectionWrapper.svelte'
  import SectionTitle from './SectionTitle.svelte'

  let { id = null, title = null, items = [] } = $props()
</script>

<SectionWrapper {id}>
  <div class="crw-portfolio">
    <SectionTitle {title}></SectionTitle>
  </div>
</SectionWrapper>

<style lang="scss">
  @use '../styles/vars.scss';

  .crw-portfolio {
  }
</style>
