<script lang="ts">
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import PresentCard from '$lib/components/PresentCard.svelte';
  import { presents, birthdayAt } from '$lib/presents';

  // Petals: position, size, speed, delay — generated once
  const petals = Array.from({ length: 18 }, (_, i) => ({
    symbol: ['🌸', '🌺', '✿', '❀', '💮', '🌷'][i % 6],
    left: (i * 5.5 + Math.sin(i * 1.3) * 4) % 98,
    duration: 7 + (i * 1.1) % 8,
    delay: -(i * 1.7) % 12,
    size: 0.8 + (i % 4) * 0.2,
    opacity: 0.35 + (i % 3) * 0.15,
  }));
</script>

<!-- Floating petals layer -->
<div aria-hidden="true">
  {#each petals as p}
    <span
      class="petal"
      style="left:{p.left}%; animation-duration:{p.duration}s; animation-delay:{p.delay}s; font-size:{p.size}rem; opacity:{p.opacity};"
    >{p.symbol}</span>
  {/each}
</div>

<main class="relative z-10 min-h-screen flex flex-col items-center py-12 px-4 gap-12">
  <!-- Hero -->
  <section class="flex flex-col items-center gap-2 text-center pt-4 anim-fade-up anim-delay-1">
    <h1 class="text-4xl md:text-6xl font-semibold text-text leading-tight">
      Gelukkige 31e verjaardag, <span class="text-accent italic">Saskia</span>! 🎂
    </h1>
    <p class="text-muted text-lg md:text-xl mt-1">Vandaag is helemaal voor jou ✨</p>
  </section>

  <!-- Main countdown -->
  <section class="flex flex-col items-center gap-4 anim-fade-up anim-delay-2">
    <CountdownTimer targetDate={birthdayAt} label="Hoofdaftelling" />
  </section>

  <!-- Divider -->
  <div class="w-full max-w-2xl flex items-center gap-4 anim-fade-up anim-delay-3">
    <span class="flex-1 h-px bg-border"></span>
    <span class="text-muted text-sm uppercase tracking-widest">Jouw cadeautjes</span>
    <span class="flex-1 h-px bg-border"></span>
  </div>

  <!-- Present cards -->
  <section class="w-full max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each presents as present, i}
      <div class="anim-fade-up" style="animation-delay:{0.4 + i * 0.1}s; animation-fill-mode: both;">
        <PresentCard {present} />
      </div>
    {/each}
  </section>

  <footer class="mt-auto pt-8 text-center text-xs text-muted anim-fade-up anim-delay-5">
    Gemaakt met ❤️
  </footer>
</main>
