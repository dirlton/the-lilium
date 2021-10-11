<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Maximum Loan Eligibility Calculator (TDSR)
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <div class="overflow-hidden bg-gray-200 rounded-lg select-none">
          <div class="p-2 space-y-2 text-white bg-gray-500 sm:p-5">
            <h3 class="text-xl font-semibold sm:text-2xl">
              Affordability Calculator
            </h3>
            <p>
              Find out the maximum amount you can loan and what you can afford
              to buy. Affordability Calculator is based on private residential
              property.
            </p>
          </div>
          <div
            class="
              grid grid-cols-1
              gap-4
              px-2
              pt-5
              sm:px-5 sm:grid-cols-2 sm:gap-6
            "
          >
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
                Main Applicant
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
                  <div class="space-y-4">
                    <p class="font-bold underline">Age &amp; Income</p>
                    <div class="space-y-4">
                      <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                        <div>Age*</div>
                        <div>
                          <input
                            v-model="age"
                            type="number"
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
                          <p class="mt-1 text-sm text-gray-500">Eg: 35</p>
                        </div>
                      </div>
                      <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                        <div>Monthly Fixed Income*</div>
                        <div>
                          <input
                            v-model="income"
                            type="number"
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
                          <p class="mt-1 text-sm text-gray-500">Eg: 5800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Joint Applicant (if any)
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
                  <div class="space-y-4">
                    <p class="font-bold underline">Age &amp; Income</p>
                    <div class="space-y-4">
                      <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                        <div>Age*</div>
                        <div>
                          <input
                            v-model="age1"
                            type="number"
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
                          <p class="mt-1 text-sm text-gray-500">Eg: 35</p>
                        </div>
                      </div>
                      <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                        <div>Monthly Fixed Income*</div>
                        <div>
                          <input
                            v-model="income1"
                            type="number"
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
                          <p class="mt-1 text-sm text-gray-500">Eg: 5800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-4 sm:col-span-2">
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
                Monthly Debt Obligations
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
                  <div class="space-y-4">
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Car Loan</div>
                      <div>
                        <input
                          v-model="carLoan"
                          type="number"
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
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Credit Cards</div>
                      <div>
                        <input
                          v-model="creditCard"
                          type="number"
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
                  </div>
                </div>
              </div>
            </div>
            <div>
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
          <div class="p-2 sm:p-5">
            <h4 class="text-xl font-medium mb-4">Financial Analysis</h4>
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
                Affordability
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
                  <div class="space-y-4">
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>60% TDSR Limit</div>
                      <div>
                        <input
                          v-model="TDSR"
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
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Max Loan Tenure (Years)</div>
                      <div>
                        <input
                          v-model="maxLoanTenure"
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
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Maximum Loan Amount*</div>
                      <div>
                        <input
                          v-model="maxLoanAmount"
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
                    <div class="sm:grid sm:grid-cols-2 sm:gap-6">
                      <div>Maximum Property Value#</div>
                      <div>
                        <input
                          v-model="maxPropertyValue"
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
                  </div>
                  <div class="space-y-4 text-sm text-gray-700">
                    <p>
                      *Max Loan Amount can be increased using other legal
                      funding techniques if required. Contact us for more
                      information.
                    </p>
                    <p>
                      *Max Loan Amount is based on assumption that you currently
                      do not have any other existing housing loan.
                    </p>
                    <p>
                      #Max Property Value increase according to your Max Loan
                      Amount. Can also be increased if you have additional cash
                      on hand.
                    </p>
                    <p>
                      ^The results provided by this calculator assume the
                      accuracy of the users inputs and are based on
                      corresponding rules and regulations as set out by the
                      Monetary Authority of Singapore (MAS). The results are
                      provided as a general basis for information and does not
                      constitute an approval from any bank or financial
                      institution. Results as indicative and for illustrative
                      purposes. Any person acting upon or in reliance of this
                      information does so entirely at their own risk. No
                      warranty whatsoever is given and no liability is accepted
                      by us behind this calculator for any loss arising directly
                      or indirectly as a result of any action or omission made
                      in reliance of any information presented herein at any
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/financing/rental-yield-calculator"
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
            Continue To Rental Yield Calculator
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
      age: '',
      age1: '',
      income: '',
      income1: '',
      carLoan: '',
      carLoan1: '',
      creditCard: '',
      creditCard1: '',
      averageWeightedAge: '',
      maxLoanTenure: '',
      TDSR: '',
      discountFactor: '',
      maxLoanAmount: '',
      maxPropertyValue: '',
    }
  },
  computed: {
    compoundProperty() {
      return [
        this.age,
        this.age1,
        this.income,
        this.income1,
        this.carLoan,
        this.carLoan1,
        this.creditCard,
        this.creditCard1,
      ].join()
    },
  },
  watch: {
    compoundProperty() {
      if (
        (this.age > 0 && this.income > 0) ||
        (this.age1 > 0 && this.income1 > 0)
      ) {
        const age = !isNaN(this.age) && this.age > 0 ? this.age : 0
        const age1 = !isNaN(this.age1) && this.age1 > 0 ? this.age1 : 0
        const income = !isNaN(this.income) && this.income > 0 ? this.income : 0
        const income1 =
          !isNaN(this.income1) && this.income1 > 0 ? this.income1 : 0
        const carLoan =
          !isNaN(this.carLoan) && this.carLoan > 0 ? this.carLoan : 0
        const carLoan1 =
          !isNaN(this.carLoan1) && this.carLoan1 > 0 ? this.carLoan1 : 0
        const creditCard =
          !isNaN(this.creditCard) && this.creditCard > 0 ? this.creditCard : 0
        const creditCard1 =
          !isNaN(this.creditCard1) && this.creditCard1 > 0
            ? this.creditCard1
            : 0

        this.averageWeightedAge = this.calAverageWeightedAge(
          age,
          income,
          age1,
          income1
        )

        const TDSR = this.calTDSR(
          income,
          income1,
          carLoan,
          carLoan1,
          creditCard,
          creditCard1
        )

        this.TDSR = TDSR.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })

        this.discountFactor = this.calDiscountFactor()
        const maxLoanAmount = this.calMaxLoanAmount(
          TDSR,
          this.discountFactor
        ).toFixed(2)
        this.maxLoanAmount = parseFloat(maxLoanAmount).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })

        this.maxPropertyValue = this.calMaxPropertyValue(
          maxLoanAmount
        ).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })
      }
    },
  },
  methods: {
    reset() {
      this.age = ''
      this.age1 = ''
      this.income = ''
      this.income1 = ''
      this.carLoan = ''
      this.carLoan1 = ''
      this.creditCard = ''
      this.creditCard1 = ''
    },

    calAverageWeightedAge: (age, income, age1, income1) => {
      const application = parseFloat(age) * parseFloat(income)
      const application2 = parseFloat(age1) * parseFloat(income1)
      const sumIncome = parseFloat(income) + parseFloat(income1)
      const average = (application + application2) / sumIncome
      return average
    },
    calInterestRate() {
      return 3.5 / 1200
    },
    calMaxLoanTenure() {
      let maxLoanTenure = 65 - this.averageWeightedAge
      if (maxLoanTenure > 30) {
        maxLoanTenure = 30
      }
      this.maxLoanTenure = maxLoanTenure
    },

    calTotalRepaymentPeriod() {
      return this.maxLoanTenure * 12
    },

    calTDSR(income, income1, carLoan, carLoan1, creditCard, creditCard1) {
      const totalIncomePercentage =
        (parseFloat(income) + parseFloat(income1)) * 0.6
      const monthlyDebtObligations =
        parseFloat(carLoan) +
        parseFloat(creditCard) +
        parseFloat(carLoan1) +
        parseFloat(creditCard1)

      return totalIncomePercentage - monthlyDebtObligations
    },
    calDiscountFactor() {
      const interestRate = this.calInterestRate()
      this.calMaxLoanTenure()
      const totalRepaymentPeriod = this.calTotalRepaymentPeriod()
      const powerOfMaxLoanTenure = Math.pow(
        1 + interestRate,
        totalRepaymentPeriod
      )

      const discountFactor =
        (powerOfMaxLoanTenure - 1) / (interestRate * powerOfMaxLoanTenure)
      return discountFactor
    },

    calMaxLoanAmount(TDSR, discountFactor) {
      return TDSR * discountFactor
    },

    calMaxPropertyValue(maxLoanAmount) {
      return maxLoanAmount / 0.75
    },
  },
}
</script>

<style scoped></style>
