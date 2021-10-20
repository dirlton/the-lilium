<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Floor Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            1 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="OneBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            2 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            2 Bedroom + Study
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroomStudy" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            3 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Penthouse
          </h3>
          <BedroomImageModal :bed-room-prop="Penthouse" />
        </div>
        <section class="py-6">
          <NuxtLink
            to="/pricing"
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
            Continue To Pricing
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

<script>
export default {
  data() {
    return {
      OneBedroom: [
        { title: 'Type A1', url: '0001.jpg' },
        { title: 'Type A2', url: '0002.jpg' },
        { title: 'Type A3', url: '0003.jpg' },
      ],
      TwoBedroom: [
        { title: 'Type B1', url: '0004.jpg' },
        { title: 'Type B2', url: '0005.jpg' },
        { title: 'Type B3', url: '0006.jpg' },
        { title: 'Type B4', url: '0007.jpg' },
      ],
      TwoBedroomStudy: [
        { title: 'Type BS1', url: '0008.jpg' },
        { title: 'Type BS2', url: '0009.jpg' },
        { title: 'Type BS3', url: '0010.jpg' },
        { title: 'Type BS4', url: '0011.jpg' },
      ],
      ThreeBedroom: [
        { title: 'Type C1', url: '0012.jpg' },

      ],
      Penthouse: [
        { title: 'Type E1', url: '0013.jpg' },
        { title: 'Type E2', url: '0014.jpg' },
        { title: 'Type E3', url: '0015.jpg' },
        ],
    }
  },
}
</script>
