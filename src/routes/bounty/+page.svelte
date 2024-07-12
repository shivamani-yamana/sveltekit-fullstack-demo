<script lang="ts">
  import { enhance } from "$app/forms";
  export let form;

  let btn_switch = 0;
  let last = 0;
</script>

<div class="bounty-page flex w-screen justify-center gap-40 mt-10">
  <div class="">
    <form method="POST" action="?/deploy" use:enhance>
      <h1 class="font-bold text-lg">Deploy A Bounty</h1>
      <div class="">
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Bounty
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="bounty"
            type="number"
            placeholder="Enter Bounty Amount"
            name="bounty"
            required
          />
        </div>
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Enter the number whose square root is on bounty
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="square"
            type="number"
            placeholder="Enter Number"
            name="square"
            required
          />
        </div>
        <br />
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
            required
          />
        </div>
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="text"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>
        <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
  Email
  </label>
  </div> -->
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded w-40 h-10"
          on:click={() => {
            btn_switch = 0;
          }}
        >
          Deploy Bounty
        </button>
      </div>
    </form>
    {#if form?.success && btn_switch == 0}
      <!-- this message is ephemeral; it exists because the page was rendered in
response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2">
        Bounty was deployed successfully

        <a
          href="http://whatsonchain.com/tx/{form?.tx}"
          class="text-blue-500"
          target="_blank"
        >
          transaction link</a
        >
      </p>
    {/if}
  </div>
  <div class="">
    <form method="POST" action="?/unlock" use:enhance>
      <h1 class="font-bold text-lg">Unlock This Bounty</h1>
      <div class="">
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Root
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="root"
            type="number"
            placeholder="Enter Root answer"
            name="root"
            required
          />
        </div>
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
            required
          />
        </div>
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="text"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded w-40 h-10"
          on:click={() => {
            btn_switch = 1;
          }}
        >
          Unlock Bounty
        </button>
      </div>
    </form>
    {#if form?.success && btn_switch == 1}
      <!-- this message is ephemeral; it exists because the page was rendered in
response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2">
        Bounty was unlocked successfully
        <a
          href="http://whatsonchain.com/tx/{form?.success}"
          target="_blank"
          class="text-blue-500">transaction link</a
        >
      </p>
    {/if}
  </div>
</div>
