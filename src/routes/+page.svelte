<script lang="ts">
  import "../app.pcss";
  import Header from "./Header.svelte";
  import Footer from './Footer.svelte';
  import { Heading, P, GradientButton, Img, Tooltip } from 'flowbite-svelte';
  import { DownloadOutline, ArrowUpDownOutline, AdjustmentsHorizontalOutline, AtomOutline } from 'flowbite-svelte-icons';
  import { HeroHeader, FeatureDefault, FeatureItem } from "flowbite-svelte-blocks";
  import { copyText } from 'svelte-copy';
  

  import { t } from "../i18n";

  let listServerData = [
    { name: "HeroMC", ip: "heromc.net", image: "/logo/server/heromc.png" },
    { name: "3FMC", ip: "3fmc.com", image: "/logo/server/3fmc.png" },
    { name: "LuckyVN", ip: "luckyvn.com", image: "/logo/server/luckyvn.png" },
    { name: "BlocksMC", ip: "blocksmc.com", image: "/logo/server/blocksmc.png" },
    { name: "Universocraft", ip: "universocraft.com", image: "/logo/server/universocraft.png" },
    { name: "AcentraMC", ip: "acentramc.com", image: "/logo/server/acentra.png" },
  ]

  const copyIP = (server) => {
    alert(`Copied IP to clipboard: ${server.ip}`);
    copyText(server.ip);
  }
</script>

<div class="px-8 md:px-12 animate-fade-up">
  <div class="flex flex-col z-30 w-screen min-h-152 justify-center max-w-2xl">
    <Heading tag="h1" class="sm:mb-0 md:mb-2" customSize="text-4xl md:text-5xl font-semibold leading-tight md:leading-snug">{$t("home.header.title")} <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">MinusBounce</span> </Heading>
    <P class="mb-4 md:mb-8 text-lg md:text-2xl dark:text-gray-400 w-4/5 mt-2">{$t("home.header.description")}</P>
    <GradientButton shadow color="greenToBlue" href="/download" size="md" class="animate-bounce text-md md:text-xl font-bold w-fit">{$t("home.header.button")}</GradientButton>
  </div>

  <div class="px-8 md:px-16 lg:px-28">
    <HeroHeader class="flex flex-col">
      <Heading tag="h2" class="font-semibold mb-8 leading-relaxed text-gradient w-full text-center">{$t("home.defination.title")}</Heading>
      <span class="mb-12 text-xl dark:text-gray-400 leading-relaxed text-center">{$t("home.defination.description")}</span>
    </HeroHeader>

    <HeroHeader class="flex flex-col items-center mb-12 md:mb-20 lg:mb-28">
      <FeatureDefault divClass="space-y-16 md:space-y-0 md:grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <FeatureItem h3Class="mb-4 text-2xl font-bold dark:text-white" pClass="text-gray-500 dark:text-gray-400 text-lg">
          <svelte:fragment slot="icon"><DownloadOutline size="xl" class="text-blue-500 dark:text-white" /></svelte:fragment>
          <svelte:fragment slot="h3">{$t("home.features.freedownload.title")}</svelte:fragment>
          <svelte:fragment slot="paragraph">
            {$t("home.features.freedownload.description")}
            <a href="/download" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">{$t("home.features.freedownload.description.downloadnow")}
            </svelte:fragment>
          </FeatureItem>
          <FeatureItem h3Class="mb-4 text-2xl font-bold dark:text-white" pClass="text-gray-500 dark:text-gray-400 text-lg">
            <svelte:fragment slot="icon"><ArrowUpDownOutline size="xl" class="text-blue-500 dark:text-white" /></svelte:fragment>
            <svelte:fragment slot="h3">{$t("home.features.performance.title")}</svelte:fragment>
            <svelte:fragment slot="paragraph">{$t("home.features.performance.description")}</svelte:fragment>
          </FeatureItem>
          <FeatureItem h3Class="mb-4 text-2xl font-bold dark:text-white" pClass="text-gray-500 dark:text-gray-400 text-lg">
            <svelte:fragment slot="icon"><AdjustmentsHorizontalOutline size="xl" class="text-blue-500 dark:text-white" /></svelte:fragment>
            <svelte:fragment slot="h3">{$t("home.features.customisable.title")}</svelte:fragment>
            <svelte:fragment slot="paragraph">{$t("home.features.customisable.description")}</svelte:fragment>
          </FeatureItem>
          <FeatureItem h3Class="mb-4 text-2xl font-bold dark:text-white" pClass="text-gray-500 dark:text-gray-400 text-lg">
            <svelte:fragment slot="icon"><AtomOutline size="xl" class="text-blue-500 dark:text-white" /></svelte:fragment>
            <svelte:fragment slot="h3">{$t("home.features.update.title")}</svelte:fragment>
            <svelte:fragment slot="paragraph">{$t("home.features.update.description")}</svelte:fragment>
          </FeatureItem>
        </FeatureDefault>
      </HeroHeader>

      <HeroHeader>
        <svelte:fragment slot="h2">{$t("home.listserver.title")}</svelte:fragment>

        <div class="mb-24 grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">

          {#each listServerData as l}
            <button class="cursor-default hover:cursor-pointer flex justify-center" on:click={() => copyIP(l)}>
              <Img src={l.image} imgClass="rounded border-none h-32 hover:scale-125 transition-all duration-500"></Img>
              <Tooltip class="text-lg animate-fade-up duration-75">{l.ip}</Tooltip>
            </button>
          {/each}
  
        </div>
      </HeroHeader>

    </div>
  </div>
