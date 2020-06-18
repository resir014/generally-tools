<script>
  import Card from '../../../components/Layout/Card.svelte';
  import ResultTableRow from './ResultTableRow.svelte';

  /** @type {import('../../../utils/physics/types').CalculationResult | undefined} */
  export let result;
</script>

<style>
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
  }

  table thead th {
    text-align: left;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
    user-select: none;
  }

  table thead th:last-child {
    width: 100px;
  }
</style>

<div class="mt-8">
  <div>
    <h2 class="text-3xl font-semibold">Results</h2>
    <p class="text-lg text-gray-600">Click each value to copy them to your clipboard.</p>
  </div>

  <div class="form-grid">
    <Card>
      <h3 class="text-2xl font-semibold mb-4">Performance Values</h3>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <ResultTableRow label="Air Resistance" value={result ? result.performance.airResistance.toFixed(1) : ''} />
          <ResultTableRow label="Downforce/Wings" value={result ? result.performance.downforce.toFixed(1) : ''} />
          <ResultTableRow label="Power" value={result ? result.performance.power.toFixed(1) : ''} />
          <ResultTableRow label="Top Speed" value={result ? result.performance.topSpeed.toFixed(1) : ''} />
          <ResultTableRow label="Sliding" value={result ? result.performance.sliding.toFixed(1) : ''} />
          <ResultTableRow label="Mass" value={result ? result.performance.weight.toFixed(1) : ''} />
          <ResultTableRow label="Balance" value={result ? result.performance.balance.toFixed(1) : ''} />
        </tbody>
      </table>
    </Card>

    <Card>
      <h3 class="text-2xl font-semibold mb-4">Grip Values</h3>

      <table>
        <thead>
          <tr>
            <th>Surface type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <ResultTableRow label="Oil" value={result ? result.grip.oil.toFixed(2) : ''} />
          <ResultTableRow label="Tarmac" value={result ? result.grip.tarmac.toFixed(2) : ''} />
          <ResultTableRow label="Tarmac 2" value={result ? result.grip.tarmac2.toFixed(2) : ''} />
          <ResultTableRow label="Grass" value={result ? result.grip.grass.toFixed(2) : ''} />
          <ResultTableRow label="Mud" value={result ? result.grip.mud.toFixed(2) : ''} />
          <ResultTableRow label="Gravel" value={result ? result.grip.gravel.toFixed(2) : ''} />
          <ResultTableRow label="Gravel 2" value={result ? result.grip.gravel2.toFixed(2) : ''} />
          <ResultTableRow label="Sand" value={result ? result.grip.sand.toFixed(2) : ''} />
          <ResultTableRow label="Sand 2" value={result ? result.grip.sand2.toFixed(2) : ''} />
          <ResultTableRow label="Sand2" value={result ? result.grip.sand2.toFixed(2) : ''} />
          <ResultTableRow label="Snow" value={result ? result.grip.snow.toFixed(2) : ''} />
          <ResultTableRow label="Ice" value={result ? result.grip.ice.toFixed(2) : ''} />
          <ResultTableRow label="Kerb" value={result ? result.grip.kerb.toFixed(2) : ''} />
          <ResultTableRow label="Kerb 2" value={result ? result.grip.kerb2.toFixed(2) : ''} />
          <ResultTableRow label="Loose Gravel" value={result ? result.grip.looseGravel.toFixed(2) : ''} />
        </tbody>
      </table>
    </Card>

    <Card>
      <h3 class="text-2xl font-semibold mb-4">Slowdown Values</h3>

      <table>
        <thead>
          <tr>
            <th>Surface type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <ResultTableRow label="Oil" value={result ? result.slowdown.oil.toFixed(2) : ''} />
          <ResultTableRow label="Tarmac" value={result ? result.slowdown.tarmac.toFixed(2) : ''} />
          <ResultTableRow label="Tarmac 2" value={result ? result.slowdown.tarmac2.toFixed(2) : ''} />
          <ResultTableRow label="Grass" value={result ? result.slowdown.grass.toFixed(2) : ''} />
          <ResultTableRow label="Mud" value={result ? result.slowdown.mud.toFixed(2) : ''} />
          <ResultTableRow label="Gravel" value={result ? result.slowdown.gravel.toFixed(2) : ''} />
          <ResultTableRow label="Gravel 2" value={result ? result.slowdown.gravel2.toFixed(2) : ''} />
          <ResultTableRow label="Sand" value={result ? result.slowdown.sand.toFixed(2) : ''} />
          <ResultTableRow label="Sand 2" value={result ? result.slowdown.sand2.toFixed(2) : ''} />
          <ResultTableRow label="Sand2" value={result ? result.slowdown.sand2.toFixed(2) : ''} />
          <ResultTableRow label="Snow" value={result ? result.slowdown.snow.toFixed(2) : ''} />
          <ResultTableRow label="Ice" value={result ? result.slowdown.ice.toFixed(2) : ''} />
          <ResultTableRow label="Kerb" value={result ? result.slowdown.kerb.toFixed(2) : ''} />
          <ResultTableRow label="Kerb 2" value={result ? result.slowdown.kerb2.toFixed(2) : ''} />
          <ResultTableRow label="Loose Gravel" value={result ? result.slowdown.looseGravel.toFixed(2) : ''} />
        </tbody>
      </table>
    </Card>
  </div>
</div>
