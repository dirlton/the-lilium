<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Pricing
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
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
                  <thead class="bg-brown-50">
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
                        No. of Rooms
                      </th>
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
                        Type
                      </th>
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
                        Stack
                      </th>
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
                        Size (SQFT)
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
                        Price Starting From ($)
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">1 Bedroom</td>
                      <td class="px-6 py-4 whitespace-nowrap">A1, A2, A3 </td>
                      <td class="px-6 py-4 whitespace-nowrap">3, 4, 5</td>
                      <td class="px-6 py-4 whitespace-nowrap">441, 452, 463</td>
                      <td class="px-16 py-4 whitespace-nowrap text-center">$1,330,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        2 Bedroom
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">B1, B2, B3, B4 </td>
                      <td class="px-6 py-4 whitespace-nowrap">1, 2, 6, 7</td>
                      <td class="px-6 py-4 whitespace-nowrap">700, 732</td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">$1,780,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        2 Bedroom + Study
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">BS1, BS2, BS3</td>
                      <td class="px-6 py-4 whitespace-nowrap">8, 9, 10, 11</td>
                      <td class="px-6 py-4 whitespace-nowrap">807, 829, 872</td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">$1,995,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        3 Bedroom with Private Lift
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">C1</td>
                      <td class="px-6 py-4 whitespace-nowrap">12</td>
                      <td class="px-6 py-4 whitespace-nowrap">1,421</td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">$3,428,000</td>
                    </tr>
                    <tr class="hover:bg-brown-100">
                      <td class="px-6 py-4 whitespace-nowrap">
                        Penthouse
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">E1, E2, E3</td>
                      <td class="px-6 py-4 whitespace-nowrap">1, 2, 3</td>
                      <td class="px-6 py-4 whitespace-nowrap">1,744, 1,948, 4,306</td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">$6,793,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br>
                  <h1 class="text-center">(Disclaimer: All price range of each unit type for One Bernam displayed here are updated in a periodic manner. 
                  However, it is strictly for reference purposes only. Prices are subject to change from time to time without prior notice. 
                  This webpage cannot be held responsible for any inaccuracies, omissions and/or dispute.)</h1>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/gallery"
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
              hover:bg-brown-900
              bg-brown-700
            "
          >
            Continue To Gallery
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
