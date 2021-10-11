<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Payment Scheme
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              Normal Payment Scheme (NPS)
            </h3>
            <div class="max-w-2xl mx-auto text-center">
              Also known as Progressive Payment Scheme, allows you to service
              your loan via monthly instalments progressively stage by stage as
              the property is being built.
            </div>
          </div>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  inline-block
                  min-w-full
                  py-2
                  align-middle
                  sm:px-6
                  lg:px-8
                "
              >
                <div
                  class="
                    overflow-hidden
                    border-b border-gray-200
                    shadow
                    sm:rounded-lg
                  "
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-theme-50">
                      <tr>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-left text-gray-500
                            uppercase
                          "
                        >
                          Stage
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-center text-gray-500
                            uppercase
                          "
                        >
                          Payment Under a Standard Payment Scheme (% of Purchase
                          Price)
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Upon the grant of Option to Purchase
                        </td>
                        <td class="px-6 py-4 text-center">5% (Booking Fee)</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Upon signing of the Sale &amp; Purchase Agreement or
                          within 8 weeks from the Option date
                        </td>
                        <td class="px-6 py-4 text-center">
                          20% less Booking Fee
                        </td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">Completion of foundation work</td>
                        <td class="px-6 py-4 text-center">10%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Completion of reinforced concrete framework of unit
                        </td>
                        <td class="px-6 py-4 text-center">10%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Completion of partition walls of unit
                        </td>
                        <td class="px-6 py-4 text-center">5%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Completion of roofing/ceiling of unit
                        </td>
                        <td class="px-6 py-4 text-center">5%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Completion of door sub-frames/ door frames, window
                          frames, electrical wiring, internal plastering and
                          plumbing of unit
                        </td>
                        <td class="px-6 py-4 text-center">5%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Completion of car park, roads and drains serving the
                          housing project
                        </td>
                        <td class="px-6 py-4 text-center">5%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">
                          Notice of Vacant Possession (TOP)
                        </td>
                        <td class="px-6 py-4 text-center">25%</td>
                      </tr>
                      <tr class="hover:bg-theme-100">
                        <td class="px-6 py-4">On Completion date</td>
                        <td class="px-6 py-4 text-center">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/financing/housing-loan-information"
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
            Continue To Housing Loan Information
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
