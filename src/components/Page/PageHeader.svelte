<script>
  import Column from '../Layout/Column.svelte';
</script>

<style>
  .page-header {
    width: 100%;
    max-width: 800px;
  }
</style>

<div class="px-6 py-6">
  <Column>
    <div class="page-header">
      <slot name="title" />
      <slot name="description" />
    </div>
  </Column>
</div>
