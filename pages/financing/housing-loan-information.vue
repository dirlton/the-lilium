<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Housing Loan Information
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="space-y-6">
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
                    <thead>
                      <tr class="divide-x divide-gray-200">
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-left
                            uppercase
                            text-theme-700
                            bg-theme-100
                          "
                        ></th>
                        <th
                          colspan="3"
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-left
                            uppercase
                            text-theme-700
                            bg-theme-100
                          "
                        >
                          First Loan
                        </th>
                        <th
                          colspan="3"
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-left
                            uppercase
                            text-theme-700
                            bg-theme-100
                          "
                        >
                          Second Loan
                        </th>
                        <th
                          colspan="3"
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-xs
                            font-medium
                            tracking-wider
                            text-left
                            uppercase
                            text-theme-700
                            bg-theme-100
                          "
                        >
                          Third Loan
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Loan Tenure</td>
                        <td colspan="2" class="px-3 py-2">Up to 30 years</td>
                        <td colspan="1" class="px-3 py-2">31-35 years</td>
                        <td colspan="2" class="px-3 py-2">Up to 30 years</td>
                        <td colspan="1" class="px-3 py-2">31-35 years</td>
                        <td colspan="2" class="px-3 py-2">Up to 30 years</td>
                        <td colspan="1" class="px-3 py-2">31-35 years</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td rowspan="2" class="px-3 py-2">Age</td>
                        <td colspan="9" class="px-3 py-2">
                          Age used to calculate loan tenure, will be based on
                          income-weighted
                        </td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td colspan="1" class="px-3 py-2">Up to 65</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                        <td colspan="1" class="px-3 py-2">Up to 65</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                        <td colspan="1" class="px-3 py-2">Up to 65</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                        <td colspan="1" class="px-3 py-2">Up to 70-75</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td rowspan="2" class="px-3 py-2">Maximum LTV Limit</td>
                        <td class="px-3 py-2">75%</td>
                        <td class="px-3 py-2">55%</td>
                        <td class="px-3 py-2">55%</td>
                        <td class="px-3 py-2">45%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">35%</td>
                        <td class="px-3 py-2">15%</td>
                        <td class="px-3 py-2">15%</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td colspan="9" class="px-3 py-2 text-center">
                          20% (non-individuals)
                        </td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Minimum Cash Downpayment</td>
                        <td class="px-3 py-2">5%</td>
                        <td class="px-3 py-2">10%</td>
                        <td class="px-3 py-2">10%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                        <td class="px-3 py-2">25%</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Gaurantors / Co-borrowers</td>
                        <td colspan="9" class="px-3 py-2 text-center">
                          All Co-borrowers must be mortgagors.<br />
                          Guarantors must be co-borrowers if the latter did not
                          pass the TDSR criteria
                        </td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Mortgage Servicing Ratio</td>
                        <td colspan="9" class="px-3 py-2">N/A</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Total Debt Servicing Ratio</td>
                        <td colspan="9" class="px-3 py-2">60%</td>
                      </tr>
                      <tr class="divide-x divide-gray-200">
                        <td class="px-3 py-2">Stress Test Interest Rate</td>
                        <td colspan="9" class="px-3 py-2">3.5%</td>
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
            to="/financing/maximum-loan-eligibility-calculator-tdsr"
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
            Continue To Maximum Loan Eligibility Calculator (TDSR)
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
