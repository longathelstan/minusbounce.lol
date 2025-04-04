<script>
  import { onMount } from "svelte";
  import { Heading, P, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, GradientButton, Hr } from 'flowbite-svelte';

  import { t } from "../../i18n";

  let searchTerm = '';
  let items = [];

  $: filteredItems = items.filter((item) => item.version.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1).slice(0, 10);

  onMount(async () => {
    await fetch(`https://api.github.com/repos/MinusMC/MinusBounce/releases`)
      .then(r => r.json())
      .then(data => {
        items = data.filter((item) => item.assets.length > 0).map(item => {
          return {
            version: item.tag_name,
            date: item.published_at.replace(/(T|Z)/g, " "),
            link: item.assets[0].browser_download_url
          }
        });
      });
  })
  
</script>
  
<svelte:head>
  <title>Download release - MinusBounce</title>
</svelte:head>

<main class="animate-fade-up">
  <div class="text-center flex flex-col justify-center items-center mt-20 mb-20">
    <Heading tag="h1" customSize="text-5xl font-extrabold">{$t("download.title")}</Heading>
    <P class="my-10 text-2xl text-gray-500">{$t("download.description")}</P>
  </div>
  <Hr classHr="my-8 mx-auto"/>
  <div class="mb-24 mt-20 px-8 md:px-16 lg:px-32">
    <div class="mb-24">
      <Heading tag="h1" customSize="text-3xl font-extrabold">{$t("download.minuslauncher.title")}</Heading>
      <P class="my-8 text-xl text-gray-500">{$t("download.minuslauncher.description")}</P>
    </div>

    <div class="mb-24">
      <Heading tag="h1" customSize="text-3xl font-extrabold">{$t("download.manual.title")}</Heading>
      <P class="my-8 text-xl text-gray-500">{$t("download.manual.description")}</P>
      <div class="mt-10 text-gray-300 dark:text-gray-500">
        <span class="relative flex h-fit w-fit">
        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
        <GradientButton href="/download/beta" color="blue" size="sm" class="text-sm mb-6">{$t("download.manual.release.buttonswitch")}</GradientButton>
        </span>
        <TableSearch placeholder={$t("download.manual.release.search")} hoverable={true} bind:inputValue={searchTerm}>
          <TableHead>
            <TableHeadCell>{$t("download.manual.release.version")}</TableHeadCell>
            <TableHeadCell>{$t("download.manual.release.date")}</TableHeadCell>
            <TableHeadCell>{$t("download.manual.release.download")}</TableHeadCell>
          </TableHead>
          <TableBody>
            {#if items}
              {#each filteredItems as item}
                <TableBodyRow>
                  <TableBodyCell>{item.version}</TableBodyCell>
                  <TableBodyCell>{item.date}</TableBodyCell>
                  <TableBodyCell>
                    <GradientButton href={item.link} color="blue" size="sm" class="text-sm">{$t("download.manual.release.download")}</GradientButton>
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