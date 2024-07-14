<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  export let show = false;
  export let userData;
  const close = () => {
    show = false;
    dispatch("close");
  };
  let form;
</script>

{#if show}
  <div
    class="modal-bg w-full bg-white overflow-hidden absolute top-0 left-0 flex justify-center items-center"
  >
    <div class="w-10/12 h-60 bg-white relative">
      <h1 class="p-4 text-2xl">Update details</h1>
      <form
        method="POST"
        action="/profiles?/update"
        class="flex justify-around"
      >
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter new Name"
            class="bg-slate-100 p-2 rounded w-40"
            value={userData.name}
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter new Email"
            class="bg-slate-100 p-2 rounded"
            value={userData.email}
            required
          />
          <input type="hidden" name="id" id="id" value={userData.id} />
        </div>
        <button
          type="submit"
          class=" bg-amber-400 px-4 hover:bg-slate-400 hover:text-black"
        >
          Update
        </button>
      </form>
      <button
        type="submit"
        class=" bg-red-500 mt-10 px-4 py-2 text-white hover:bg-slate-400 hover:text-black absolute right-6 bottom-4"
        on:click={close}
      >
        Close
      </button>
    </div>
  </div>
{/if}
