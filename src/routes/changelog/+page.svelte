<script>
    import { onMount } from "svelte";
    import { Heading, P, Timeline, TimelineItem, Hr } from "flowbite-svelte";
    import { CalendarWeekSolid } from 'flowbite-svelte-icons';

    import { t } from "../../i18n";

    let items = [];

    onMount(async () => {
        await fetch(`https://api.github.com/repos/MinusMC/MinusBounce/releases`)
        .then(r => r.json())
        .then(data => {
            items = data.map(item => {
                return {
                    version: item.name,
                    description: item.body,
                    date: item.published_at
                }
            });

            console.log(items);
        });
    })
</script>

<main class="animate-fade-up">
    <div class="text-center flex flex-col justify-center items-center mb-30 mt-20">
        <Heading tag="h1" customSize="text-5xl font-extrabold">{$t("changelog.title")}</Heading>
        <P class="my-10 text-2xl text-gray-500">{$t("changelog.description")}</P>
    </div>
    <Hr classHr="my-8 mx-auto" />
    <div class="mb-20 mt-16 px-32">
        <Timeline>
            {#if items}
              {#each items as item}
                <TimelineItem title="{item.version}" date="{item.date}">
                </TimelineItem>
              {/each}
            {/if}
          </Timeline>
    </div>
</main>