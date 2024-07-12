<script>
  import { enhance } from "$app/forms";

  export let form;
  let last = 0;
</script>

<div class="flex justify-center gap-40 mt-10">
  <div class="">
    <form method="POST" action="?/login" use:enhance>
      <div class="">
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
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-6 rounded w-40 h-10"
          on:click={() => {
            last = 0;
          }}
        >
          Login
        </button>
      </div>
    </form>
    {#if last == 0}
      {#if form?.success}
        <p class="pt-2">
          Login Successful! Your Wallet Balance is {form?.balance}
        </p>
      {/if}
    {/if}
  </div>

  <div class="">
    <form method="POST" action="?/pay" use:enhance>
      <div class="">
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
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Paymail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="paymail"
            type="text"
            placeholder="Enter paymail"
            name="paymail"
            required
          />
        </div>
        <div class="">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Amount
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="amount"
            type="number"
            placeholder="Enter Amount"
            name="amount"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-6 rounded w-40 h-10"
          on:click={() => {
            last = 1;
          }}
        >
          Pay
        </button>
      </div>
    </form>
    {#if last == 1}
      {#if form?.success}
        <p class="pt-2">
          Your payment was successfull and Here's your <a
            href="https://whatsonchain.com/tx/{form?.payment}"
            class="text-blue-500">transaction</a
          >
        </p>
      {/if}
    {/if}
  </div>
</div>
