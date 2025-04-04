<script>
  import { onMount } from "svelte";
  import { Heading, P, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, GradientButton, Hr } from 'flowbite-svelte';

  import { t } from "../../../i18n";

  let searchTerm = '';
  /**
	 * @type {any[]}
	 */
  let items = [];

  $: filteredItems = items.filter((item) => item.commit.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1).slice(0, 10);

  onMount(async () => {
    await fetch(`https://api.github.com/repos/MinusMC/MinusBounce/actions/runs`)
      .then(r => r.json())
      .then(data => {
        items = data.workflow_runs.filter((item) => !item.path.includes("codeql") && item.status == "completed" && item.event != "release" && item.conclusion == "success").map(item => {
          return {
            commit: item.head_sha.substring(0, 7),
            message: item.display_title,
            date: item.run_started_at.replace(/(T|Z)/g, " "),
            link: `https://nightly.link/MinusMC/MinusBounce/actions/runs/${item.id}/MinusBounce.zip`
          }
        });
      });
  })
  
</script>
  
<svelte:head>
  <title>Download beta - MinusBounce</title>
</svelte:head>

<main class="animate-fade-up">
  <div class="text-center flex flex-col justify-center items-center mt-20 mb-20">
    <Heading tag="h1" customSize="text-5xl font-extrabold">{$t("download.title")}</Heading>
    <P class="my-10 text-2xl text-gray-500">{$t("download.description")}</P>
  </div>
  <Hr classHr="my-8 mx-auto" />
  <div class="mb-24 mt-20 px-8 md:px-16 lg:px-32">
    
    <div class="mb-24">
      <Heading tag="h1" customSize="text-3xl font-extrabold">{$t("download.minuslauncher.title")}</Heading>
      <P class="my-8 text-xl text-gray-500">{$t("download.minuslauncher.description")}</P>
    </div>

    <div class="mb-24">
      <Heading tag="h1" customSize="text-3xl font-extrabold">{$t("download.manual.title")}</Heading>
      <P class="my-8 text-xl text-gray-500">{$t("download.manual.description")}</P>
      <div class="mt-10 text-gray-300 dark:text-gray-500">
        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
        <GradientButton href="/download" color="blue" size="sm" class="text-sm mb-6">{$t("download.manual.beta.buttonswitch")}</GradientButton>
        <TableSearch placeholder="Search by commit" hoverable={true} bind:inputValue={searchTerm} class="table-fixed">
          <TableHead>
            <TableHeadCell class="w-28">{$t("download.manual.beta.commit")}</TableHeadCell>
            <TableHeadCell>{$t("download.manual.beta.message")}</TableHeadCell>
            <TableHeadCell class="w-52">{$t("download.manual.beta.date")}</TableHeadCell>
            <TableHeadCell class="w-44">{$t("download.manual.beta.download")}</TableHeadCell>
          </TableHead>
          <TableBody>
            {#if items}
              {#each filteredItems as item}
                <TableBodyRow>
                  <TableBodyCell>{item.commit}</TableBodyCell>
                  <TableBodyCell class="truncate">{item.message}</TableBodyCell>
                  <TableBodyCell class="truncate">{item.date}</TableBodyCell>
                  <TableBodyCell>
                    <GradientButton href={item.link} color="blue" size="sm" class="text-sm">{$t("download.manual.beta.download")}</GradientButton>
                  </TableBodyCell>
                </TableBodyRow>
              {/each}
            {/if}
          </TableBody>
        </TableSearch>
      </div>
    </div>

  </div>
</main>
