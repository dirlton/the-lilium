<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Developer
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto space-y-12 divide-y">
      <section class="py-6 space-y-6">
        <div class="space-y-4 text-center">
          <h3 class="text-xl font-semibold sm:text-2xl">Developed By</h3>
          <div>
            <img
              src="~assets/img/developer-logo.png"
              alt="Kingsford Logo"
              class="mx-auto"
            />
          </div>
        </div>
        <div class="max-w-6xl px-4 mx-auto prose">
          <p>
            Normanton Park is formerly known as 488-unit HUDC (Normanton Park),
            proudly developed by Kingsford Hurray Development. Kingsford
            Development was founded during year 2000 by Hong Kong XINFENG
            Investment Co. Ltd.
          </p>
          <p>
            Under Kingsford group, organisation business portfolios include
            Kingsford Estate, Feng Hua Property Management, Pui sing Consulting
            and North Carbon Manufacturing. Primarily in the real estate
            industryfrom real estate development, management of property and
            consulting firm.
          </p>
          <p>
            We have grown our business over the years in Singapore, Australia
            and China. Mainly investing in residential development and
            successfully developed over hundred acres of land. Thanks to its
            unparalleled management, service and growth model, Kingsford has
            earned a great reputation both at home and abroad.
          </p>
          <p>
            Our aim is to make Kingsford a respectable domestic brand for
            homeowners. Through the combination of advanced technologies, we are
            dedicated to building quality and secure homes, and we aim to
            understand more in-depth about consumer requirements and needs.
          </p>
          <p>
            Our slogan is "KINGSFORD is quality, KINGSFORD is reliability,
            KINGSFORD is the brand." We're continuously working towards the goal
            of becoming global powerhouse and make the Kingdom of Kingsford
            Estate a reality! In Singapore, our previous established track
            records are Kingsford Waterbay and Kingsford Hillview Peak. Track
            record in China includes, Kingsford Golden Garden, Kingsford Ca
            Yuan, Kingsford International and many more.
          </p>
        </div>
      </section>
      <section class="py-6 space-y-6">
        <div class="text-center">
          <h3 class="text-xl font-semibold sm:text-2xl">Track Records</h3>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-1.jpg"
              alt="Kingsford Waterbay"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">Kingsford Waterbay</p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-2.jpg"
              alt="Kingsford Hillview Peak"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Kingsford Hillview Peak
            </p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-3.jpg"
              alt="Kingsford Yu Jing Ting"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Kingsford Yu Jing Ting
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-4.jpg"
              alt="Xi Fu Qu"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">Xi Fu Qu</p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-5.jpg"
              alt="Kingsford Yong Jing Hao Cheng"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Kingsford Yong Jing Hao Cheng
            </p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-6.jpg"
              alt="Kingsford Li Cheng"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Kingsford Li Cheng
            </p>
          </div>
        </div>
      </section>
      <section class="py-6">
        <NuxtLink
          to="/project-details"
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
          Continue To Project Details
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
    <BookAppointment />
  </div>
</template>
