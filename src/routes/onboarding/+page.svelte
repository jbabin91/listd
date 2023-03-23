<script lang="ts">
  import { FileButton } from '@skeletonlabs/skeleton';
  // TODO: fix $app import error with eslint
  // eslint-disable-next-line import/no-unresolved
  import { enhance } from '$app/forms';

  let files: FileList;
</script>

<p>Everyone needs a friend. Friends are the most valuable things in the world.</p>
<form class="pt-4" method="POST" use:enhance={() => async () => {}}>
  <label for="name">
    <span>Username</span>
    <input type="text" id="username" value="w3cj" minlength="4" required />
  </label>
  <p class="my-4">You can customize your avatar.</p>
  <div class="flex justify-center">
    <FileButton bind:files button="btn-filled-primary">Upload File</FileButton>
  </div>
  <p class="pt-4">
    Son of a gun. Don't be bashful drop me a line. Be brave. It's all a game of angles. And I will
    hypnotize that just a little bit.
  </p>
  <div class="my-4 flex justify-end">
    <button class="btn btn-base btn-filled-success">Lets Go!</button>
  </div>
</form>
