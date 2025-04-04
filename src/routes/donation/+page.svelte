<script>
    import { Heading, Hr, P, Span, Img } from "flowbite-svelte";
    import { Accordion, AccordionItem } from 'flowbite-svelte';

    import {t, locale} from "../../i18n"
</script>

<main class="animate-fade-up">
    <div class="text-center mt-20 mb-20 flex flex-col justify-center items-center">
        <Heading tag="h1" customSize="text-5xl font-extrabold">{$t("donation.title")}</Heading>
        <P class="my-10 text-2xl text-gray-500">{$t("donation.description")}</P>
    </div>
    <Hr classHr="my-8 mx-auto" />
    <div class="flex flex-col justify-center items-center">
        <Accordion class="w-3/5 h-auto mb-16">

            {#if $locale == "Tiếng Việt"}
                <AccordionItem>
                    <Span slot="header" class="flex gap-4 items-center text-lg">
                        <Img src="/payments/momo.png" class="h-8"></Img>
                        {$t("donation.momo.title")}
                    </Span>
                    <p class="mb-3 text-lg text-gray-700 dark:text-gray-400 whitespace-pre-line">
                        {$t("donation.momo.description")}
                    </p>
                </AccordionItem>

                <AccordionItem>
                    <Span slot="header" class="flex gap-4 items-center text-lg">
                        <Img src="/payments/vcbank.png" class="h-8"></Img>
                        {$t("donation.bank.vietcombank.title")}
                    </Span>
                    <p class="mb-3 text-lg text-gray-700 dark:text-gray-400 whitespace-pre-line">
                        {$t("donation.bank.vietcombank.description")}
                    </p>
                </AccordionItem>

                <AccordionItem>
                    <Span slot="header" class="flex gap-4 items-center text-lg">
                        <Img src="/payments/card.png" class="h-8"></Img>
                        {$t("donation.card.title")}
                    </Span>
                    <p class="mb-3 text-lg text-gray-700 dark:text-gray-400">
                        {$t("donation.card.description")}
                    </p>
                </AccordionItem>
            {/if}

            <AccordionItem>
                <Span slot="header" class="flex gap-4 items-center text-lg">
                    <Img src="/payments/crypto.png" class="h-8"></Img>
                    {$t("donation.crypto.title")}
                </Span>
                <p class="mb-3 text-lg text-gray-700 dark:text-gray-400">
                    {$t("donation.crypto.description")}
                </p>
            </AccordionItem>

            <AccordionItem>
                <Span slot="header" class="flex gap-4 items-center text-lg">
                    <Img src="/payments/creditcard.png" class="h-8"></Img>
                    {$t("donation.creditcard.title")}
                </Span>
                <p class="mb-3 text-lg text-gray-700 dark:text-gray-400">
                    {$t("donation.creditcard.description")}
                </p>
            </AccordionItem>

            <AccordionItem>
                <Span slot="header" class="flex gap-4 items-center text-lg">
                    <Img src="/payments/paypal.jpg" class="h-8"></Img>
                    {$t("donation.paypal.title")}
                </Span>
                <p class="mb-3 text-lg text-gray-700 dark:text-gray-400">
                    {$t("donation.paypal.description")}
                </p>
            </AccordionItem>
        </Accordion>
    </div>
</main>
