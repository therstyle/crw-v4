<script>
  let {
    title = null,
    subTitle = null,
    url = null,
    target = '_blank',
    icon = null,
  } = $props()

  const elementType = $derived(url ? 'a' : 'div')
  const isLink = $derived(elementType === 'a')
  const hasTitle = $derived(title !== null)
  const hasSubTitle = $derived(subTitle !== null)
  const hasIcon = $derived(icon !== null)
</script>

<svelte:element
  this={elementType}
  class="crw-text-circle"
  href={isLink ? url : null}
  target={isLink ? target : null}
>
  <span class="crw-text-circle__inner">
    {#if hasIcon}
      <span class="crw-text-circle__icon"
        ><img src={icon} alt={title} loading="lazy" /></span
      >
    {/if}
    {#if hasTitle || hasSubTitle}
      <span>
        {#if hasTitle}<span class="crw-text-circle__title">{title}</span>{/if}
        {#if hasSubTitle}<span class="crw-text-circle__sub-title"
            >{subTitle}</span
          >{/if}
      </span>
    {/if}
  </span>
</svelte:element>

<style lang="scss">
  @use '../../styles/vars';
  @use '../../styles/mixins';

  .crw-text-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    min-height: var(--text-circle-size);
    max-height: var(--text-circle-size);
    min-width: var(--text-circle-size);
    max-width: var(--text-circle-size);
    background: var(--dark-gray-alpha);
    position: relative;
    padding: 1px;

    --text-circle-size: 122px;

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: 50%;
      z-index: -1;
      border: 1px solid var(--light-gray);

      // TODO: border-gradient
      //background:
      //  linear-gradient(#fff, #fff) padding-box,
      //  /* The inner content color */
      //  linear-gradient(to right, #ff7e5f, #feb47b) border-box; /* The gradient */
    }

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    &__icon {
      display: block;
      max-width: 40px;
      max-height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-weight: 600;
      display: block;
    }

    &__sub-title {
      font-size: 11px;
      display: block;
    }
  }
</style>
