<script>
  import { isDark } from '../stores/theme.js'
  let { video } = $props()

  const hasVideo = $derived(video !== null)
</script>

{#if hasVideo}
  <div class="crw-bg-video" data-is-dark={$isDark}>
    <video autoplay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </div>
{/if}

<style lang="scss">
  .crw-bg-video,
  .crw-bg-video::after,
  .crw-bg-video::before {
    content: '';
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .crw-bg-video {
    z-index: -1;

    &[data-is-dark='false'] {
      filter: invert(1);
    }

    &::before {
      background: linear-gradient(
        to right,
        rgba(51, 51, 51, 1) 1%,
        rgba(51, 51, 51, 1) 45%,
        rgba(51, 51, 51, 0) 100%
      );
    }

    &::after {
      background: linear-gradient(
        to bottom,
        rgba(51, 51, 51, 0) 75%,
        rgba(51, 51, 51, 0.99) 99%,
        rgba(51, 51, 51, 1) 100%
      );
    }

    video {
      width: 100%;
      min-height: 100vh;
      object-fit: cover;
      margin-left: 15vw;
    }
  }
</style>
