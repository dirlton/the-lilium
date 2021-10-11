<template>
  <div>
    <div>
      <div class="py-12 select-none bg-theme-700">
        <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Project Details
        </div>
      </div>
      <section class="py-12">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-gray-500">Developer</label>
                <p>Kingsford Huray Development</p>
              </div>
              <div>
                <label class="block text-gray-500"
                  >Developer's License No.</label
                >
                <p>C1315</p>
              </div>
              <div>
                <label class="block text-gray-500">Location</label>
                <p>Kent Ridge (Queentsown Planing Area)</p>
              </div>
              <div>
                <label class="block text-gray-500">Tenure of Land</label>
                <p>Leasehold</p>
              </div>
              <div>
                <label class="block text-gray-500">Site Area</label>
                <p>Approx. 660,999 sqft</p>
              </div>
              <div>
                <label class="block text-gray-500"
                  >Expected Vacant Possession</label
                >
                <p>2-Jan-23</p>
              </div>
              <div>
                <label class="block text-gray-500">Carpark Lots</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500">District</label>
                <p>5</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Blocks</label>
                <p>9</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Storeys</label>
                <p>24</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Units</label>
                <p>
                  1840 units + 22 Strata Landed + 1 Restaurant + 8 Retail Shops
                </p>
              </div>
              <div>
                <label class="block text-gray-500">Main Contractor</label>
                <p>China Jingye Engineering Corp Ltd</p>
              </div>
              <div>
                <label class="block text-gray-500">Architect</label>
                <p>P &amp; T Group</p>
              </div>
              <div>
                <label class="block text-gray-500">Landscape Consultant</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500">Address</label>
                <p>1-13 Normanton Park</p>
              </div>
            </div>
          </div>
          <div class="py-4 italic text-center text-gray-500">
            (Project details for Normanton Park may be subjected to change
            without prior notice)
          </div>
          <section class="py-6">
            <NuxtLink
              to="/location-map"
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
              Continue To Location Map
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
  </div>
</template>
<script>
export default {}
</script>
