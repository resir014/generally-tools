<script>
  /** @type {string} */
  export let name;
  /** @type {string} */
  export let label;
  /** @type {boolean} */
  export let checked = false;
</script>

<div class="mb-2">
  <label for={name}>
    <input type="checkbox" value={name} bind:checked id={name} {name} />
    <span class="text-sm mb-2 text-gray-600">{label}</span>
  </label>
</div>
