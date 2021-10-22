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
                <p>MCC &amp; HY Realty Pte. Ltd. (Bernam)</p>
              </div>
              <div>
                <label class="block text-gray-500"
                  >Developer's License No.</label
                >
                <p>201930468M</p>
              </div>
              <div>
                <label class="block text-gray-500">Location</label>
                <p>Bernam Street / Anson Road Precinct</p>
              </div>
              <div>
                <label class="block text-gray-500">Tenure of Land</label>
                <p>99 year leasehold</p>
              </div>
              <div>
                <label class="block text-gray-500">Gross Floor Area</label>
                <p>Approx. 30,077 sqm / 323,758 sqft</p>
              </div>
              <div>
                <label class="block text-gray-500">Site Area</label>
                <p>Approx. 3,846.2 sqm or 41,400 sqft</p>
              </div>
              <div>
                <label class="block text-gray-500">Carpark Lots</label>
                <p>178 Lots (inclusive of 6 Carpark Lots (comprised in 3 Accessory Lots) for penthouse units and 2 Accessible Lots)</p>
              </div>
              <div>
                <label class="block text-gray-500">District</label>
                <p>2</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Blocks</label>
                <p>38 Blocks</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Storeys</label>
                <p>2 Storey Commercial, One Storey Service Apartments (13 Units) and 32 Residential Units with Swimming Pool</p>
              </div>
              <div>
                <label class="block text-gray-500">No. of Units</label>
                <p>351 Residential Units</p>
              </div>
              <div>
                <label class="block text-gray-500">Architect</label>
                <p>DP Architect PTE LTD.</p>
              </div>
              <div>
                <label class="block text-gray-500">Landscape Consultant</label>
                <p>DP Green</p>
              </div>
              <div>
                <label class="block text-gray-500">Address</label>
                <p>Bernam Street</p>
              </div>
              <div>
                <label class="block text-gray-500">Expected Date of TOP</label>
                <p>30 June 2025</p>
              </div>
              <div>
                <label class="block text-gray-500">Expected Date of Legal Completion</label>
                <p>30 June 2027</p>
              </div>
            </div>
          </div>
          <div class="py-4 italic text-center text-gray-500">
            (Project details for One Bernam 柏南華庭 may be subjected to change without prior notice)
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
