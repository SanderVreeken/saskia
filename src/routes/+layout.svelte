<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Gelukkige Verjaardag! 🎂</title>
  <meta name="description" content="Een speciale verjaardagsverrassing voor jou!" />
</svelte:head>

{@render children()}
