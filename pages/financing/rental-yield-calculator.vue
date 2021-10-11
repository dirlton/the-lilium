<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Rental Yield Calculator
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="overflow-hidden bg-gray-200 rounded-lg select-none">
          <div class="p-2 space-y-2 text-white bg-gray-500 sm:p-5">
            <h3 class="text-xl font-semibold sm:text-2xl">
              Rental Yield Calculator
            </h3>
            <p>
              Check the projected rental yield for the unit that you are
              intending to purchase.
            </p>
          </div>
          <div class="p-2 space-y-6 sm:p-5">
            <div class="p-5 border border-gray-300">
              <div class="space-y-4">
                <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                  <div>Property Price ($)</div>
                  <div>
                    <input
                      v-model="propertyPrice"
                      type="text"
                      class="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                    <p class="mt-1 text-sm text-gray-500">Eg: 900000</p>
                  </div>
                </div>
                <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                  <div>Estimated Monthly Rental ($)</div>
                  <div>
                    <input
                      v-model="monthlyRental"
                      type="text"
                      class="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                    <p class="mt-1 text-sm text-gray-500">Eg: 4000</p>
                  </div>
                </div>
                <button
                  class="
                    px-3
                    py-1
                    text-white
                    transition
                    bg-gray-700
                    rounded
                    hover:bg-gray-900
                  "
                  @click="reset"
                >
                  Reset
                </button>
              </div>
            </div>
            <h4 class="text-xl font-medium">Calculation Result</h4>
            <div class="pt-4">
              <div
                class="
                  absolute
                  z-10
                  p-2
                  ml-4
                  -mt-5
                  bg-white
                  border border-gray-300
                "
              >
                Rental Yield Calculation
              </div>
              <div
                class="
                  px-2
                  pt-10
                  pb-2
                  space-y-6
                  border border-gray-300
                  sm:px-5 sm:pb-5
                "
              >
                <div class="space-y-4">
                  <div class="space-y-12">
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Gross Rental Yield</div>
                      <div>
                        <input
                          v-model="grossResult"
                          type="text"
                          readonly="readonly"
                          class="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                          "
                        />
                        <p class="mt-1 text-sm text-gray-500"></p>
                      </div>
                    </div>
                    <div class="text-sm text-gray-700">
                      <p>
                        Disclaimer: The computation above is indicative and for
                        illustrative purposes. Any person acting upon or in
                        reliance of this information does so entirely at their
                        own risk. No warranty whatsoever is given and no
                        liability is accepted by us behind this calculator for
                        loss arising directly or indirectly as a result of any
                        action or omission made in reliance of any information
                        presented herein at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/book-an-appointment"
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
            Continue To Book An Appointment
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
      propertyPrice: null,
      monthlyRental: null,
      grossResult: null,
    }
  },
  watch: {
    monthlyRental() {
      this.grossResult = null
      if (this.propertyPrice != null && this.monthlyRental != null) {
        this.grossResult = this.getGrossResult(
          this.propertyPrice,
          this.monthlyRental
        )
      }
    },
  },
  methods: {
    reset() {
      this.propertyPrice = null
      this.monthlyRental = null
    },
    getGrossResult: (propertyPrice, monthlyRental) => {
      const propertyValue = parseFloat(propertyPrice)
      const rent = parseFloat(monthlyRental) * 12
      const gross = String(((rent / propertyValue) * 100).toFixed(2)) + '%'
      return gross
    },
  },
}
</script>
