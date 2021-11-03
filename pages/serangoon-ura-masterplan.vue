<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Serangoon URA Master Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/ura/the-serangoon-master-plan1.png"
          alt="Serangoon URA Master Plan"
          class="mx-auto"
        />
        <img
          src="~assets/img/ura/the-serangoon-master-plan2.png"
          alt="Serangoon URA Master Plan"
          class="mx-auto"
        />
        <img
          src="~assets/img/ura/the-serangoon-master-plan3.png"
          alt="Serangoon URA Master Plan"
          class="mx-auto"
        />

         <br>
        <h1 class="max-w-5xl mx-auto">
                  With the development of future Serangoon sub-regional center, and a new pedestrian mall at Serangoon
                  Central, 
                  <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >The Lilium</NuxtLink
                >
                  can expect a better quality of life living in the vicinity.
                  </h1>
        <section class="py-6">
          <NuxtLink
            to="/payar-lebar"
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
            Continue To Payar Lebar Airbase
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
