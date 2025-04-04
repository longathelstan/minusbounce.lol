<script>
    import { Heading, P, Hr } from "flowbite-svelte";
    import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';

    import { t } from "../../i18n";
</script>

<main class="animate-fade-up">
    <div class="text-center flex flex-col justify-center items-center mb-30 mt-20">
        <Heading tag="h1" customSize="text-5xl font-extrabold">{$t("faq.title")}</Heading>
        <P class="my-10 text-2xl text-gray-500">{$t("faq.description")}</P>
    </div>
    <Hr classHr="my-8 mx-auto" />
    <div class="mb-20 mt-16 px-32">
      <FaqItem>
        <svelte:fragment slot="h3"> What is the client version?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">The client is 1.8.9, and use with Forge.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Is this client paid?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">No! The client is free for anyone to download.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Is this client safe?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Totally safe, and it's open-source.</p>
      </FaqItem>
    </div>
</main>