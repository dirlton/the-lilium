<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Cross Island Line (CRL)
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/ura/crl-singapore-map-1024x606.jpg"
          alt="Cross Island Line (CRL)"
          class="mx-auto"
        />
        <br>
        <h1 class="max-w-5xl mx-auto text-justify">
                  The Cross Island Line (CRL) will be Singapore’s eight MRT Line is the longest fully underground line with more than 50km long. CRL will have the highest number of interchange stations as well, connecting commuter to the existing MRT line for more travel routes. 
                  With the new development of CRL, future residents of <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  ><b>The Lilium</b></NuxtLink
                > can expect shorten commute time across the Island.
                  </h1><br>
        <img
          src="~assets/img/ura/why-build-the-crl-singapore-724x1024.jpg"
          alt="Cross Island Line (CRL)"
          class="mx-auto"
        /> <br>
        <section class="py-6">
          <NuxtLink
            to="/bidadari-estate"
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
            Continue To URA: Bidadari Estate
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
