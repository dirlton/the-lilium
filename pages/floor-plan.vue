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
            3 Bedroom Premium
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroomPremium" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom + Study
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroomStudy"/>
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
      TwoBedroom: [
        { title: 'Type B1', url: '2-bed-b1.png' },
      ],
      TwoBedroomStudy: [
        { title: 'Type B2', url: '2-bed-study-b2.png' },
        { title: 'Type B3', url: '2-bed-study-b3.png' },
      ],
      ThreeBedroom: [
        { title: 'Type C1', url: '3bed-c1.png' },
      ],
      ThreeBedroomPremium: [
        { title: 'Type C2', url: '3bed-c2.png' },
        ],
        FourBedroom: [
        { title: 'Type D1', url: 'type-d1.png' },
        { title: 'Type D2', url: 'type-d2.png' },
        ],
        FourBedroomStudy: [
        { title: 'Type PH1 - Lower ', url: 'type-ph1-lower.png' },
        { title: 'Type PH1 - Upper ', url: 'type-ph1-upper.png' },
        { title: 'Type PH2 - Lower ', url: 'type-ph2-lower.png' },
        { title: 'Type PH2 - Upper ', url: 'type-ph2-upper.png' },
        { title: 'Type PH3 - Lower ', url: 'type-ph3-lower.png' },
        { title: 'Type PH3 - Upper ', url: 'type-ph3-upper.png' },
        ],
    }
  },
}
</script>
