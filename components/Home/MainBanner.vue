<template>
  <section>
    <div data-v-750ad506="" class="shadow-md">
      <div
        id="main_banner"
        data-v-750ad506=""
        class="overflow-hidden bg-center bg-no-repeat bg-cover max-h-96"
        style="height: 500px"
      >
        <div
          data-v-750ad506=""
          class="relative w-full h-full max-w-6xl px-4 mx-auto"
        >
          <div data-v-750ad506="" class="absolute bottom-0 right-0 w-96">
            <div
              data-v-750ad506=""
              class="
                absolute
                h-40
                bg-gray-700 bg-opacity-75
                w-52
                sm:h-48 sm:w-64 sm:right-28
                right-20
                top-2
              "
            ></div>
            <img
              data-v-750ad506=""
              src="~/assets/img/home/tablet.png"
              alt=""
              class="relative ml-auto max-h-64 sm:max-h-80"
            />
            <div
              data-v-750ad506=""
              class="
                absolute
                p-5
                space-y-4
                text-center
                right-20
                top-3
                sm:right-28 sm:top-8
              "
            >
              <div data-v-750ad506="" class="py-1">
                <p
                  data-v-750ad506=""
                  class="
                    text-sm
                    font-medium
                    tracking-widest
                    uppercase
                    sm:text-base
                    text-theme-100
                  "
                >
                  For Sales Enquiry
                </p>
                <a
                  data-v-750ad506=""
                  href="tel:+6561003337"
                  class="text-xl font-semibold text-white sm:text-2xl"
                  >+65 6100 3337</a
                >
              </div>
              <div data-v-750ad506="" class="py-2">
                <NuxtLink
                  data-v-750ad506=""
                  to="/book-an-appointment"
                  class="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-800
                    transition
                    bg-yellow-500
                    rounded-full
                    sm:text-base
                    hover:bg-yellow-600 hover:text-white
                  "
                >
                  Get Developer Price
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-theme-800 to-theme-500 pb-36">
      <div class="max-w-6xl px-4 mx-auto">
        <div class="py-10 space-y-1 text-center text-white">
          <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
            The Lilium &amp; The Gazania
          </h3>
          <h4 class="text-xl font-medium">
            Official Website By SingHaiyi Huajiang Pte. Ltd.
          </h4>
        </div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto -mt-36">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <NuxtLink to="/floor-plan" class=""
          ><div class="max-w-sm mx-auto group">
            <img
              src="~/assets/img/home/home-floor-plan.jpg"
              alt="Floor Plan"
              class="w-full rounded shadow"
            />
            <div class="px-8 -mt-14">
              <div
                class="
                  relative
                  flex flex-wrap
                  items-center
                  justify-center
                  p-5
                  bg-white
                  rounded
                  shadow
                "
              >
                <div class="space-y-px text-center">
                  <p class="font-bold text-theme-800">Full Floor Plan</p>
                  <p
                    class="
                      text-xl
                      font-semibold
                      text-gray-700
                      transition
                      group-hover:text-gray-500
                    "
                  >
                    Floor Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/book-an-appointment" class=""
          ><div class="max-w-sm mx-auto group">
            <img
              src="~/assets/img/home/home-book-appointment-1.jpg"
              alt="Get Direct Discounts"
              class="w-full rounded shadow"
            />
            <div class="px-8 -mt-14">
              <div
                class="
                  relative
                  flex flex-wrap
                  items-center
                  justify-center
                  p-5
                  bg-white
                  rounded
                  shadow
                "
              >
                <div class="space-y-px text-center">
                  <p class="font-bold text-theme-800">Book Appointment</p>
                  <p
                    class="
                      text-xl
                      font-semibold
                      text-gray-700
                      transition
                      group-hover:text-gray-500
                    "
                  >
                    Get Direct Discounts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/contact-us" class=""
          ><div class="max-w-sm mx-auto group">
            <img
              src="~/assets/img/home/home-best-price.jpg"
              alt="Daily Price Updates"
              class="w-full rounded shadow"
            />
            <div class="px-8 -mt-14">
              <div
                class="
                  relative
                  flex flex-wrap
                  items-center
                  justify-center
                  p-5
                  bg-white
                  rounded
                  shadow
                "
              >
                <div class="space-y-px text-center">
                  <p class="font-bold text-theme-800">Price List</p>
                  <p
                    class="
                      text-xl
                      font-semibold
                      text-gray-700
                      transition
                      group-hover:text-gray-500
                    "
                  >
                    Daily Price Updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scope>
#main_banner {
  background-image: url('~assets/img/home/The-Lilium-Perspective-3.jpg');
}
</style>
