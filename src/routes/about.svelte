<script>
  import Page from '../components/Page/Page.svelte';
  import PageContent from '../components/Page/PageContent.svelte';
  import PageHeader from '../components/Page/PageHeader.svelte';
  import Column from '../components/Layout/Column.svelte';
</script>

<style>
  ul {
    @apply list-disc;
    @apply pl-6;
  }

  h2,
  h3 {
    @apply font-semibold;
    @apply mt-4;
    @apply mb-2;
  }

  h2:first-child,
  h3:first-child {
    @apply mt-0;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-xl;
  }

  p {
    @apply mb-4;
  }
  p:last-child {
    @apply mb-0;
  }

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
  <title>About</title>
</svelte:head>

<Page>
  <PageHeader>
    <h1 slot="title" class="text-4xl font-semibold">About</h1>
    <div slot="description">
      <p class="text-lg text-gray-600">
        A suite of tools made for the game
        <a
          class="text-blue-600 hover:text-blue-700 hover:underline"
          href="https://gene-rally.com"
          target="_blank"
          rel="noopener noreferrer">
          GeneRally
        </a>
        by resir014.
      </p>
    </div>
  </PageHeader>
  <PageContent>
    <Column>
      <h2>About the Project</h2>
      <p>
        This is a series of web-based tools for the freeware top-down racing game GeneRally. No more installing stuff,
        no plugins required, just open your browser (desktop or mobile) and use it! It's also
        <a href="https://github.com/resir014/generally-tools" target="_blank" rel="noopener noreferrer">open-source</a>
        so anyone can contribute to it. If you run into an issue, please file an bug report on
        <a href="https://github.com/resir014/generally-tools/issues" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        or on
        <a href="http://forum.generally-racers.com/viewtopic.php?f=8&t=4082" target="_blank" rel="noopener noreferrer">
          the GR International Forum
        </a>
        thread.
      </p>
      <h2>Tools</h2>
      <h3>Realistic Physics Calculator</h3>
      <p>
        Generates realistic, scaled-down attributes for your custom GeneRally car. All values are based on
        <a href="http://forum.generally-racers.com/viewtopic.php?f=9&t=302" target="_blank" rel="noopener noreferrer">
          Haruna's Realistic Car Physics
        </a>
        formula with some minor adjustments. Enter the real-life attributes of a car, then click "Calculate Physics". It
        will then generate scaled-down attributes that you can immediately copy and paste into the GeneRally car editor.
      </p>
      <h2>Powered by Open-Source</h2>
      <ul>
        <li>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
        </li>
        <li>
          <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
        </li>
        <li>
          <a href="https://sapper.svelte.dev/" target="_blank" rel="noopener noreferrer">Sapper</a>
        </li>
        <li>
          <a href="https://tailwindcss.com/">Tailwind.css</a>
        </li>
      </ul>
      <h2>Special Thanks</h2>
      <ul>
        <li>
          <a
            href="http://forum.generally-racers.com/memberlist.php?mode=viewprofile&u=100&sid=8303c995a0a78f538bc2a12528a2f47c"
            target="_blank"
            rel="noopener noreferrer">
            Haruna
          </a>
          for giving me permission to use their
          <a href="http://forum.generally-racers.com/viewtopic.php?f=9&t=302" target="_blank" rel="noopener noreferrer">
            Realistic Car Physics
          </a>
          formula.
        </li>
      </ul>
      <h2>License</h2>
      <p>
        <a
          href="https://github.com/resir014/generally-tools/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer">
          MIT
        </a>
        &copy; Resi Respati
      </p>
    </Column>
  </PageContent>
</Page>
