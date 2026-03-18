<script lang="ts">
  import type { Present } from '$lib/presents';
  import PresentModal from './PresentModal.svelte';

  interface Props {
    present: Present;
  }

  let { present }: Props = $props();

  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let unlocked = $state(false);
  let modalOpen = $state(false);

  function update() {
    const diff = present.unlockAt.getTime() - Date.now();
    if (diff <= 0) {
      unlocked = true;
      days = hours = minutes = 0;
      return;
    }
    unlocked = false;
    days = Math.floor(diff / 86400000);
    hours = Math.floor((diff % 86400000) / 3600000);
    minutes = Math.floor((diff % 3600000) / 60000);
  }

  $effect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });

  function pad(n: number) {
    return String(n).padStart(2, '0');
  }

  function handleClick() {
    if (unlocked) modalOpen = true;
  }
</script>

<button
  class={[
    'flex flex-col items-center gap-3 rounded-2xl border p-5 w-full transition-all duration-300 text-left',
    unlocked
      ? 'bg-card border-accent cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] animate-pulse-soft shimmer'
      : 'bg-card border-border cursor-default opacity-80'
  ].join(' ')}
  onclick={handleClick}
  disabled={!unlocked}
  aria-label={unlocked ? `Open ${present.label}` : `${present.label} - nog vergrendeld`}
>
  <span class="text-4xl">{present.emoji}</span>
  <span class="font-semibold text-text text-base">{present.label}</span>

  {#if unlocked}
    <span class="text-sm text-accent font-medium mt-1">🔓 Klik om te openen</span>
  {:else}
    <div class="flex items-center gap-1.5 text-sm text-muted">
      <span>🔒</span>
      {#if days > 0}
        <span>{days}d {pad(hours)}u</span>
      {:else}
        <span>{pad(hours)}u {pad(minutes)}m</span>
      {/if}
    </div>
  {/if}
</button>

{#if modalOpen}
  <PresentModal {present} onClose={() => (modalOpen = false)} />
{/if}

