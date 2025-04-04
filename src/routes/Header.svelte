<script type="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { DarkMode, Button, ToolbarButton, Dropdown, DropdownItem } from 'flowbite-svelte';

  import { GithubSolid, DiscordSolid } from 'flowbite-svelte-icons';

  import { t, locale, locales } from "../i18n";

</script>

<header class="top-0 z-40 flex-none mx-auto border-b border-gray-300 dark:border-gray-600 px-6">
  <Navbar color="none" fluid>
    <NavBrand href="/">
      <img src="/logo/small_logo.png" class="me-3 h-10" alt="MinusBounce" />
      <div class="flex flex-col">
        <span class="py-0 text-2xl font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white w-20 hidden md:block">MinusBounce</span>
      </div>
    </NavBrand>

    <div class="flex gap-2 md:gap-5 items-center ml-auto md:order-2">
      <div class="flex gap-2">
          <ToolbarButton class="hidden xl:inline-block text-gray-500 dark:hover:text-white hover:text-gray-900 focus:ring-0" name="Github" size="lg" target="_blank" rel="noreferrer" href="https://github.com/MinusMC">
            <GithubSolid size="lg" fill="currentColor" class="focus:outline-none rounded-lg"></GithubSolid>
          </ToolbarButton>

          <ToolbarButton class="hidden xl:inline-block text-gray-500 dark:hover:text-white hover:text-gray-900 focus:ring-0" name="Discord" size="lg" target="_blank" rel="noreferrer" href="https://discord.minusbounce.lol/">
            <DiscordSolid size="lg" fill="currentColor" class="focus:outline-none rounded-lg"></DiscordSolid>
          </ToolbarButton>

        <DarkMode size="lg" class="inline-block dark:hover:text-white hover:text-gray-900" />
      </div>

      <Button color="blue" class="text-md">{$locale}</Button>
      <Dropdown>
        {#each locales as l}
          <DropdownItem on:click={() => locale.set(l)}>{l}</DropdownItem>
        {/each}
      </Dropdown>

      <NavHamburger class="text-gray-500 md:block lg:hidden"/>
    </div>

    <NavUl divClass="ms-auto lg:block w-full lg:w-auto order-2 lg:order-none" ulClass="flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-lg font-medium gap-6 md:px-4">
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/">{$t("navbar.home")}</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/download">{$t("navbar.download")}</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/donation">{$t("navbar.donation")}</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/changelog">{$t("navbar.changelog")}</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/faq">{$t("navbar.faq")}</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 dark:text-gray-400" href="/plugins">{$t("navbar.plugins")}</NavLi>
    </NavUl>
  </Navbar>
</header>