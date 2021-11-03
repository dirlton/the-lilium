<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Payar Lebar Airbase
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/ura/payar-lebar1.png"
          alt="Payar Lebar Airbase"
          class="mx-auto"
        />
        <br>
        <h1 class="max-w-5xl mx-auto text-justify">
                  The Government has announced that from 2030 onwards, the Paya Lebar Airbase will be relocated. The airbase and its surrounding 
                  industrial developments which are about 5 times of Toa Payoh area will then be transformed into a distinctive and unique town.
                  </h1>
                  <h1 class="max-w-5xl mx-auto text-justify">
                  It will be a commercial hub with jobs and amenities for future residents and employees. The transformation of the airbase area 
                  and its surroundings will improve the connectivity across towns and at the same time accommodating a meaningful green and play 
                  spaces for people to enjoy.
                  </h1>
                  <h1 class="max-w-5xl mx-auto text-justify">
                  This potential development of the Lilium’s neighbourhood will bring much more excitement and convenience to its community than 
                  you can imagine.
                  </h1>
        <section class="py-6">
          <NuxtLink
            to="/bidadari-park"
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
            Continue To Bidadari Park
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
