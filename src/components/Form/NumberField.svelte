<script>
  /** @type {string} */
  export let name;
  /** @type {string} */
  export let label;
  /** @type {number | undefined} */
  export let value = undefined;
</script>

<div class="mb-2">
  <label class="text-sm mb-2 text-gray-600" for={name}>{label}</label>
  <input
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-2 block w-full
    appearance-none leading-normal"
    type="number"
    bind:value
    id={name}
    {name} />
</div>
