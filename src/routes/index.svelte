<script>
  import Page from '../components/Page/Page.svelte';
  import PageHeader from '../components/Page/PageHeader.svelte';
  import PageContent from '../components/Page/PageContent.svelte';
  import Column from '../components/Layout/Column.svelte';

  import PhysicsCalculator from '../modules/physics-calculator/PhysicsCalculator';
</script>

<style>
  a {
    @apply text-blue-600;
  }
  a:hover,
  a:focus {
    @apply text-blue-700;
    @apply underline;
  }
</style>

<svelte:head>
  <title>Physics Calculator | GeneRally Tools by resir014</title>
</svelte:head>

<Page>
  <PageHeader>
    <h1 slot="title" class="text-4xl font-semibold">Physics Calculator</h1>
    <div slot="description">
      <p class="text-lg text-gray-600">
        Use this simple tool to generate a realistic, scaled-down attributes for your
        <a
          href="https://gene-rally/"
          target="_blank"
          rel="noopener noreferrer">
          GeneRally
        </a>
        car files.
      </p>
      <p class="text-lg text-gray-600">
        Inspired by
        <a
          href="http://forum.generally-racers.com/viewtopic.php?f=9&t=302"
          target="_blank"
          rel="noopener noreferrer">
          Haruna's Realistic Car Physics.
        </a>
      </p>
    </div>
  </PageHeader>

  <PageContent>
    <Column>
      <PhysicsCalculator />
    </Column>
  </PageContent>
</Page>
