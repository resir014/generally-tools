<script>
  /** @type {boolean | undefined} */
  export let fullHeight = false;
</script>

<style>
  .column {
    width: 100%;
    max-width: var(--container-sm);
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    .column {
      max-width: var(--container-md);
    }
  }

  @media (min-width: 1024px) {
    .column {
      max-width: var(--container-lg);
    }
  }

  @media (min-width: 1280px) {
    .column {
      max-width: var(--container-xl);
    }
  }

  @media (min-width: 1440px) {
    .column {
      max-width: var(--container-xxl);
    }
  }

  .full-height {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="column" class:full-height={fullHeight}>
  <slot />
</div>
