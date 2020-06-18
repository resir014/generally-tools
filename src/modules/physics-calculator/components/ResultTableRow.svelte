<script>
import * as copee from 'copee'

  export let label = '';
  export let value = '';

  /** @type {HTMLInputElement | undefined} */
  let textInput = undefined;

  function handleClick() {
    const success = copee.toClipboard(value);

    if (success && textInput) {
      textInput.removeAttribute('disabled')
      textInput.focus()
      textInput.select()
      textInput.setAttribute('disabled', 'disabled')
    }
  }
</script>

<style>
  tr td {
    text-align: left;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
  }

  .label {
    user-select: none;
  }

  .results {
    width: 100px;
    text-align: right;
  }

  .results-select {
    width: 100%;
    text-align: right;
  }
</style>

<tr>
  <td class="label">{label}</td>
  <td class="results" on:click={handleClick}>
    <input class="results-select bg-transparent text-black outline-none" type="text" disabled bind:this={textInput} bind:value={value} />
  </td>
</tr>
