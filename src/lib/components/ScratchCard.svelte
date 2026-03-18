<script lang="ts">
  interface Props {
    text: string;
    onFullyScratched?: () => void;
  }

  let { text, onFullyScratched }: Props = $props();

  let revealed = $state(false);

  async function reveal() {
    revealed = true;
    try {
      const { default: confetti } = await import('canvas-confetti');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#9b6a3a', '#c47a5a', '#f5f0e8', '#d6ccba', '#ede8dc']
      });
    } catch {
      // skip if unavailable
    }
    onFullyScratched?.();
  }
</script>

<div class="w-full rounded-xl border border-border overflow-hidden" style="max-width:320px">
  {#if revealed}
    <div class="bg-card p-6 flex items-center justify-center min-h-[120px]">
      <p class="text-center text-text font-serif text-base leading-snug">{text}</p>
    </div>
  {:else}
    <button
      onclick={reveal}
      class="w-full bg-gradient-to-br from-[#c47a5a] via-[#b56b6b] to-[#9b5a3a] p-6 min-h-[120px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:brightness-105 transition-all"
    >
      <span class="text-white/80 font-serif text-lg font-semibold">✦ Klik om te onthullen ✦</span>
    </button>
  {/if}
</div>
