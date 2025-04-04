<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from 'flowbite-svelte';
    import { Avatar, Tooltip } from 'flowbite-svelte';

    import {t} from "../i18n"
</script>

<Footer footerType="socialmedia" class="flex flex-col bg-slate-100 mt-auto">
    <div class="md:flex md:justify-between px-6 py-2 mb-12">
        <div class="mb-6 md:mb-0">
            <FooterBrand href="/" classSpan="py-0 text-xl md:text-2xl leading-7 md:leading-9 font-semibold text-gray-800 w-20 whitespace-normal" classImg="mr-3 h-12 md:h-16" src="/logo/small_logo.png" alt="MinusBounce" name="Minus Bounce"/>
        </div>

        <div class="grid grid-cols-3 gap-8">
            <div>
                <h2 class="mb-6 text-xl font-semibold uppercase text-gray-800 dark:text-gray-200">{$t("footer.navbar.download")}</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" classA="text-lg" href="/download">{$t("footer.navbar.download.release")}</FooterLink>
                    <FooterLink liClass="mb-4" classA="text-lg" href="/download/beta">{$t("footer.navbar.download.beta")}</FooterLink>
                    <FooterLink liClass="mb-4" classA="text-lg" href="https://github.com/MinusMC/MinusBounce">{$t("footer.navbar.download.sourcecode")}</FooterLink>
                </FooterLinkGroup>
            </div>

            <div>
                <h2 class="mb-6 text-xl font-semibold uppercase text-gray-800 dark:text-gray-200">{$t("footer.navbar.other")}</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" classA="text-lg" href="/faq">{$t("footer.navbar.other.faq")}</FooterLink>
                    <FooterLink liClass="mb-4" classA="text-lg" href="/plugins">{$t("footer.navbar.other.plugins")}</FooterLink>
                    <FooterLink liClass="mb-4" classA="text-lg" href="/donation">{$t("footer.navbar.other.donation")}</FooterLink>
                </FooterLinkGroup>
            </div>

            <div>
                <h2 class="mb-6 text-xl font-semibold uppercase text-gray-800 dark:text-gray-200">{$t("footer.navbar.social")}</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" classA="text-lg" href="https://discord.minusbounce.lol">Discord</FooterLink>
                    <FooterLink liClass="mb-4" classA="text-lg" href="https://github.com/MinusMC">Github</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <div class="flex justify-between items-center">
        <FooterCopyright href="/" by="MinusMC™" classSpan="text-md md:text-left text-left" />
        <div class="flex gap-1">
            <div>
                <Avatar data-name="toidicakhia" src="https://avatars.githubusercontent.com/u/108525966?v=4" href="https://e-z.bio/toidicakhia" target="_blank"/>
                <Tooltip class="animate-bounce">toidicakhia</Tooltip>
            </div>

            <div>
                <Avatar data-name="longathelstan" src="https://avatars.githubusercontent.com/u/121792617?v=4" href="https://tlowng.minusmc.xyz" target="_blank"/>
                <Tooltip class="animate-bounce">longathelstan</Tooltip>
            </div>

            <div>
                <Avatar data-name="fmcpe" src="https://avatars.githubusercontent.com/u/70578351?v=4" href="https://github.com/fmcpe" target="_blank"/>
                <Tooltip class="animate-bounce">fmcpe</Tooltip>
            </div>
        </div>
    </div>
</Footer> 
