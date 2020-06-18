<script>
  /**
   * @typedef {Object} SelectOptions
   * @property {string} name
   * @property {number} value
   */

  /** @type {string} */
  export let name;
  /** @type {string} */
  export let label;

  /** @type {SelectOptions[]} */
  export let options;
  /** @type {number | undefined} */
  export let value = undefined;
</script>

<div class="mb-2">
  <label class="text-sm mb-2 text-gray-600" for={name}>{label}</label>
  <select
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-2 block w-full
    leading-normal"
    bind:value
    {name}
    id={name}>
    {#each options as option}
      <option value={option.value}>{option.name}</option>
    {/each}
  </select>
</div>
