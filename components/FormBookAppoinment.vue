<template>
  <section class="space-y-6">
    <form class="space-y-4" @submit.prevent="send">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="send_brochure"
            class="
              inline-flex
              items-center
              w-full
              p-4
              font-medium
              text-gray-600
              border
              rounded-lg
              border-theme-100
              bg-theme-50
            "
            ><input
              id="send_brochure"
              v-model="send_brochure"
              type="checkbox"
              class="
                border-gray-300
                rounded
                shadow-sm
                text-theme-600
                focus:border-theme-300
                focus:ring
                focus:ring-theme-200
                focus:ring-opacity-50
              "
            />
            <span class="ml-2"
              >Send me E-Brochure, Floor Plan &amp; Pricing now</span
            ></label
          >
          <!---->
        </div>
        <div>
          <label for="enquiry" class="block font-medium text-gray-500"
            >Enquiry<span class="text-red-500">*</span></label
          >
          <select
            id="enquiry"
            v-model="enquiry"
            required="required"
            class="form-input"
          >
            <option>Financing</option>
            <option>Purchase</option>
            <option>View Showflat</option>
            <option>CPF Fund Usage</option>
            <option>Loan Eligibility (LTV)</option>
            <option>Total Debt Servicing Ratio (TDSR)</option>
            <option>Additional Buyer Stamp Duty (ABSD)</option>
            <option>I want updates only</option>
            <option>Others</option>
          </select>
          <!---->
        </div>
        <div>
          <label for="name" class="block font-medium text-gray-500"
            >Name<span class="text-red-500">*</span></label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            required="required"
            class="uppercase form-input"
          />
          <!---->
        </div>
        <div>
          <label for="mobile" class="block font-medium text-gray-500"
            >Mobile<span class="text-red-500">*</span></label
          >
          <input
            id="mobile"
            v-model="mobile"
            type="text"
            required="required"
            class="lowercase form-input"
          />
          <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
            <div v-for="(error, index) in arrayError" :key="index">
              <p v-if="index === 'mobile'" class="mt-2 text-sm text-red-500">
                {{ error }}
              </p>
            </div>
          </div>

          <!---->
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-500"
            >Email<span class="text-red-500">*</span></label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required="required"
            class="form-input"
          />
          <!---->
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block font-medium text-gray-500"
            >Message</label
          >
          <textarea v-model="message" class="form-input"></textarea>
          <!---->
        </div>
        <div class="sm:col-span-2">
          <label for="make_appt" class="block font-medium text-gray-500"
            >Make an Appointment?<span class="text-red-500">*</span></label
          >
          <div class="space-y-2">
            <label class="flex items-center"
              ><input
                v-model="isAppointment"
                type="radio"
                value="Would like to make an appointment."
                class="mr-2"
              />
              I have some questions and I would like to make an appointment to
              discuss in details.
            </label>
            <label class="flex items-center"
              ><input
                v-model="isAppointment"
                type="radio"
                value="No appointment required."
                class="mr-2"
              />
              No appointment required for now.
            </label>
            <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
              <div v-for="(error, index) in arrayError" :key="index">
                <p
                  v-if="index === 'isAppointment'"
                  class="mt-2 text-sm text-red-500"
                >
                  {{ error }}
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block font-medium text-gray-500"
            >Acceptance of Privacy Policy<span class="text-red-500"
              >*</span
            ></label
          >
          <label class="inline-flex items-center"
            ><input
              v-model="policyIsAgree"
              type="checkbox"
              value="1"
              required="required"
              class="
                border-gray-300
                rounded
                shadow-sm
                text-theme-600
                focus:border-theme-300
                focus:ring
                focus:ring-theme-200
                focus:ring-opacity-50
              "
            />
            <span class="ml-2"
              >I have read and agree to the
              <NuxtLink
                to="/privacy-policy"
                class="font-medium underline text-theme-600"
                >Privacy Policy</NuxtLink
              ></span
            ></label
          >
          <!---->
        </div>
      </div>
      <button
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-xs
          font-medium
          tracking-widest
          text-white
          uppercase
          transition
          bg-gray-800
          border border-transparent
          rounded-md
          hover:bg-gray-700
          active:bg-gray-900
          focus:outline-none focus:border-gray-900 focus:shadow-outline-gray
          disabled:opacity-25
        "
      >
        Submit
      </button>
      <button
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-xs
          font-medium
          tracking-widest
          uppercase
          transition
          border border-transparent border-gray-800
          rounded-md
          hover:border-theme-700 hover:text-theme-700
          focus:outline-none focus:shadow-outline-gray
          disabled:opacity-25
        "
        @click.prevent="reset"
      >
        Reset
      </button>
    </form>

    <div>
      <div
        v-if="errors.length"
        class="flex items-center p-4 border rounded-lg bg-red-100"
      >
        <!---->
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-8 h-8 mr-2 text-red-500"
        >
          <path
            d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"
          ></path>
        </svg>
        <div class="select-none">
          The given data was invalid.
          <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
            <div v-for="(error, index) in arrayError" :key="index">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- success !-->
      <div
        v-else-if="success"
        class="flex items-center p-4 border rounded-lg bg-green-100"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-8 h-8 mr-2 text-green-500"
        >
          <path
            d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
          ></path>
          <path
            d="M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"
          ></path>
        </svg>
        <!---->
        <div class="select-none">
          Thank you for your enquiry, we will respond to your request soon.
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    enquiry: '',
    name: '',
    mobile: '',
    email: '',
    message: '',
    isAppointment: '',
    errors: '',
    success: false,
    policyIsAgree: '',
    send_brochure: '',
  }),
  methods: {
    send() {
      this.errors = []

      if (this.mobile) {
        const prefix = this.mobile.substring(0, 2)
        if (prefix !== '65' || this.mobile.length <= 7) {
          this.errors.push({
            mobile: 'The mobile field contains an invalid number.',
          })
        }
      }
      if (!this.isAppointment) {
        this.errors.push({ isAppointment: 'The make appt field is required.' })
      }

      if (!this.errors.length) {
        // eslint-disable-next-line
        Email.send({
          Host: 'smtp.gmail.com',
          Username: process.env.EMAIL_USER,
          Password: process.env.EMAIL_API,
          To: process.env.EMAIL_USER,
          From: this.email,
          Subject: process.env.EMAIL_TITLE + ' ' + this.enquiry,
          Body:
            '<b>Name: </b>' +
            this.name +
            '<br><b> Message: </b>' +
            this.message +
            '<br><b>Mobile: </b>' +
            this.mobile +
            '<br><b>Appointment: </b>' +
            this.isAppointment,
        }).then(() => {
          this.success = true
          this.reset()
        })
      }
    },
    reset() {
      this.enquiry = ''
      this.name = ''
      this.mobile = ''
      this.email = ''
      this.message = ''
      this.isAppointment = ''
      this.errors = ''
      this.policyIsAgree = ''
      this.send_brochure = ''
    },
  },
}
</script>

<style></style>
