<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Gallery
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
          <ImageModal :images-prop="imageUrl" />
        </div>
        <section class="py-6">
          <NuxtLink
            to="/e-brochure"
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
            Continue To e-Brochue
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
    </section>
    <BookAppointment />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: [
        { url: 'Normanton-Park-50m-Pool-1024x502.jpg' },
        { url: 'Normanton-Park-Commercial-1024x563.jpg' },
        { url: 'Normanton-Park-Facilities-1024x717.jpg' },
        { url: 'Normanton-Park-Grand-Lobby-1024x512.jpg' },
        { url: 'Normanton-Park-HERO-1-1024x768.jpg' },
        { url: 'Normanton-Park-Landscape-1024x614.jpg' },
        { url: 'Normanton-Park-LanternTrail-1024x614.jpg' },
        { url: 'Normanton-Park-Overall_HERO-2-1024x716.jpg' },
        { url: 'Normanton-Park-Panoramic-HERO-1024x293.jpg' },
        { url: 'Normanton-Park-Strata-1-1024x560.jpg' },
        { url: 'Normanton-Park-Strata-2-1024x563.jpg' },
        { url: 'Normanton-Park-Unit-Views-1024x563.jpg' },
      ],
    }
  },
}
</script>
