<script lang="ts">
  import type { Present } from '$lib/presents';
  import ScratchCard from './ScratchCard.svelte';

  interface Props {
    present: Present;
    onClose: () => void;
  }

  let { present, onClose }: Props = $props();

  function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }
</script>

<svelte:window onkeydown={onKeydown} />

<!-- Backdrop -->
<div
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text/40 backdrop-blur-sm"
  role="presentation"
  onclick={onBackdropClick}
>
  <!-- Modal panel -->
  <div
    class="relative w-full max-w-md rounded-2xl bg-cream border border-border shadow-2xl p-6 flex flex-col gap-5"
    role="dialog"
    aria-modal="true"
    aria-label={present.label}
  >
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-text">{present.emoji} {present.label}</h2>
      <button
        onclick={onClose}
        class="text-muted hover:text-text transition-colors text-xl leading-none"
        aria-label="Sluiten"
      >✕</button>
    </div>

    <!-- Scratch card -->
    <div class="flex justify-center">
      <ScratchCard text={present.text} />
    </div>

    <!-- Footer -->
    <div class="flex justify-end">
      <button
        onclick={onClose}
        class="px-5 py-2 rounded-lg border border-border bg-card text-text hover:bg-border transition-colors text-sm font-medium"
      >
        Sluiten
      </button>
    </div>
  </div>
</div>
