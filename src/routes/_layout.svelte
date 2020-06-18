<script>
  import Content from '../components/Layout/Content.svelte';
  import Root from '../components/Layout/Root.svelte';
  import Masthead from '../components/Layout/Masthead.svelte';
  import Tailwind from '../components/Layout/Tailwind.svelte';

  let isDrawerOpen = false;

  /**
   * @param {any} event
   */
  function handleDrawerToggle(event) {
    isDrawerOpen = event.detail.isDrawerOpen;
  }

  export let segment;
</script>

<style global>
  :root {
    --breakpoint-xs: 0px;
    --breakpoint-sm: 360px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-xxl: 1440px;

    --height-header: 60px;

    --container-sm: 312px;
    --container-md: 706px;
    --container-lg: 706px;
    --container-xl: 962px;
    --container-xxl: 1122px;

    --grid-template: [full-start] minmax(2rem, 1fr) [outer-start] 2.5rem [inner-start] minmax(1rem, 1140px) [inner-end]
      2.5rem [outer-end] minmax(2rem, 1fr) [full-end];
  }
</style>

<Tailwind />

<Root>
  <Masthead on:toggle-drawer={handleDrawerToggle} />
  <Content {isDrawerOpen} {segment}>
    <slot />
  </Content>
</Root>
