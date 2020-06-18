<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let isDrawerOpen = false;

  function toggleDrawer() {
    isDrawerOpen = !isDrawerOpen;

    dispatch('toggle-drawer', {
      isDrawerOpen
    })
  }
</script>

<style>
  :global(:root) {
    --header-height: 60px;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    z-index: 100;
  }

  @media (min-width: 992px) {
    .right {
      display: none;
    }
  }
</style>

<header class="flex flex-row items-center justify-between border-b bg-white px-6">
  <div class="left">
    <h1 class="font-medium">
      <a
        class="text-blue-600 hover:text-blue-700 hover:underline"
        href="https://gene-rally.com/"
        target="_blank"
        rel="noopener noreferrer">
        GeneRally
      </a>
      Tools by
      <a
        class="text-blue-600 hover:text-blue-700 hover:underline"
        href="https://resir014.xyz/"
        target="_blank"
        rel="noopener noreferrer">
        resir014
      </a>
    </h1>
  </div>
  <div class="right ml-4">
    <button class="inline-flex items-center justify-center w-8 h-8" type="button" on:click={toggleDrawer}><img src="/images/menu.svg" alt="Toggle drawer" /></button>
  </div>
</header>
