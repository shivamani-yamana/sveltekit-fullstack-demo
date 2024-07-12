<script lang="ts">
  import { PrivateKey } from "@bsv/sdk";

  let WIF: string;
  let address: string;
  let walletCreated = false;
  let showDetails = false;

  function createWallet() {
    const privatekey = PrivateKey.fromRandom();
    WIF = privatekey.toWif();
    address = privatekey.toAddress();
    walletCreated = true;
    detailsShow();
  }

  function detailsShow() {
    showDetails = true;
    setTimeout(() => {
      showDetails = false;
    }, 5000);
  }
</script>

<div
  class="raw-wallet-div max-w-screen-md border-black w-10/12 bg-slate-200 m-auto mt-10 rounded-2xl flex flex-col gap-4 items-center max-h-8/12 h-60"
>
  <h1 class="text-black font-extrabold text-4xl mt-4">Raw Wallet</h1>
  <button
    on:click={createWallet}
    class="bg-slate-400 rounded px-3 py-2 mx-auto hover:bg-white hover:text-black"
    >Create Wallet</button
  >
  {#if walletCreated}
    <div class="w-full flex flex-col items-center justify-center gap-2">
      <div class="privatekey flex w-full justify-center text-center">
        <p>Wallet Private key :</p>
        <input type="text" value={WIF} class="px-4 w-8/12 mx-2" />
      </div>
      <div class="btcadd flex w-full justify-center text-center">
        <p>Your Bitcoin Address :</p>
        <input type="text" value={address} class="px-4 w-8/12 mx-2" />
      </div>
    </div>
  {/if}
  {#if showDetails}
    <p class="text-green-400">Wallet Created</p>
  {/if}
</div>
