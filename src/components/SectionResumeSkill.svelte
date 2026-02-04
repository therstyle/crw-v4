<script>
  import TextCircle from './shared/TextCircle.svelte'

  let { title = null, year = 0, logo = null } = $props()

  const currentYear = new Date().getFullYear()
  const totalYears = $derived(currentYear - year)
  const maxDisplay = 15
  const yearDisplay = $derived(
    totalYears > maxDisplay ? `${maxDisplay}+ Years` : `${totalYears} Years`,
  )
</script>

<TextCircle icon={logo} {title} subTitle={yearDisplay} />

<style lang="scss">
  @use '../styles/vars.scss';
  @use '../styles/mixins.scss';
</style>
