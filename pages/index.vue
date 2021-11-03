<template>
  <div>
    <div class="space-y-12">
      <HomeMainBanner />
      <section>
        <div class="px-4 mb-6 text-center">
          <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
            The Lilium
          </h3>
          <p>
            Latest Unit Sold: #01-12 | 26 October 2021
            <NuxtLink
              to="/balance-units-chart"
              class="font-medium hover:underline text-theme-600"
              >See the Balance Units Chart</NuxtLink
            >
          </p>
        </div>
        <div class="py-6 bg-theme-50">
          <div class="text-center">
            <h4 class="text-xl font-medium">Latest Updates</h4>
            <p class="text-gray-600">Last updated: 3rd November 2021</p>
          </div>
          <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
            <div class="max-w-2xl px-4 mx-auto">
              <ul>
                <li>
                  <strong>03-11-2021:</strong>
                  <NuxtLink to="/book-an-appointment" class="!text-theme-600"
                    >Book an Appointment</NuxtLink
                  >
                  to view The Lilium Show Flat and get Direct Developer
                  Price + Discounts.
                </li>
                <li>
                  <strong>20-10-2021:</strong> Check our latest
                  <NuxtLink to="/pricing" class="!text-theme-600">
                    The Lilium Pricing
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>20-10-2021:</strong> Check our latest
                  <NuxtLink to="/balance-units-chart" class="!text-theme-600">
                    The Lilium Balance Unit
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>20-10-2021:</strong>The latest The Lilium 
                  <NuxtLink to="/floor-plan" class="!text-theme-600"
                    >Floor Plan</NuxtLink
                  > is now available.
                </li>
                <li>
                  <strong>20-10-2021:</strong> Check your loan eligibility by
                  calculating at
                  <NuxtLink
                    to="/financing/maximum-loan-eligibility-calculator-tdsr"
                    class="!text-theme-600"
                    >Max Loan Eligibility Calculator (TDSR)</NuxtLink
                  >
                  on this website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/singhaiyi-logo.jpg"
                alt="The Lilium Developer"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium</p>
              <div class="space-y-4">
                <p>
                  <NuxtLink
                    to="/developer"
                    class="transition text-theme-600 hover:text-theme-700"
                    >SingHaiYi Group Ltd</NuxtLink>
                  , a Singapore public listed business that specialises in property development, investment, 
                  and management services, is developing <br> <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink>.
                </p>
                <p>
                  The company operates in the real estate sector in several countries, 
                  including the United States, Malaysia, and Australia. SingHaiYi Group is also active in various income-generating assets in 
                  the commercial and retail industries and real estate development.
                </p>
              </div>
            </div>
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/map-location-thelilium.png"
                alt="The Lilium Location Map"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium Location Map</p>
              <div class="space-y-4">
                <p>
                  Along the Upper Paya Lebar Road, the Lilium is located on <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >How Sun Road</NuxtLink>. The Bartley MRT Station is only a 5-minute walk away, 
                  and the Serangoon MRT Interchange station is only one station away. Major expressways like the Central Expressway (CTE), 
                  Pan-Island Expressway (PIE), and Kallang-Paya Lebar Expressway connect to the Lilium (KPE).
                </p>
              </div>
            </div>
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/showflat-thelilium.png"
                alt="The LiLium Showflat"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium Showflat</p>
              <div class="space-y-4">
                <p>
                  Secure your
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Lilium Showflat appointment here</NuxtLink
                  >, register via our official site. Or contact us at +65 6100
                  3337 before making your way down the showflat. Showflat will
                  be closed on certain days due to routine maintenance work or
                  developer hosting own private events which is close to public.
                  Therefore, interested buyers are advice to obtain
                  anappointment online before proceeding.
                </p>
                <p>
                  Due to COVID19, there will be LIMITED time slot per day,
                  please reserve an appointment online before making your way
                  down to The Lilium ShowFlat.
                </p>
                <p>
                  All registrants who have
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >registered an appointment here</NuxtLink
                  >
                  will receive Best Developer Pricing and COMMISION are
                  NON-payable. Please be advise that units for sale at The Lilium
                  Park are on first come first serve basis. Reservations of unit
                  is only up to 2 hours and subjected to management’s
                  authorization.
                </p>
                <p>
                  Any price changes will be subjected to changes without any
                  prior notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="py-12 bg-brown-700">
          <div class="max-w-6xl px-4 mx-auto">
            <div
              class="
                flex flex-wrap
                items-center
                justify-between
                p-6
                border
                rounded-md
                sm:col-span-2
                border-brown-400
              "
            >
              <h1 class="text-3xl font-bold text-white">
                Book An Appointment To Get Direct Developer Price
              </h1>
              <NuxtLink
                to="/book-an-appointment"
                class="
                  inline-block
                  font-medium
                  text-white
                  transition
                  rounded
                  bg-brown-900
                  hover:bg-yellow-900
                  px-6
                  py-3
                "
                >Book an Appointment</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto prose text-justify">
          <div>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              The Lilium
            </h3>
            <p>
              <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink> is a new freehold condominium complex located at <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >How Sun Road</NuxtLink> 
              along Upper Paya Lebar Road, 
              within the premium Bartley residential enclave. The Lilium is a residential development with 2 to 4 
              bedroom units on a 54,942 sq ft plot of land. The growth consists of two 5-story blocks and is projected 
              to receive TOP by December 31, 2021.
            </p>
            <p>
              <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink> is connected to the rest of the world by a well-developed public transportation system and 
              roadway networks. With Bartley MRT Station only a 5-minute walk, Serangoon MRT interchange one stop away, 
              MacPherson MRT interchange two stops away, and Paya Lebar MRT interchange three stops away, this is an ideal 
              location. In addition, the Lilium is conveniently located near major expressways such as the Central 
              Expressway (CTE), Pan-Island Expressway (PIE), and Kallang-Paya Lebar Expressway (KPE).
            </p>
            <p>
              <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink> is minutes away from NEX Shopping Mall, Kovan Heartland Mall, Paya Lebar Square, SingPost Centre, 
              and Paya Lebar Quarter, which offer a holistic potpourri of shopping and entertainment and gastronomic delights. 
              In addition, Serangoon Stadium, Kovan Sports Centre, and Singapore Sports Hub are all located within a few 
              minutes drive of The Lilium. St. Gabriel's Primary and Secondary School, Paya Lebar Methodist Girls' Secondary, 
              Maris Stella High School, Stamford American International School, Cedar Girls' Primary and Secondary School, 
              St. Andrew's Junior School, St. Andrew's Secondary School, and St. Andrew's Junior College are among the 
              reputable schools and institutions in the area.
            </p>
            <p>
              Aspiring homeowners may now view and download <NuxtLink
                    to="/floor-plan"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Lilium Floor Plan</NuxtLink> &amp; 
                    <NuxtLink
                    to="/e-brochure"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Lilium E-Brochure</NuxtLink>.
            </p>
                 <br>
                 <h3 class="text-xl font-semibold sm:text-2xl text-center">
                   Between The World And Me, Moonlight Dwells
                      </h3>
                  <p>
                    Lilies are prized for their diversity, with white tones of their solid and sturdy petals symbolising peace and purity and pink, 
                    light-coloured hues symbolising richness and prosperity. Moreover, the relaxing features of the lilies, hailed as the ten most 
                    beautiful night-blooming flowers in the world, create an aura of serenity and elegance, a perfect partner to the night tranquilly. 
                    
                  </p>
                  <p>
                    The Lilium epitomises this delicate combination of tranquillity and composure in a calming and relaxing hideaway to call home, 
                    inspired by the enduring attributes of lilies.
                  </p>
            <br>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              Magic Is The Moonlight
            </h3>
           <p>
             When peace and tranquillity reign over earth and sky, the moonlight has such power. The Lilium is an intimate 80-unit freehold condominium 
             that is meticulously created to expound on the gentler side of life. It is located in the upmarket Bartley residential enclave in a prime 
             quiet location. The creation is inspired by night-blooming flowers that thrive in the moonlight to create a welcoming atmosphere of calm 
             and peace for each evening. Residents can quickly get away from the city's hustle and bustle and into a peaceful haven to unwind, 
             refresh, and recharge.
           </p>
          </div>
          <div class="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4">
            <img
              src="~assets/img/home/home-artist-impression-thumb-1.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-2.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-3.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-4.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
          </div>
        </div>
      </section>
      <BookAppointment />
    </div>
  </div>
</template>

<script>
export default {}
</script>
