<script>
  import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import '../app.postcss';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead"><a href="/">listd.tv</a></svelte:fragment>
      <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
  <!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
  <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
  <!-- Router Slot -->
  <!-- TODO: use variable for container width -->
  <div class="mx-auto w-80 max-w-sm pt-2">
    <slot />
  </div>
  <!-- ---- / ---- -->
  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
  <!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
