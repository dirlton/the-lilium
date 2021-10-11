<template>
  <div>
    <div class="bg-theme-50">
      <div class="max-w-8xl px-4 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Proudly Developed By</h4>
            <img
              src="~assets/img/developer-logo.png"
              alt="SingHaiYi Logo"
              class="object-contain h-36"
            />
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Normanton Park</h4>
            <ul class="space-y-3 text-gray-600">
              <li>Developer: Kingsford Huray Development Pte Ltd</li>
              <li>Tenure of Land: 99 Years Leasehold</li>
              <li>Site Area: 660,999 sqft</li>
              <li>Expected TOP: Jan 23</li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Site Links</h4>
            <ul class="space-y-3 text-gray-600">
              <li>
                <NuxtLink
                  to="/"
                  aria-current="page"
                  class="nuxt-link-exact-active nuxt-link-active"
                  >Normanton Park</NuxtLink
                >
              </li>
              <li><NuxtLink to="/floor-plan" class="">Floor Plan</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="">Pricing</NuxtLink></li>
              <li>
                <NuxtLink to="/book-an-appointment" class=""
                  >Book Appointment (Direct Price)</NuxtLink
                >
              </li>
              <li><NuxtLink to="/contact-us" class="">Contact Us</NuxtLink></li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Contact Us</h4>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center space-x-2">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 10c0-3.414 2.676-6 6-6s6 2.586 6 6c0 2.982-1.567 5.5-3.238 7.33A18.488 18.488 0 0112 19.79a18.49 18.49 0 01-2.762-2.46C7.567 15.5 6 12.981 6 10zm5.474 11.85L12 21l-.525.85a1 1 0 001.05 0L12 21l.526.85h.001l.002-.001.006-.004.02-.013a7.993 7.993 0 00.311-.206c.206-.141.496-.348.841-.616a20.487 20.487 0 002.531-2.332C18.067 16.677 20 13.695 20 10c0-4.539-3.592-8-8-8-4.408 0-8 3.461-8 8 0 3.695 1.933 6.677 3.762 8.678a20.485 20.485 0 002.53 2.332 17.706 17.706 0 001.085.778c.029.02.052.034.068.044l.02.013.006.004h.002v.001zM10 10a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Normanton Park</p>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M12 7v3.764a2 2 0 001.106 1.789L16 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p>10:00 AM – 7:00 PM</p>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="tel:+6561003337">+65 6100-3337</a>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M7 9l3.75 3a2 2 0 002.5 0L17 9m4 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="mailto:sales@normantonparkcondos.com.sg"
                  >sales@normantonparkcondos.com.sg</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-6 text-center bg-gray-200">
        <div class="max-w-6xl px-4 mx-auto space-y-2">
          <div class="text-sm text-gray-500">
            <div
              class="
                flex flex-wrap
                justify-center
                max-w-2xl
                mx-auto
                divide-x divide-gray-500
              "
            >
              <p class="px-1">Copyright © 2021</p>
              <p class="px-1">Normanton Park</p>
              <p class="px-1">Kingsford Huray Development.</p>
              <p class="px-1"><a href="tel:+6561003337">+65 6100 3337</a></p>
              <NuxtLink to="/privacy-policy" class="px-1"
                >Privacy Policy</NuxtLink
              >
            </div>
          </div>
          <div class="text-[10px] text-gray-400">
            Disclaimer: The photographic and artistic impressions contained in
            this website are for illustrative purposes only and the final
            product may differ from that illustration. Images of furniture are
            for illustrative purposes only. Reference to time, distances and
            localities are approximate only and may be subject to traffic
            conditions. Views will vary depending on position of lot within
            building. The developer, builder or agent does not warrant that
            views will not be impacted by future development. Any statistics
            quoted in this brochure are not representations by the developer or
            its agents. While care has been taken to ensure that all information
            contained in this brochure are accurate the developer or its agents
            do not represent or warrant the accuracy. This website is for
            marketing purposes only and should not be relied upon when making a
            decision to purchase. While every reasonable care has been taken in
            preparing this website and in constructing the models and showflats,
            the developer and the marketing agents cannot be held responsible
            for any inaccuracies or omissions. Visual representations, models,
            showflats displays and illustrations, photographs, art renderings
            and other graphic representations and references are intended to
            portray only artist’s impressions of the development and cannot be
            regarded as representations of fact. All property listed, be it in
            Singapore or oversea is subject to final inspection by relevant
            authorities to comply with the current code of practice and policies
            for the respective country.Purchasers should make their own
            enquiries and where applicable obtain appropriate professional
            advice as to their particular circumstances. All purchases are
            subject to contract terms.
          </div>
        </div>
      </div>
    </div>

    <div id="whatsapp-chat" class="hide">
      <div class="header-chat">
        <div class="head-home">
          <div class="info-avatar">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 42"
            >
              <path
                d="M199.54.67h-3.87c-.2 0-.5 0-.5.22s.08.23.25.23a5.43 5.43 0 011 .09c.56.14.71.48.73 1.73l.22 9.48c-.35-.34-.93-.93-1.63-1.65-.92-.94-2.06-2.11-3.13-3.18-3.18-3.17-6.22-6.23-6.52-6.56a1 1 0 01-.18-.18c-.27-.27-.45-.45-.6-.45s-.31.34-.31 1v10.94c0 1.75-.11 2.23-.55 2.34a3.07 3.07 0 01-.81.11c-.19 0-.25.11-.25.21s.26.24.41.24h4.07c.14 0 .46 0 .46-.24s-.07-.21-.25-.21a4.57 4.57 0 01-1-.11c-.46-.12-.69-.49-.74-2.13l-.26-8.92c.85.88 3 3.12 5.19 5.32s5.14 5 5.35 5.18c1.12 1 1.36 1.25 1.56 1.25s.27-.16.27-1.45V2.73c0-1.16.09-1.49.69-1.61a2.1 2.1 0 01.48 0c.21 0 .31-.12.31-.23s-.28-.22-.46-.22M168.87 14.65c-3.81 0-6.47-3-6.47-7.22 0-3.82 2.26-6.2 5.89-6.2 3 0 6.14 2.18 6.14 7 0 6.15-4.63 6.46-5.56 6.46M168.44.4a7.72 7.72 0 00-8.17 7.6c0 3.66 2.52 7.6 8 7.6 4.79 0 8.27-3.32 8.27-7.9 0-4.34-3.27-7.26-8.14-7.26M151.72.53h-.19l-.4.07a8.92 8.92 0 01-1.43.09H142c-.25 0-1 0-1.61-.09a2.19 2.19 0 01-.69-.17.66.66 0 00-.22-.06c-.13 0-.21.18-.29.43 0 .08-.46 1.79-.46 2s.1.26.2.26.21-.07.28-.24a3.33 3.33 0 01.34-.58c.31-.42.76-.55 2-.57h2.94v8c0 1.79 0 3.34-.1 4.13-.09.6-.19.92-.52 1a3 3 0 01-.6.07c-.19 0-.25.11-.25.21s.29.24.41.24H147.96c.35 0 .42-.13.42-.24s-.07-.21-.25-.21a8.76 8.76 0 01-.91-.07c-.53-.07-.66-.39-.73-1-.1-.8-.1-2.35-.1-4.14v-8h2.49c2.07 0 2.39.54 2.44 1v.21c0 .22 0 .41.25.41s.23-.09.23-.34v-.61-1.5c0-.11 0-.32-.2-.32M131.29.67h-3.87c-.2 0-.5 0-.5.22s.09.23.25.23a5.43 5.43 0 011 .09c.56.14.71.48.73 1.73l.22 9.48c-.35-.34-.93-.94-1.64-1.66-.92-.94-2-2.1-3.12-3.17-3.18-3.17-6.21-6.23-6.52-6.56a1.52 1.52 0 01-.18-.18c-.27-.27-.45-.45-.6-.45s-.31.34-.31 1v10.94c0 1.75-.12 2.23-.56 2.34a3.07 3.07 0 01-.81.11c-.19 0-.25.11-.25.21s.26.24.41.24H119.68c.14 0 .46 0 .46-.24s-.06-.21-.25-.21a4.57 4.57 0 01-1-.11c-.46-.12-.69-.49-.74-2.13l-.26-8.92c1 1 3.11 3.23 5.19 5.32s5.14 5 5.36 5.18c1.11 1 1.35 1.25 1.55 1.25s.28-.16.28-1.45V2.73c0-1.16.08-1.49.68-1.61a2.1 2.1 0 01.48 0c.21 0 .31-.12.31-.23s-.27-.22-.46-.22M102.49 8.79H98.6l1.8-5.16a.71.71 0 01.07-.15.71.71 0 01.07.15l1.94 5.15m6.13 6.05a2.86 2.86 0 01-.8-.11c-.45-.12-1-.46-1.7-2.07-.81-1.86-2.57-6.14-3.73-9l-1-2.54c-.25-.61-.35-.74-.53-.74s-.29.18-.54.8l-4.69 11.9c-.39 1-.79 1.63-1.65 1.74h-.58c-.13 0-.27.08-.27.21s.31.24.47.24H97.51c.26 0 .4-.08.4-.24s-.06-.21-.3-.21h-.2c-.27 0-.69-.12-.69-.46a3.76 3.76 0 01.28-1.22l1.23-3.37c0-.09.07-.1.12-.1h4.4l.11.06 1.9 4.7a.38.38 0 010 .31l-.08.08c-.18 0-.21.16-.21.22s.21.2.61.22h3.31c.33 0 .5-.08.5-.24s-.22-.21-.29-.21M87.15 14.84a4.89 4.89 0 01-1.3-.16c-.84-.26-1-1.32-1-1.95L83.43 1c0-.31-.09-.6-.33-.6s-.33.22-.39.35L76.76 12.6 70.57.74c-.1-.21-.2-.34-.38-.34s-.29.16-.32.42L68.4 13.28v.07c-.08.69-.15 1.34-.74 1.44a3.07 3.07 0 01-.6.05c-.14 0-.29.06-.29.19s.33.26.43.26h3.63c.15 0 .46 0 .46-.26s-.13-.19-.25-.19a4.25 4.25 0 01-.77-.09.54.54 0 01-.46-.5v-1l.81-8.68c.45 1 2.45 5 2.63 5.3v.08c.69 1.3 1.92 3.59 2.35 4.35v.08c.38.68.48.85.66.85s.3-.15.62-.79l5.07-10 1 9.66a1.66 1.66 0 010 .58c-.14 0-.22.11-.22.23s.21.24.66.28c.78.06 3 .11 3.43.11s.52-.09.52-.26-.09-.19-.26-.19M50.44 1.71a.14.14 0 01.09-.14 6.92 6.92 0 011.35-.11c2.17 0 3.46 1.4 3.46 3.73a3.33 3.33 0 01-1.21 2.87 2.76 2.76 0 01-1.49.34 6.17 6.17 0 01-2.11-.29.16.16 0 01-.09-.11zm11.79 13.13a5.94 5.94 0 01-.79-.05A4.28 4.28 0 0159 13.44c-1-1-2.25-2.49-3.65-4.17l-.54-.65c1.66-1.45 2.44-2.86 2.44-4.42a3.4 3.4 0 00-1.46-2.68A6.78 6.78 0 0052 .67h-4.73c-.12 0-.42 0-.42.24a.23.23 0 00.26.21 4.94 4.94 0 01.68 0c.64.13.77.42.81 1s0 1.14 0 4.12v3.42c0 1.79 0 3.34-.1 4.13-.09.6-.2.92-.53 1a3.67 3.67 0 01-.6.07c-.18 0-.25.11-.25.21s.29.24.42.24H51.99c.34 0 .41-.13.41-.24s-.06-.21-.25-.21a9 9 0 01-.91-.07c-.53-.07-.66-.38-.72-1-.1-.8-.1-2.35-.1-4.14V9.2l.05-.06h2.52a.26.26 0 01.2.08l.77 1c.43.55 1 1.24 1.46 1.85l.26.32a9 9 0 002.54 2.51 4.55 4.55 0 002.23.37h1.45c.32 0 .58 0 .58-.24a.25.25 0 00-.27-.21M31.94 14.65c-3.81 0-6.47-3-6.47-7.22 0-3.82 2.26-6.2 5.89-6.2 3 0 6.15 2.18 6.15 7 0 6.15-4.64 6.46-5.57 6.46M31.51.4A7.71 7.71 0 0023.35 8c0 3.66 2.51 7.6 8 7.6 4.79 0 8.26-3.32 8.26-7.9.04-4.38-3.23-7.3-8.1-7.3M16.2.67h-3.89c-.2 0-.5 0-.5.22s.09.23.26.23a5.34 5.34 0 011 .09c.57.14.71.48.73 1.73l.2 9.48c-.35-.34-.93-.93-1.63-1.66-.92-.93-2.06-2.1-3.13-3.17C6.07 4.41 3 1.35 2.73 1L2.55.85C2.29.58 2.1.4 2 .4s-.31.34-.31 1v10.94c0 1.75-.11 2.23-.55 2.34a3.2 3.2 0 01-.82.11c-.18 0-.25.11-.25.21s.26.24.42.24H4.63c.13 0 .45 0 .45-.24s-.06-.21-.25-.21a4.62 4.62 0 01-1-.11c-.45-.12-.69-.49-.73-2.13l-.33-8.87C3.61 4.56 5.76 6.8 8 9s5.13 5 5.35 5.18c1.12 1 1.35 1.25 1.55 1.25s.28-.16.28-1.45V2.78c0-1.16.08-1.49.69-1.61a2 2 0 01.47 0c.22 0 .31-.12.31-.23s-.27-.27-.45-.27M156.46 24.89c.16-.23.34-.45.52-.67a4.55 4.55 0 01.81-.72 5.2 5.2 0 01-.38.44c-.25.26-.48.5-.7.71zm-1.93 5.22l.57-.31c.23-.12.46-.24.69-.34a2.45 2.45 0 01.58-.21l.47-.11h.22a4.17 4.17 0 01-2.53 1m6.61.22a.51.51 0 00-.52 0l-.35.21a15.21 15.21 0 01-1.71.74 9.45 9.45 0 01-1.82.43 2.13 2.13 0 01-1.3-.2 3.78 3.78 0 01-.9-.64 7.83 7.83 0 001.79-.27 5.09 5.09 0 001.78-.91 3.39 3.39 0 00.31-.34 1.25 1.25 0 00.2-.4.75.75 0 000-.42.65.65 0 00-.34-.36 1.64 1.64 0 00-1-.2 3.63 3.63 0 00-1 .24 6.69 6.69 0 00-.94.44l-.8.45a5.7 5.7 0 00-.57.34l-.22.14L155.2 27c.19-.14.39-.3.59-.48s.39-.35.59-.51l1-.86c.31-.29.63-.57.93-.86l.36-.34c.12-.13.25-.25.36-.38a2 2 0 00.31-.42 1.3 1.3 0 00.16-.48.48.48 0 00-.14-.46.7.7 0 00-.36-.21 1.35 1.35 0 00-.45 0 1.52 1.52 0 00-.42.1 2.82 2.82 0 00-1 .67 9 9 0 00-.72.85 15.45 15.45 0 00-1 1.42c-.29.48-.58 1-.84 1.45l-.45.36c-.85.65-1.76 1.29-2.68 1.89a22.86 22.86 0 01-2.74 1.53 1.3 1.3 0 00-.33.14c-.13.07-.2.09-.24.11l-.69.31-.65.29c-.64.23-1.16.4-1.55.5s-.55.11-.63 0a.46.46 0 01-.17-.4 2 2 0 01.13-.6 5.89 5.89 0 01.29-.63c.12-.2.22-.38.31-.51a.65.65 0 00.11-.7c-.07-.14-.25-.3-.75-.14a8.57 8.57 0 01-1.09.51 2.64 2.64 0 01-1 .19h-.2a.88.88 0 01-.24 0 1.68 1.68 0 00.42-.42.67.67 0 00.13-.67.65.65 0 00-.57-.42 1.18 1.18 0 00-1 .44 1.25 1.25 0 00-.34.92l-1.14.59-1.12.56h-.2a2.22 2.22 0 00-.41.2 1.24 1.24 0 01-.29.13l-1 .44c-.39.15-.79.29-1.19.41a11 11 0 01-1.17.28 3.32 3.32 0 01-.91.05l-.12-.07s0-.07.06-.18a.85.85 0 01.18-.28l.25-.24a.69.69 0 00.22-.34.51.51 0 00-.21-.63.47.47 0 00-.65.08 6.07 6.07 0 01-1.26.94 3.65 3.65 0 01-.42.23 5.65 5.65 0 01-.69.31 4.38 4.38 0 01-.73.23.56.56 0 01-.45 0s-.12-.09 0-.36a4 4 0 01.5-.69 8.3 8.3 0 01.65-.67c.22-.21.38-.35.46-.41s.41-.24.58-.33a2.59 2.59 0 01.6-.23l1.22-.13a.93.93 0 00.55-.31.32.32 0 00.1-.27.55.55 0 00-.24-.38 1.27 1.27 0 00-.75-.09 8.81 8.81 0 00-1 .18c-.37.08-.71.18-1 .28s-.55.18-.67.23l-.88.32-1.1.43c-.37.15-.74.31-1.07.47l-.83.39a.36.36 0 00-.22.27.33.33 0 00.07.27.44.44 0 00.25.16.5.5 0 00.34 0c.32-.15.67-.32 1.06-.49l1.11-.52.77-.35-.07.06a6.22 6.22 0 00-.76.78 5.21 5.21 0 00-.56.82 1.46 1.46 0 00-.23.7.92.92 0 00.45.78 1.62 1.62 0 00.82.22h.1a3 3 0 001.08-.33l1-.52.54-.3a1.24 1.24 0 000 .51.88.88 0 00.6.55 1.56 1.56 0 00.57.1h.25a4.81 4.81 0 00.84-.17 6.82 6.82 0 00.79-.31c.25-.12.48-.22.7-.3l.94-.39.93-.39a1.69 1.69 0 01.31-.13l.44-.16a1.47 1.47 0 00.28-.16 1.68 1.68 0 01.38-.19l.5-.28.6-.32.69-.34a1.1 1.1 0 00.68.3 5 5 0 00.95 0 5.07 5.07 0 00.92-.14l.4-.09-.18.68-.12.41a3.15 3.15 0 00-.11.44 1.76 1.76 0 000 .46.86.86 0 00.18.43.9.9 0 00.76.37 2.83 2.83 0 00.92-.16 6.49 6.49 0 00.91-.38l.74-.38 1.13-.47.24-.08a1.79 1.79 0 00.32-.13l.1-.05a.72.72 0 00.35-.13l.35-.25c.43-.23.85-.47 1.23-.69l1.19-.72q.51-.36 1-.69l.63-.44q-.36.55-.69 1.11c-.23.37-.48.74-.74 1.1l-.87 1.14-.19.28a.38.38 0 000 .38c.11.34.28.49.48.43a1.08 1.08 0 00.48-.28c.1-.09.17-.17.24-.24a2 2 0 00.18-.23c.14-.17.3-.34.45-.49a5.42 5.42 0 01.43-.41l.42.53a4.94 4.94 0 00.56.56 2.77 2.77 0 001.2.66 3.41 3.41 0 001.23.07 4.58 4.58 0 001.21-.34l1.19-.52.76-.33.75-.38.2-.09a1 1 0 00.22-.12.38.38 0 000-.67M127.73 24.7a2.75 2.75 0 01-.52 1 8.2 8.2 0 01-.88 1 9.68 9.68 0 01-1 .84l-.93.63a19.86 19.86 0 01-3.66 1.83 29.6 29.6 0 01-4 1.18c-.88.21-1.77.38-2.65.5l1.18-1.87c.41-.65.85-1.33 1.3-2 .57-.83 1.16-1.65 1.76-2.45a28 28 0 011.95-2.36l.52-.58c.4-.08.79-.15 1.16-.19l1.2-.11a12.74 12.74 0 011.94.06 4.1 4.1 0 011.76.61 1.89 1.89 0 01.82.89 1.6 1.6 0 010 1m0 2.09a5.08 5.08 0 00.84-1.14 2.69 2.69 0 00.34-1.33 2.6 2.6 0 00-.35-1.34 3.17 3.17 0 00-.92-.94 4.59 4.59 0 00-1.27-.58 6.86 6.86 0 00-1.32-.24 12.46 12.46 0 00-1.73 0c-.46 0-.92.1-1.39.18a10.53 10.53 0 011.35-1 3.16 3.16 0 011.68-.5h.09a.57.57 0 00.55-.33.45.45 0 00-.1-.58.69.69 0 00-.53-.21 2.19 2.19 0 00-.65.1 4.39 4.39 0 00-.63.26l-.47.23a10.67 10.67 0 00-1.16.78 12 12 0 00-1 .9l-.6.63-.75.17-.77.23c-1 .29-2 .61-2.91 1a14.79 14.79 0 00-2.73 1.36.49.49 0 00-.26.54.53.53 0 00.44.44.58.58 0 00.45-.07 3.12 3.12 0 00.43-.27 4.31 4.31 0 00.4-.32 3 3 0 01.31-.23 17.2 17.2 0 013.6-1.51c.18-.07.37-.13.55-.18l.29-.07q-.6.68-1.14 1.38c-.41.54-.82 1.08-1.21 1.61-.62.86-1.21 1.73-1.78 2.59s-1.13 1.73-1.71 2.6l-.57.85c-.42 0-.85.08-1.27.11s-.9 0-1.31 0a.52.52 0 00-.49.23.44.44 0 00-.07.51.53.53 0 00.5.35h.57l.78-.09.6-.07-1 1.39c-.34.5-3.71 6-4.06 6.61a.5.5 0 000 .57.56.56 0 00.48.26h.22a.69.69 0 00.54-.42 3.76 3.76 0 01.28-.51l4.55-7.61.28-.44.44-.09a42 42 0 005.91-1.52 25.82 25.82 0 005.51-2.53c.36-.22.74-.48 1.14-.77a8.57 8.57 0 001.1-1M175.46 30c-.16-.1-.31-.21-.46-.32l-.5-.41c-.16.16-.31.29-.44.41s-.26.23-.38.32h1.78M173 25.64a5.13 5.13 0 01-.58.44c-.23.16-.49.31-.77.48h2.75l-.29-.17-.36-.22-.38-.26-.37-.27m-2.5 6.45a2.29 2.29 0 00-.17-.28l-.24-.26.25-.21a2.11 2.11 0 01.26.25 2.23 2.23 0 01.2.3zm1-5.43c-.28.16-.58.3-.89.44s-.63.28-.95.4a.89.89 0 00-.14-.26.67.67 0 00-.28-.2l.58-.13a4.69 4.69 0 00.6-.2 5 5 0 00.64-.28c.23-.11.46-.24.71-.39a5.18 5.18 0 00.76-.55 3 3 0 00.52-.55l.22.18a1.24 1.24 0 00.2.1c.08 0 .11.06.11.09l-.11.05-.1.05c.29.2.57.38.84.53a8 8 0 00.82.42 7.1 7.1 0 00.85.31c.29.08.61.16 1 .23a.82.82 0 00-.2.23 1.27 1.27 0 00-.11.26l-1-.36c-.31-.12-.59-.25-.85-.37v.25h-1.37v.5h1.29q.54 0 1-.06v.41c-.28 0-.6 0-1-.05h-1.29v.74h.61a1.85 1.85 0 00.25-.32 2.08 2.08 0 00.2-.36l.22.17a1 1 0 00.21.11v.05h-.07c-.1 0-.22.13-.39.31h1l.73-.06v.42h-1.46a1 1 0 00.28.16l.1.09-.09.06-.09.05a6.07 6.07 0 001 .7 5 5 0 001.13.46 1.7 1.7 0 00-.19.2.64.64 0 00-.1.22l-.57-.29c-.17-.09-.32-.17-.46-.26v.26h-.82V31h.82l.61-.05v.39c-.16 0-.36 0-.61-.05h-.82v.91h.19q.18-.2.33-.39c.09-.14.18-.28.26-.42l.18.14a1 1 0 00.21.1v.06l-.08.06a.56.56 0 00-.19.11 3.48 3.48 0 00-.34.34h.69a2.9 2.9 0 00.51-.05v.47h-3.83v-.47a2.37 2.37 0 00.37.05h.48c-.06-.11-.12-.2-.17-.28a2.14 2.14 0 00-.21-.25l.33-.24.27.4c.08.14.15.27.2.38h.31v-1.07h-.75l-.56.05v-.39h1.31v-.5h-.78v-.2c-.2.14-.45.29-.73.46a.66.66 0 00-.16-.17.78.78 0 00-.26-.11 6.6 6.6 0 00.8-.4 6.39 6.39 0 00.58-.4 3.06 3.06 0 00.4-.41 3.3 3.3 0 00.27-.42h-3l.12.11.17.09.1.08-.1.05h-.11l.35.19.3.17.29.17.34.21a.8.8 0 00-.3.33 6.24 6.24 0 00-.64-.48 6.16 6.16 0 00-.63-.37l-.16.16-.19.18-.21.18-.19.16h1.75v.36h-.74v.61a5.66 5.66 0 00.63 0h.48v.38H171.62v1h.21a3.94 3.94 0 00.2-.41c.07-.15.12-.28.16-.39a1.4 1.4 0 00.18.13l.2.1.06.05-.08.06-.15.11a2.27 2.27 0 00-.24.29l.54-.12a.78.78 0 000 .41l-.84.1-.71.09-.65.1-.65.11a1.29 1.29 0 000-.21 1.37 1.37 0 00-.14-.26h.81c.26 0 .52 0 .78-.07v-1h-.7l-.52.05v-.57l.52.05h.7v-.61h-.72V30a3.18 3.18 0 01-.35.26l-.41.28a.64.64 0 00-.13-.22 1.54 1.54 0 00-.26-.16c.26-.12.48-.23.67-.34a3.41 3.41 0 00.53-.33 5.3 5.3 0 00.43-.38 5.05 5.05 0 00.39-.48h-1.17v-.42H171.87l-.12-.18-.22-.24.35-.22c.08.09.15.2.23.31l.18.33h.73v-.74h-1.33c-.38 0-.71 0-1 .05v-.22c.29 0 .62.05 1 .06h1.33v-.5h-1.33zM186.63 27.44h-2.71v1.75h2.71zm-2.14-.57c-.14-.24-.28-.46-.41-.65a6.41 6.41 0 00-.5-.61l.36-.31c.21.25.39.47.53.66s.29.4.42.6zm1 .16c.11-.15.21-.31.31-.47s.19-.33.27-.5a4 4 0 00.23-.47c.07-.15.12-.28.17-.4a1 1 0 00.24.16 1 1 0 00.23.08c.09 0 .14.06.15.1s0 .08-.12.11l-.1.06a1.26 1.26 0 00-.14.18 4.89 4.89 0 00-.27.41c-.12.18-.27.43-.46.74h1.11v2.58h-1.02v2.19a.82.82 0 000 .18l.08.09a.39.39 0 00.18 0h.3a1.06 1.06 0 00.33 0 .42.42 0 00.21-.13.66.66 0 00.11-.28 1.87 1.87 0 00.05-.45.93.93 0 00.54.24 2.67 2.67 0 01-.15.55 1.07 1.07 0 01-.23.34.77.77 0 01-.35.17 2.31 2.31 0 01-.49 0h-.58a.73.73 0 01-.31-.08.32.32 0 01-.14-.2 1.62 1.62 0 010-.35v-2.29h-.83a7.48 7.48 0 01-.11 1.21 2 2 0 01-.89 1.42 7.34 7.34 0 01-.91.57 1.17 1.17 0 00-.15-.27 2.4 2.4 0 00-.22-.24 6.1 6.1 0 00.88-.42 1.81 1.81 0 00.56-.5 1.79 1.79 0 00.29-.72 5.21 5.21 0 00.08-1.05h-.9a1.65 1.65 0 000-.27v-.35V28v-.37-.36a1.87 1.87 0 000-.27h2.06m-2.68 1.58q0-.18-.12-.42c0-.16-.09-.31-.14-.47s-.11-.32-.17-.46a3.89 3.89 0 00-.16-.39l.4-.16c.07.14.13.28.2.43a4.37 4.37 0 01.18.46c.06.15.11.3.16.45s.08.27.12.38zm-.72-3.2a.21.21 0 00-.07.15 1.12 1.12 0 000 .27v6.25c0 .25 0 .49.06.73h-.64c0-.24 0-.49.06-.74s0-.47 0-.66v-5.14-.6c0-.17 0-.34-.06-.5l.31.05h.24c.13 0 .2 0 .22.05s0 .1-.12.16m-1 1.46A10.4 10.4 0 01181 28c0 .38-.12.75-.19 1.13l-.48-.11c.05-.18.1-.36.14-.55s.07-.38.1-.57a5.24 5.24 0 00.06-.54v-.51zM196 31a9.13 9.13 0 00-.58-.77 6.63 6.63 0 00-.65-.65l.34-.36.32.3c.12.12.24.24.35.37s.23.25.34.38l.3.37zm1.54-2.65h.65a3.89 3.89 0 00.51 0v.51H197.54v3.1a1.28 1.28 0 010 .36.42.42 0 01-.19.23 1.24 1.24 0 01-.45.15 7.46 7.46 0 01-.8.1 1.28 1.28 0 00-.07-.34 1 1 0 00-.18-.32l.69.07a1.18 1.18 0 00.37 0 .22.22 0 00.16-.16 1.17 1.17 0 000-.31v-2.95h-2.57v-.51a4.67 4.67 0 00.57 0h1.97v-.48-.6-.32a1.24 1.24 0 00.3 0H197.75v.1l-.13.16v.16zm-3.42 4.4h-.55c0-.24.05-.52.07-.83s0-.61 0-.92v-2.15l-.24.32-.25.29a.81.81 0 00-.44-.32 3.35 3.35 0 00.51-.49 4.92 4.92 0 00.44-.58 4.24 4.24 0 00.36-.61 4.47 4.47 0 00.25-.62.86.86 0 00.25.14l.26.09.11.09s0 .06-.08.09a.55.55 0 00-.2.15 2.27 2.27 0 00-.28.4l-.12.19-.11.18zm1.6-6.55h2a4.86 4.86 0 00.87-.05v.52h-5.84V30a5.38 5.38 0 01-.11.93 6 6 0 01-.22.86 7.45 7.45 0 01-.37.84 1.25 1.25 0 00-.24-.15 1.31 1.31 0 00-.33-.09 4.39 4.39 0 00.44-.78 4.23 4.23 0 00.25-.83 6.51 6.51 0 00.12-.94V28v-.58-.59-.71h2.91c-.08-.13-.16-.26-.25-.39a2.92 2.92 0 00-.32-.38l.52-.27a4.25 4.25 0 01.31.47 5 5 0 01.27.57"
                fill="#cfb585"
              ></path>
            </svg>
          </div>
          <p>
            <span class="whatsapp-name">Normanton Park</span><br /><small
              >Typically replies within a day</small
            >
          </p>
        </div>
        <div class="get-new hide">
          <div id="get-label"></div>
          <div id="get-nama"></div>
        </div>
      </div>
      <div class="home-chat"></div>
      <div class="start-chat">
        <div
          style="
            background-image: url('https://elfsight.com/assets/chats/patterns/whatsapp.png');
          "
          class="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body"
        >
          <div class="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
            <div
              style="opacity: 0"
              class="WhatsappDots__Component-pks5bf-0 eJJEeC"
            >
              <div class="WhatsappDots__ComponentInner-pks5bf-1 hFENyl">
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotOne-pks5bf-3
                    ixsrax
                  "
                ></div>
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotTwo-pks5bf-4
                    dRvxoz
                  "
                ></div>
                <div
                  class="
                    WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotThree-pks5bf-5
                    kXBtNt
                  "
                ></div>
              </div>
            </div>
            <div
              style="opacity: 1"
              class="WhatsappChat__Message-sc-1wqac52-4 kAZgZq"
            >
              <div class="WhatsappChat__Author-sc-1wqac52-3 bMIBDo">
                Normanton Park
              </div>
              <div class="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">
                Thank you for your interest in Normanton Park! 👋<br /><br />What
                question would you have for me?
              </div>
              <div class="WhatsappChat__Time-sc-1wqac52-5 cqCDVm">
                {{ datetime }}
                <!-- <?php $dt=new DateTime("now", new DateTimeZone('Asia/Singapore')); echo $dt->format('H:i');
                ?> -->
              </div>
            </div>
          </div>
        </div>
        <div class="blanter-msg">
          <textarea
            id="chat-input"
            placeholder="Write a response"
            maxlength="120"
            row="1"
          ></textarea>
          <a id="send-it" href="javascript:void;"
            ><svg viewBox="0 0 448 448">
              <path
                d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z"
              /></svg
          ></a>
        </div>
      </div>
      <div id="get-number"></div>
      <a class="close-chat" href="javascript:void">×</a>
    </div>
    <a class="blantershow-chat" href="javascript:void" title="Show Chat"
      ><svg width="20" viewBox="0 0 24 24">
        <defs />
        <path
          fill="#eceff1"
          d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
        />
        <path
          fill="#4caf50"
          d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
        />
        <path
          fill="#fafafa"
          d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
        />
      </svg>
      Chat with Us</a
    >
  </div>
</template>
<script>
/* eslint-disable */
</script>

<script>
export default {
  data() {
    return {
      datetime: '',
    }
  },
  mounted() {
    $(document).on('click', '#send-it', function () {
      var a = document.getElementById('chat-input')
      if ('' != a.value) {
        var b = $('#get-number').text(),
          c = document.getElementById('chat-input').value,
          d = 'https://web.whatsapp.com/send',
          e = b,
          f = '&text=' + c
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        )
          var d = 'whatsapp://send'
        var g = d + '?phone=+6561003337' + e + f
        window.open(g, '_blank')
      }
    }),
      $(document).on('click', '.informasi', function () {
        ;(document.getElementById('get-number').innerHTML = $(this)
          .children('.my-number')
          .text()),
          $('.start-chat,.get-new').addClass('show').removeClass('hide'),
          $('.home-chat,.head-home').addClass('hide').removeClass('show'),
          (document.getElementById('get-nama').innerHTML = $(this)
            .children('.info-chat')
            .children('.chat-nama')
            .text()),
          (document.getElementById('get-label').innerHTML = $(this)
            .children('.info-chat')
            .children('.chat-label')
            .text())
      }),
      $(document).on('click', '.close-chat', function () {
        $('#whatsapp-chat').addClass('hide').removeClass('show')
      }),
      $(document).on('click', '.blantershow-chat', function () {
        $('#whatsapp-chat').addClass('show').removeClass('hide')
      })
    $(document).ready(function () {
      if (window.matchMedia('(max-width: 767px)').matches) {
      } else {
        var timer = setInterval(function () {
          $('.blantershow-chat').click()
          clearInterval(timer)
        }, 3000)
      }
    })
  },

  created() {
    let d = new Date()
    this.datetime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  },
}
</script>

<style scoped>
.start-chat .blanter-msg {
  display: flex;
}
.whatsapp-name {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;
  line-height: 0.5;
}
#whatsapp-chat {
  box-sizing: border-box !important;
  outline: 0 !important;
  position: fixed;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
  bottom: 90px;
  right: 30px;
  overflow: hidden;
  z-index: 99;
  animation-name: showchat;
  animation-duration: 1s;
  transform: scale(1);
}
a.blantershow-chat {
  background: #fff;
  color: #404040;
  position: fixed;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  z-index: 98;
  bottom: 25px;
  right: 30px;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
}
a.blantershow-chat svg {
  transform: scale(1.2);
  margin: 0 10px 0 0;
}
.header-chat {
  background: #009688;
  background: #095e54;
  color: #fff;
  padding: 20px;
}
.header-chat h3 {
  margin: 0 0 10px;
}
.header-chat p {
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}
.info-avatar {
  position: relative;
  width: 80%;
  margin-bottom: 1rem;
}
.info-avatar img {
  border-radius: 100%;
  width: 50px;
  float: left;
  margin: 0 10px 0 0;
}
a.informasi {
  padding: 20px;
  display: block;
  overflow: hidden;
  animation-name: showhide;
  animation-duration: 0.5s;
}
a.informasi:hover {
  background: #f1f1f1;
}
.info-chat span {
  display: block;
}
#get-label,
span.chat-label {
  font-size: 12px;
  color: #888;
}
#get-nama,
span.chat-nama {
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: #222;
}
#get-label,
#get-nama {
  color: #fff;
}
span.my-number {
  display: none;
}
textarea#chat-input {
  border: none;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 2.5rem;
  outline: 0;
  resize: none;
  padding: 10px;
  font-size: 14px;
  overflow-y: hidden;
}
a#send-it {
  width: 40px;
  font-weight: 700;
  padding: 3px 10px;
  background: #eee;
}
a#send-it svg {
  fill: #a6a6a6;
  height: 100%;
  width: 100%;
}
.first-msg {
  background: 0 0;
  padding: 30px;
  text-align: center;
  color: #333;
  font-size: 14.2px;
  line-height: 1.7;
  border-radius: 10px;
  padding: 15px 20px;
  display: inline-block;
}
#get-number {
  display: none;
}
a.close-chat {
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
  font-size: 30px;
}
@keyframes ZpjSY {
  0% {
    background-color: #b6b5ba;
  }
  15% {
    background-color: #111;
  }
  25% {
    background-color: #b6b5ba;
  }
}
@keyframes hPhMsj {
  15% {
    background-color: #b6b5ba;
  }
  25% {
    background-color: #111;
  }
  35% {
    background-color: #b6b5ba;
  }
}
@keyframes iUMejp {
  25% {
    background-color: #b6b5ba;
  }
  35% {
    background-color: #111;
  }
  45% {
    background-color: #b6b5ba;
  }
}
@keyframes showhide {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
}
@keyframes showchat {
  from {
    transform: scale(0);
    opacity: 0;
  }
}
@media screen and (max-width: 480px) {
  #whatsapp-chat {
    width: auto;
    left: 5%;
    right: 5%;
    font-size: 80%;
  }
}
.hide {
  display: none;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.show {
  display: block;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.whatsapp-message-container {
  display: flex;
  z-index: 1;
}
.whatsapp-message {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.whatsapp-chat-body {
  padding: 20px 20px 20px 10px;
  background-color: #e6ddd4;
  position: relative;
}
.dAbFpq {
  display: flex;
  z-index: 1;
}
.eJJEeC {
  background-color: #fff;
  width: 52.5px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  margin-left: 10px;
  opacity: 0;
  transition: all 0.1s ease 0s;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
}
.hFENyl {
  position: relative;
  display: flex;
}
.ixsrax {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  background-color: #9e9da2;
  animation-name: ZpjSY;
}
.dRvxoz {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  background-color: #b6b5ba;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  animation-name: hPhMsj;
}
.kAZgZq {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.bMIBDo {
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.cqCDVm {
  text-align: right;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.5);
  margin-right: -8px;
  margin-bottom: -4px;
}
#chat-input:focus {
  background: #fff !important;
}
#chat-input {
  margin-bottom: 0 !important;
}
</style>
