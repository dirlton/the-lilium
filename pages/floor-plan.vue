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
          <h3 class="text-xl font-semib old sm:text-2xl text-center">
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
            3 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            4 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            5 Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FiveBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">Terrace</h3>
          <BedroomImageModal :bed-room-prop="Terrance" />
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
        { title: 'Type 1BR-a', url: '1BR-a.png' },
        { title: 'Type 1BR-aR', url: '1BR-aR.png' },
        { title: 'Type 1BR-b', url: '1BR-b.png' },
        { title: 'Type 1BR-bR', url: '1BR-bR.png' },
        { title: 'Type 1BR-c', url: '1BR-c.png' },
        { title: 'Type 1BR-cR', url: '1BR-cR.png' },
        { title: 'Type 1BR-Sa', url: '1BR-Sa.png' },
        { title: 'Type 1BR-Sb', url: '1BR-Sb.png' },
        { title: 'Type 1BR-Sc', url: '1BR-Sc.png' },
      ],
      TwoBedroom: [
        { title: 'Type 2BR-Ca', url: '2BR-Ca.png' },
        { title: 'Type 2BR-CaR', url: '2BR-CaR.png' },
        { title: 'Type 2BR-Cb', url: '2BR-Cb.png' },
        { title: 'Type 2BR-CbR', url: '2BR-CbR.png' },
        { title: 'Type 2BR-Pa', url: '2BR-Pa.png' },
        { title: 'Type 2BR-Pb', url: '2BR-Pb.png' },
        { title: 'Type 2BR-Pc', url: '2BR-Pc.png' },
        { title: 'Type 2BR-Pd', url: '2BR-Pd.png' },
        { title: 'Type 2BR-Pe', url: '2BR-Pe.png' },
        { title: 'Type 2BR-Pf', url: '2BR-Pf.png' },
        { title: 'Type 2BR-Pg', url: '2BR-Pg.png' },
        { title: 'Type 2BR-Ph', url: '2BR-Ph.png' },
        { title: 'Type 2BR-Sa', url: '2BR-Sa.png' },
        { title: 'Type 2BR-Sb', url: '2BR-Sb.png' },
      ],
      ThreeBedroom: [
        { title: 'Type 3BR-Ca', url: '3BR-Ca.png' },
        { title: 'Type 3BR-CaR', url: '3BR-CaR.png' },
        { title: 'Type 3BR-CaRR', url: '3BR-CaRR.png' },
        { title: 'Type 3BR-Cb', url: '3BR-Cb.png' },
        { title: 'Type 3BR-CbR', url: '3BR-CbR.png' },
        { title: 'Type 3BR-Cc', url: '3BR-Cc.png' },
        { title: 'Type 3BR-CcR', url: '3BR-CcR.png' },
        { title: 'Type 3BR-Cd', url: '3BR-Cd.png' },
        { title: 'Type 3BR-Pa', url: '3BR-Pa.png' },
        { title: 'Type 3BR-Pb', url: '3BR-Pb.png' },
        { title: 'Type 3BR-Pc', url: '3BR-Pc.png' },
        { title: 'Type 3BR-Pd', url: '3BR-Pd.png' },
        { title: 'Type 3BR-Pe', url: '3BR-Pe.png' },
      ],
      FourBedroom: [
        { title: 'Type 4BR-Ca', url: '4BR-Ca.png' },
        { title: 'Type 4BR-Pa', url: '4BR-Pa.png' },
        { title: 'Type 4BR-Pb', url: '4BR-Pb.png' },
        { title: 'Type 4BR-Pc', url: '4BR-Pc.png' },
      ],
      FiveBedroom: [{ title: 'Type 5BR', url: '5BR.png' }],
      Terrance: [
        { title: 'Type Terrace 1', url: 'terrace_1.png' },
        { title: 'Type Terrace 2', url: 'terrace_2.png' },
      ],
    }
  },
}
</script>
