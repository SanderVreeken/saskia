<script lang="ts">
  interface Props {
    targetDate: Date;
    label?: string;
  }

  let { targetDate, label }: Props = $props();

  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);
  let reached = $state(false);

  function update() {
    const now = Date.now();
    const diff = targetDate.getTime() - now;
    if (diff <= 0) {
      reached = true;
      days = hours = minutes = seconds = 0;
      return;
    }
    reached = false;
    days = Math.floor(diff / 86400000);
    hours = Math.floor((diff % 86400000) / 3600000);
    minutes = Math.floor((diff % 3600000) / 60000);
    seconds = Math.floor((diff % 60000) / 1000);
  }

  $effect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });

  function pad(n: number) {
    return String(n).padStart(2, '0');
  }
</script>

{#if label}
  <p class="text-sm uppercase tracking-widest text-muted mb-4">{label}</p>
{/if}

{#if reached}
  <p class="text-3xl md:text-4xl font-medium text-accent">Gelukkige verjaardag! 🎉</p>
{:else}
  <div class="flex gap-3 md:gap-6 justify-center">
    {#each [
      { value: days, unit: 'dagen' },
      { value: hours, unit: 'uren' },
      { value: minutes, unit: 'minuten' },
      { value: seconds, unit: 'seconden' }
    ] as block}
      <div class="flex flex-col items-center">
        {#key block.value}
          <span
            class="digit-pop text-4xl md:text-6xl font-semibold tabular-nums text-accent bg-card border border-border rounded-xl px-3 py-2 md:px-5 md:py-3 min-w-[3.5rem] md:min-w-[5rem] text-center shadow-sm inline-block"
          >
            {pad(block.value)}
          </span>
        {/key}
        <span class="mt-1 text-xs md:text-sm text-muted uppercase tracking-wide">{block.unit}</span>
      </div>
    {/each}
  </div>
{/if}
