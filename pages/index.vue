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
          <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
            The Gazania
          </h3>
          <p>
            Latest Unit Sold: #04-36 | 20th October 2021
            <NuxtLink
              to="/gazania/balance-units-chart"
              class="font-medium hover:underline text-theme-600"
              >See the Balance Units Chart</NuxtLink
            >
          </p>
        </div>
        <div class="py-6 bg-theme-50">
          <div class="text-center">
            <h4 class="text-xl font-medium">Latest Updates</h4>
            <p class="text-gray-600">Last updated: 9th November 2021</p>
          </div>
          <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
            <div class="max-w-2xl px-4 mx-auto">
              <ul>
                <li>
                  <strong>03-11-2021:</strong>
                  <NuxtLink to="/book-an-appointment" class="!text-theme-600"
                    >Book an Appointment</NuxtLink
                  >
                  to view The Lilium &amp; The Gazania Show Flat and get Direct Developer
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
                  <NuxtLink to="/gazania/pricing" class="!text-theme-600">
                    The Gazania Pricing
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
                  <strong>20-10-2021:</strong> Check our latest
                  <NuxtLink to="/gazania/balance-units-chart" class="!text-theme-600">
                    The Gazania Balance Unit
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>20-10-2021:</strong>The latest  
                  <NuxtLink to="/floor-plan" class="!text-theme-600"
                    >The Lilium Floor Plan</NuxtLink
                  > is now available.
                </li>
                <li>
                  <strong>20-10-2021:</strong>The latest  
                  <NuxtLink to="/gazania/floor-plan" class="!text-theme-600"
                    >The Gazania Floor Plan</NuxtLink
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
                alt="The Lilium &amp; The Gazania Developer"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium &amp; The Gazania</p>
              <div class="space-y-4">
                <p>
                  <NuxtLink
                    to="/developer"
                    class="transition text-theme-600 hover:text-theme-700"
                    >SingHaiYi Group Pte. Ltd.</NuxtLink> is a Singapore public listed business that specialises in property development, investment, 
                  and management services, is developing <br> <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink> &amp; <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Gazania</NuxtLink>
                </p>
                <p>
                  Future owners of The Lilium and The Gazania will benefit from both developments’ benefits thanks to the developers' trust in a robust demand for such 
                  locations and economies of scale. 
                  <NuxtLink
                    to="/developer"
                    class="transition text-theme-600 hover:text-theme-700"
                    >SingHaiYi Group Pte. Ltd.</NuxtLink> is well-established in Singapore, but it has also expanded its portfolio to include 
                  the United States, Australia, and Malaysia.
                </p>
                <p>
                  Our current project at 9 Penang Road, formerly Park Mall, is a new Grade A commercial structure with 10 floors and two wings. 
                  Future residents of <br> 
                  <NuxtLink
                  to="/"
                  aria-current="page"
                  class="nuxt-link-exact-active nuxt-link-active transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink
                > &amp; 
                <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Gazania</NuxtLink>
                will not be disappointed, we are convinced.
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
                alt="The Lilium &amp; Gazania Location Map"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium &amp; Gazania Location Map</p>
              <div class="space-y-4">
                <p>
                  Along the Upper Paya Lebar Road, the Lilium is located on How Sun Road. The Bartley MRT Station is only a 5-minute walk away, 
                  and the Serangoon MRT Interchange station is only one station away. Major expressways like the Central Expressway (CTE), 
                  Pan-Island Expressway (PIE), and Kallang-Paya Lebar Expressway connect to the Lilium (KPE).
                  The list of nearby amenities can be found 
                  here at <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Lilium Location Map</NuxtLink>.
                </p>
                <p>
                  The Gazania condominium is located on <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >How Sun Drive</NuxtLink> in 
                    <NuxtLink
                    to="/gazania/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >District 19</NuxtLink> in the Bartley neighbourhood. 
                  The Upper Paya Lebar Road stretch of several eateries is only a 5-minute walk away.
                </p>
                <p>
                  In addition, famous institutions such as Maris Stella, Paya Lebar Methodist, and St Gabriel's Secondary School 
                  are all within 1km of the private and freehold condominium. The nearest MRT station, Bartley MRT, is only a 3-minute walk 
                  from the future Condominium's Main Gate.
                </p>
                <p>
                  The list of nearby amenities can be found 
                  here at <NuxtLink
                    to="/gazania/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Gazania Location Map</NuxtLink>.
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
                alt="The LiLium &amp; The Gazania Showflat"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Lilium &amp; The Gazania Showflat</p>
              <div class="space-y-4">
                <p>
                  Secure your
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Lilium &amp; The Gazania Showflat appointment here</NuxtLink
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
                  down to The Lilium &amp; The Gazania ShowFlat.
                </p>
                <p>
                  All registrants who have
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >registered an appointment here</NuxtLink
                  >
                  will receive Best Developer Pricing and COMMISION are
                  NON-payable. Please be advise that units for sale at The Lilium &amp; The Gazania
                  are on first come first serve basis. Reservations of unit
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
              The Beauty of The Gazania
            </h3>
           <p>
             The Gazania is an anticipated FREEHOLD upcoming launch condominium located at <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >How Sun Drive</NuxtLink>, just a 3-minute walk to Bartley MRT. 
             It consists of 250 units in total, with a mix of 1 Bedroom Types to 4 Bedroom Types, Mezzanine &amp; Penthouses (Can refer to our 
                    <NuxtLink
                    to="/floor-plan"
                    class="transition text-theme-600 hover:text-theme-700"
                    >Floor Plans</NuxtLink>).  
           </p>
           <p>
              The Gazania Floor Plans can be view <NuxtLink
                        to="/floor-plan"
                        class="transition text-theme-600 hover:text-theme-700"
                        >here</NuxtLink>. 
                Future Residents or Investors of The Gazania can look into famous education institutions 
                like Maris Stella High School, Paya Lebar Methodist Girls' School (Primary &amp; Secondary) Plenty of facilities and amenities nearby 
                such as eateries at Upper Serangoon Road, NEX Shopping Center, Poiz Shopping Center, upcoming Woodleigh Shopping Mall &amp; the 
                mega Paya Lebar Commercial Hub.
           </p>
           <p>
             Interested parties may check out and download 
             <NuxtLink
                        to="/e-brochure"
                        class="transition text-theme-600 hover:text-theme-700"
                        >The Gazania E-Brochure</NuxtLink>.
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
           </p><br>
           <h3 class="text-xl font-semibold sm:text-2xl text-center">
                   The Strategic Location of Gazania
                      </h3>
                  <p>
                    The Gazania is located just 3 minutes away from the Bartley MRT Station, which is part of the circle line. Therefore, the Gazania is 
                    well-positioned to reach all parts of Singapore.
                  </p>
                  <p>
                    Bartley MRT station is just one stop away from Serangoon Interchange, connected to the Northeast line. Another 2 stops away from 
                    Macpherson MRT, which is connected to the Downtown Line. Then, 4 blocks away from Paya Laber Interchange, which is connected to the 
                    East-West Line. Lastly, 2 stops away from Bishan Interchange, which is connected to the North-South line.
                  </p>
            <br>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              Gazania offers Exclusive Private Living with an Array of Conveniences at Fingertips.
            </h3>
           <p>
             Located within the landed estate, Gazania offers a quiet and exclusive private living. Take an 8 minute stroll to NEX Shopping Mall via 
             the pedestrian-only path through the landed houses. Or a 5 minutes’ walk to the many beautiful eateries along Upper Paya Lebar Road where 
             you can enjoy the famous Prawn noodle, Katong Laksa or chill at the cafes located in Kensington Square.
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


