<script>
  export let segment;
  export let isDrawerOpen = false;
</script>

<style>
  .content-root {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
  }

  .drawer {
    margin-top: 60px;
    width: 270px;
    margin-left: -270px;
    transition: all 500ms cubic-bezier(0.15, 1, 0.3, 1);
    z-index: 25;
    overflow-y: hidden;
  }

  /* Clicking drawer toggle on desktop does nothing. */
  @media (min-width: 992px) {
    .drawer {
      margin-left: 0;
    }
  }

  .drawer.is-drawer-toggled {
    margin-left: 0;
  }

  .drawer-inner {
    position: fixed;
    width: inherit;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    transition: all 500ms cubic-bezier(0.15, 1, 0.3, 1);
  }

  .main.is-drawer-toggled {
    margin-right: -270px;
  }

  /* Clicking drawer toggle on desktop does nothing. */
  @media (min-width: 992px) {
    .main.is-drawer-toggled {
      margin-right: 0px;
    }
  }

  [aria-current] {
    @apply bg-blue-100;
    @apply text-blue-500;
  }
</style>

<div class="content-root">
  <nav class="drawer" class:is-drawer-toggled={isDrawerOpen}>
    <div class="drawer-inner bg-white px-6 py-6">
      <ul>
        <li class="mb-3">
          <a
            class="drawer-link block px-4 py-2 rounded-md hover:bg-gray-100"
            aria-current={segment === undefined ? 'page' : undefined}
            href="/">
            Physics Calculator
          </a>
        </li>
        <li class="mb-3">
          <a
            class="drawer-link block px-4 py-2 rounded-md hover:bg-gray-100"
            aria-current={segment === 'about' ? 'page' : undefined}
            href="/about">
            About
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="main" class:is-drawer-toggled={isDrawerOpen}>
    <slot />
  </main>
</div>
