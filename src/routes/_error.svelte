<script>
  import Page from '../components/Page/Page.svelte';
  import Column from '../components/Layout/Column.svelte';

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<Page>
  <Column fullHeight>
    <h1 class="text-center text-6xl">{status}</h1>
    <p class="text-center text-xl text-gray-600 font-light">{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </Column>
</Page>
