<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Bukit Merah URA Masterplan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Normaton-Park-Bukit-Merah-Draft-Masterplan-2019-Page-1.jpg"
          alt="Bukit Merah URA Masterplan"
          class="mx-auto"
        />
        <img
        src="~assets/img/Normaton-Park-Bukit-Merah-Draft-Masterplan-2019-Page-2.jpg"
          alt="Bukit Merah URA Masterplan"
          class="mx-auto"
        />
        <section class="py-6">
          <NuxtLink
            to="/financing/stamp-duty"
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
            Continue To Stamp Duty
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
