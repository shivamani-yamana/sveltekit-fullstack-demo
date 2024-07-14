<script>
  import UpdateModal from "./UpdateModal.svelte";
  export let names;
  let Show = false;
  let i;
  function handleShow() {
    Show = false;
  }
</script>

<div
  class="overflow-hidden mt-4 pt-10 max-w-4xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg h-90 relative"
>
  <div class="flex items-center justify-between mb-4">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Users</h2>
      <p class="text-sm text-gray-500">
        Fetched {names.length} users
      </p>
    </div>
  </div>
  <div class="divide-y divide-gray-900/5">
    <div
      class="grid grid-flow-col grid-cols-12 grid-rows-1 bg-slate-400 place-items-center h-8"
    >
      <p class="col-span-4">Name</p>
      <p class="col-span-6">Email</p>
      <p class="col-span-2">Actions</p>
    </div>
    <div class="overflow-y-scroll max-h-40">
      {#each names as user (user.id)}
        <div
          class="grid grid-cols-12 gap-6 gap-y-96 mt-4 border-b-2 justify-center text-center"
        >
          <p class="font-medium pt-1 leading-none col-span-4">{user.name}</p>
          <p class="font-medium pl-5 text-gray-500 pt-0 col-span-6">
            {user.email}
          </p>
          <button
            class="col-span-1"
            on:click={() => {
              Show = true;
            }}
          >
            <img class="w-4 float-right" src="./update.svg" alt="delete" />
          </button>
          <form
            method="POST"
            action="/profiles?/delete"
            class="w-0.5/12 col-span-1"
          >
            <input type="hidden" name="id" id="id" value={user.id} />
            <button type="submit">
              <img class="w-4 float-right" src="./trash-can.svg" alt="delete" />
            </button>
          </form>
        </div>
        <UpdateModal bind:show={Show} on:close={handleShow} userData={user} />
      {/each}
    </div>
  </div>
</div>
