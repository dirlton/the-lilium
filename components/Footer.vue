<template>
  <div>
    <div class="bg-theme-50">
      <div class="max-w-8xl px-4 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="space-y-2">
            <h4 class="text-xl font-medium">Proudly Developed By</h4>
            <img
              src="~assets/img/MCC-Haoyuan-logo.png"
              alt="MCC &amp; HY Reality PTE. LTD."
              class="object-contain h-40"
            />
          </div>
          <div class="space-y-2">
            <h4 class="text-xl font-medium">One Bernam</h4>
            <ul class="space-y-3 text-gray-600">
              <li>Developer: MCC &amp; HY Realty Pte. Ltd.</li>
              <li>Tenure of Land: 99 Years Leasehold</li>
              <li>Site Area: Approx. 3,846 sqm / 41,400 sqft</li>
              <li>Expected TOP: 30 June 2025</li>
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
                  >One Bernam</NuxtLink
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
                <p>One Bernam</p>
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
                  >sales@onebernam.com.sg</a
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
              <p class="px-1">One Bernam</p>
              <p class="px-1">MCC &amp; HY Realty Pte. Ltd.</p>
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
            <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 288 100" enable-background="new 0 0 288 100" xml:space="preserve">
          <g>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M8.4,42.2c0-4.3,1.4-7.9,4.2-10.9s6.5-4.4,11-4.4
              c4.6,0,8.3,1.5,11.2,4.4c2.9,2.9,4.3,6.6,4.3,10.9c0,4.5-1.5,8.2-4.4,11.1c-2.9,2.9-6.7,4.4-11.2,4.4c-2.9,0-5.5-0.7-8-2.1
              c-2.4-1.4-4.2-3.3-5.4-5.8C9,47.4,8.4,44.8,8.4,42.2z M13.3,42.2c0,3.3,1,6,2.9,8.2c1.9,2.2,4.4,3.3,7.5,3.3c3.1,0,5.6-1.1,7.6-3.4
              c2-2.3,3-5,3-8.1c0-3.2-1-5.8-3-8c-2-2.2-4.6-3.3-7.6-3.3c-3,0-5.5,1.1-7.5,3.2C14.3,36.3,13.3,39,13.3,42.2z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M50.3,36.5V39c2.6-1.9,5-2.8,7.2-2.8c1.3,0,2.5,0.3,3.3,1
              c0.9,0.6,1.5,1.4,1.7,2.3c0.3,0.9,0.4,2.3,0.4,4v10.1h3.5v3.6h-7.6V43.7c0-1.6-0.2-2.6-0.7-3.1c-0.5-0.5-1-0.7-1.7-0.7
              c-1.8,0-3.8,0.9-6.1,2.6v11.1h3.6v3.6H42.6v-3.6h3.6V40.1h-3.6v-3.6H50.3z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M90,47.9H72.6c0.3,1.9,1,3.5,2.3,4.6c1.3,1.2,2.9,1.8,4.8,1.8
              c2.8,0,5.1-1.1,6.7-3.4l3.6,1.6c-1.2,1.8-2.7,3.2-4.6,4c-1.9,0.9-3.8,1.3-5.9,1.3c-3.2,0-5.9-1-8.1-3c-2.2-2-3.4-4.6-3.4-8
              c0-3.2,1.1-5.8,3.3-7.9c2.2-2.1,4.7-3.1,7.5-3.1c2.8,0,5.3,1,7.6,3C88.8,40.9,90,43.9,90,47.9z M85.8,44.9c-0.3-1.5-1-2.8-2.3-3.9
              c-1.2-1.2-2.7-1.8-4.5-1.8c-1.6,0-3,0.5-4.2,1.6c-1.2,1.1-1.9,2.4-2.1,4.1H85.8z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M107.3,53.5V31.2h-3.7v-3.7h9.9c2.7,0,4.8,0.2,6.1,0.5
              c1.4,0.3,2.6,1.2,3.6,2.5c1,1.3,1.6,2.9,1.6,4.7c0,1.4-0.3,2.6-0.9,3.7c-0.6,1.1-1.5,2-2.7,2.5c1.7,0.6,2.9,1.5,3.8,2.8
              c0.9,1.3,1.3,2.8,1.3,4.5c0,1.5-0.3,2.8-1,4c-0.7,1.2-1.5,2.1-2.6,2.8c-1.1,0.7-2.3,1.1-3.6,1.3c-1.3,0.2-3.1,0.3-5.3,0.3h-10.1
              v-3.7H107.3z M111.8,39.8h2.8c2.1,0,3.6-0.4,4.5-1.1c0.8-0.7,1.3-1.9,1.3-3.3c0-2.8-1.9-4.2-5.8-4.2h-2.8V39.8z M111.8,53.5h1.7
              c2.2,0,3.8-0.1,4.9-0.3c1-0.2,1.9-0.7,2.5-1.6c0.6-0.8,1-1.9,1-3.2c0-1.2-0.3-2.2-0.9-2.9c-0.6-0.8-1.4-1.3-2.4-1.6
              c-1-0.3-2.4-0.4-4.1-0.4h-2.6V53.5z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M151.7,47.9h-17.4c0.3,1.9,1,3.5,2.3,4.6c1.3,1.2,2.9,1.8,4.8,1.8
              c2.8,0,5.1-1.1,6.7-3.4l3.6,1.6c-1.2,1.8-2.7,3.2-4.6,4c-1.9,0.9-3.8,1.3-5.9,1.3c-3.2,0-5.9-1-8.1-3c-2.2-2-3.4-4.6-3.4-8
              c0-3.2,1.1-5.8,3.3-7.9c2.2-2.1,4.7-3.1,7.5-3.1c2.8,0,5.3,1,7.6,3C150.4,40.9,151.6,43.9,151.7,47.9z M147.5,44.9
              c-0.3-1.5-1-2.8-2.3-3.9c-1.2-1.2-2.7-1.8-4.5-1.8c-1.6,0-3,0.5-4.2,1.6c-1.2,1.1-1.9,2.4-2.1,4.1H147.5z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M158.5,53.6V40.1h-4.2v-3.6h7.4v4.7c0.5-1.2,1.1-2.2,1.9-3
              c0.8-0.8,1.7-1.3,2.6-1.6c0.9-0.3,2.1-0.4,3.7-0.4h1.1v4.1h-0.8c-2.1,0-3.6,0.2-4.6,0.6c-1,0.4-1.8,1.2-2.3,2.3
              c-0.5,1.1-0.7,3.1-0.7,5.9v4.6h4.5v3.6h-12.8v-3.6H158.5z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M181.8,36.5V39c2.6-1.9,5-2.8,7.2-2.8c1.3,0,2.5,0.3,3.3,1
              c0.9,0.6,1.5,1.4,1.7,2.3c0.3,0.9,0.4,2.3,0.4,4v10.1h3.5v3.6h-7.6V43.7c0-1.6-0.2-2.6-0.7-3.1c-0.5-0.5-1-0.7-1.7-0.7
              c-1.8,0-3.8,0.9-6.1,2.6v11.1h3.6v3.6h-11.3v-3.6h3.6V40.1h-3.6v-3.6H181.8z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M220.8,53.6v3.6h-7.1v-2.5c-2,1.9-4.2,2.9-6.6,2.9
              c-1.9,0-3.5-0.6-4.9-1.8c-1.4-1.2-2.1-2.8-2.1-4.7c0-1.9,0.7-3.5,2.2-4.8c1.5-1.3,3.3-1.9,5.3-1.9c1.9,0,3.8,0.6,5.6,1.8V44
              c0-1.1-0.1-1.9-0.3-2.4c-0.2-0.6-0.7-1.1-1.4-1.5c-0.7-0.5-1.7-0.7-2.9-0.7c-2,0-3.5,0.8-4.4,2.4l-3.9-1c1.7-3.2,4.7-4.8,8.9-4.8
              c1.6,0,2.9,0.2,4,0.6c1.1,0.4,2,1,2.5,1.6c0.6,0.7,0.9,1.4,1.1,2.2s0.3,2,0.3,3.7v9.6H220.8z M213.2,49.5c-1.8-1.4-3.5-2.1-5.3-2.1
              c-1.1,0-2.1,0.3-2.8,1c-0.8,0.7-1.1,1.5-1.1,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.6,1,2.7,1c2,0,3.8-0.8,5.6-2.5V49.5z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M226.2,53.6V40.1h-3.4v-3.6h7.5v2.6c2.5-2,4.9-2.9,7.2-2.9
              c2.4,0,4,1.1,4.9,3.2c2.7-2.2,5.2-3.2,7.5-3.2c1.3,0,2.4,0.3,3.3,0.9c0.9,0.6,1.4,1.3,1.7,2.2c0.3,0.9,0.4,2.2,0.4,4v10.3h3.6v3.6
              h-7.7V44.1c0-1.2-0.1-2-0.2-2.5s-0.4-0.9-0.8-1.2c-0.4-0.3-1-0.5-1.6-0.5c-1.7,0-3.7,0.9-5.9,2.7v11.1h3.6v3.6h-7.6V43.7
              c0-1.4-0.2-2.3-0.6-2.9c-0.4-0.6-1.1-0.9-2-0.9c-1.5,0-3.5,0.9-5.9,2.7v11.1h3.6v3.6h-11.4v-3.6H226.2z"/>
          </g>
          <g>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M157.7,76.5v3.2c1.1,1.2,4.2,4.7,4.9,5.6l-1.4,1.8
              c-0.7-1.1-2.3-3.2-3.5-4.8v15.6h-2.2V81.2c-1.4,4-3.2,8-5.1,10.4c-0.3-0.6-0.8-1.5-1.2-2c2.4-2.9,4.8-8.3,6.1-13H150v-2.1h5.6v-7.3
              l2.8,0.2c0,0.2-0.2,0.4-0.6,0.4v6.7h4.7v2.1H157.7z M173.6,67.7c-0.1,0.2-0.3,0.4-0.8,0.4c-0.3,1.6-0.9,3.8-1.4,5.5h7.9v24h-2.2
              v-1.7h-11.1V98H164V73.6h5.3c0.5-2,1-4.6,1.2-6.5L173.6,67.7z M177.2,75.7h-11.1v7.8h11.1V75.7z M166.1,93.8h11.1v-8.1h-11.1V93.8z
              "/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M213.1,72.9h-13.9v3.7h12.1v18.7c0,1.4-0.4,2.1-1.4,2.4
              c-1.1,0.3-3,0.4-5.7,0.3c-0.2-0.6-0.5-1.4-0.8-2c1.1,0,2.2,0.1,3.1,0.1c2.5,0,2.6,0,2.6-0.8V78.7h-21.5v19.2h-2.2V76.6H197v-3.7
              h-13.6v-2.1H197v-3.7l3,0.2c0,0.2-0.2,0.4-0.7,0.5v3.1h13.9V72.9z M206.9,91.4h-7.7v6.3H197v-6.3h-7.4v-1.9h7.4v-3.7h-6.8v-1.9h3.7
              c-0.3-1.1-1.1-2.8-1.9-3.9l1.8-0.5c0.9,1.2,1.7,2.8,2,3.9l-1.7,0.5h7.5c-0.4-0.2-1-0.4-1.3-0.5c0.7-1.1,1.6-2.9,2-4.1l2.4,0.7
              c-0.1,0.2-0.3,0.3-0.7,0.3c-0.5,1-1.4,2.5-2.1,3.6h4.5v1.9h-7.3v3.7h7.7V91.4z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M246.5,82.7h-6.2v3.6h4.6v1.9h-12.5v3.1h13.7v2h-13.7V98h-2.2
              v-4.7h-13.4v-2h13.4v-3.1h-12v-1.9h4.3v-3.6h-6.1v-2h6.1v-3.6h-3.8v-1.9h25.6v1.9h-4v3.6h6.2V82.7z M224.4,74.3v-2.1h-7.7v-2.1h7.7
              v-3l2.9,0.2c0,0.2-0.2,0.4-0.7,0.5v2.4h9.4v-3l2.9,0.2c0,0.2-0.2,0.4-0.7,0.5v2.4h8v2.1h-8v2.1H236v-2.1h-9.4v2.1H224.4z
              M224.6,77.2v3.6h5.5v-3.6H224.6z M224.6,86.3h5.5v-3.6h-5.5V86.3z M238.2,80.8v-3.6h-5.8v3.6H238.2z M238.2,86.3v-3.6h-5.8v3.6
              H238.2z"/>
            <path fill="#C2B59B" stroke="#8B5E3C" stroke-miterlimit="10" d="M253.8,72.3v8c0,5.2-0.4,12.7-3,17.8c-0.4-0.4-1.3-1.1-1.9-1.3
              c2.5-4.9,2.7-11.6,2.7-16.6v-10h12.8v-3.1l3,0.2c0,0.2-0.2,0.4-0.7,0.5v2.5h13v2.1H253.8z M263.1,82.3l1.2,0.5
              c0,0.2-0.1,0.3-0.2,0.4c-0.7,4-1.8,7.1-3.4,9.6c2.5,2.2,6,2.7,10.3,2.7c1.1,0,7.8,0,9.2,0c-0.3,0.5-0.7,1.4-0.8,2H271
              c-4.9,0-8.7-0.7-11.4-3.1c-1.3,1.6-2.9,2.8-4.6,3.7c-0.3-0.5-1-1.2-1.5-1.6c1.8-0.9,3.4-2.1,4.6-3.6c-1.2-1.5-2.1-3.4-2.8-5.9
              l1.7-0.6c0.6,2.1,1.4,3.7,2.3,4.9c1.2-1.9,2.1-4.2,2.6-7.1h-4.2l-0.7,1l-1.8-0.6c1.6-2.4,3.4-5.5,4.7-7.8h-4.9V75h6.3l0.4-0.1
              l1.4,0.7c-0.1,0.1-0.2,0.3-0.3,0.4c-0.9,1.6-2.4,4-3.9,6.4h3.8L263.1,82.3z M279.7,84h-6.4v5.9h5.7v2h-13.2v-2h5.4V84h-6v-2h6v-4.5
              c-1.7,0.3-3.4,0.5-5,0.7c-0.1-0.5-0.4-1.2-0.6-1.6c4-0.5,8.9-1.4,11.4-2.4l1.8,1.7c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3,0
              c-1.1,0.4-2.6,0.8-4.2,1.1c-0.1,0.1-0.3,0.2-0.6,0.2V82h6.4V84z"/>
          </g>
          </svg>
          </div>
          <p>
            <span class="whatsapp-name">One Bernam 柏南華庭 </span><br /><small
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
                One Bernam
              </div>
              <div class="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">
                Thank you for your interest in One Bernam! 👋<br /><br />What
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
