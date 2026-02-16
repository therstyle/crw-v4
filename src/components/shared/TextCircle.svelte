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
    background: var(--transparent-button-color);
    color: var(--main-font-color);
    border: 1px solid var(--border-color);
    text-decoration: none;
    position: relative;
    padding: 1px;
    transition: var(--global-transition);

    --text-circle-size: 122px;
    --text-circle-icon-size: 40px;

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    &__icon {
      display: block;
      max-width: var(--text-circle-icon-size);
      max-height: var(--text-circle-icon-size);

      img {
        width: 100%;
        height: 100%;
        min-width: var(--text-circle-icon-size);
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

  a.crw-text-circle {
    @include mixins.hocus {
      transform: scale(1.1);
      background: var(--transparent-button-hover-color);
      box-shadow: 0 0 40px rgb(0 0 0 / 33%);
      text-decoration: underline;
    }
  }
</style>
