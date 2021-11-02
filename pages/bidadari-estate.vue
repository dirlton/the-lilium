<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        URA: Bidadari Estate     
        </div>
    </div>
    <section>
      <br>
        <p class="text-3xl text-center">
          <span class="font-medium text-theme-500">"The Future Bidadari Estate"</span>
        </p>
      <br>
        <p class="max-w-2xl mx-auto text-center">
          The Future Bidadari Estate which is envisioned as a "Tranquil Urban Oasis" with a "Garden Living Enviroment". 
          The Estate will be features the Bidadari Park, with an abundance of future amenities.
          </p>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/ura/bidadari.jpg"
          alt="Bidadari Estate"
          class="mx-auto"
        />
        <img
          src="~assets/img/ura/bidadari-1.jpg"
          alt="Bidadari Estate"
          class="mx-auto"
        />
        <img
          src="~assets/img/ura/bidadari-2.jpg"
          alt="Bidadari Estate"
          class="mx-auto"
        />
        <section class="py-6">
          <NuxtLink
            to="/press/press-one"
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
            Continue To New private home sales up 57%, highest for December in 8 years: URA Data
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
