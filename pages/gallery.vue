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
        { url: 'One-bernam-commercial-square.jpg' }, 
        { url: 'One-Bernam-facade.jpg' },
        { url: 'one-bernam-function-room.jpg' }, 
        { url: 'One-bernam-garden-deck.jpg' },
        { url: 'One-Bernam-hammock-1024x611.jpg' }, 
        { url: 'one-bernam-landscape.jpg' }, 
        { url: 'One-bernam-living-room.jpg' },
        { url: 'One-Bernam-pool.jpg' }, 
        { url: 'One-Bernam-pool-deck.jpg' }, 
      ],
    }
  },
}
</script>
