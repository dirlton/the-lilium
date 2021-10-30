<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Bidadari Park
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/ura/bidadari-estate-plan-1024x537.jpg"
          alt="Bidadari Park"
          class="mx-auto"
        />
        <img
          src="~assets/img/ura/bidadari-heritage-walk-1024x457.jpg"
          alt="Bidadari Park"
          class="mx-auto"
        />
        <br>
        <h1 class="max-w-5xl mx-auto text-justify">
                  Under the new Bidadari Estate Master Plan, a new 10 hectare Bidadari Park will be built that aims to form a green lung for 
                  the Bidadari Estate. The new park is targeted to be completed progressively by 2022 and will feature a lake, a 700m heritage 
                  walk, open lawns, play area for children, and experiential trails. A 13m-wide eco-link will be built between Bidadari Park and 
                  Hillock Park, to form a safe passage for visitors and wildlife across Bidadari Park Drive. The new Alkaff Lake is inspired by the 
                  former Alkaff Lake Gardens. and rain tree on a little island will be the focal point of the new Alkaff Lake.
                  </h1><br>
        <img
          src="~assets/img/ura/Bidadari-bus-interchange.jpg"
          alt="Bidadari Park"
          class="mx-auto"
        /> <br>
        <h1 class="max-w-5xl mx-auto text-justify">
                  Bidadari Park will also feature the first Singapore’s underground air-conditioned Bus Interchange below the housing board flats. 
                  The new Interchange will be next to Woodleigh MRT station and will cater to 5 bus service. Bidadari Park is right along side to 
                  <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  ><b>The Lilium</b></NuxtLink
                >, future residents can expect a better quality of life living in the vicinity.
                  </h1>
        <section class="py-6">
          <NuxtLink
            to="/cross-island-line"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-theme-900
              bg-theme-700
            "
          >
            Continue To Cross Island Line (CRL)
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13 6l6 6-6 6M5 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></NuxtLink>
        </section>
      </div>
    </section>
    <BookAppointment />
  </div>
</template>
