
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
          <br>
          <div>
            <img
              src="~assets/img/the-gazania-lilium-logo-300x300.png"
              alt="SingHaiyi Huajiang Sun Pte. Ltd."
              class="mx-auto"
            />
          </div>
        </div>
        <div class="max-w-6xl px-4 mx-auto prose text-justify">
          <p>
            SingHaiyi Huajiang Amber is a 50/50 shared venture between Corporate Bridge, a wholly-owned subsidiary of SingHaiYi Group, 
            and Huajiang Properties II, a company controlled by SingHaiYi Founders Gordon and Celine Tang, the company's controlling shareholders 
            and directors.
          </p> 
          <p> 
            SingHaiyi Group Ltd is well-known in Singapore, but it has also expanded its portfolio to include the United States, 
            Australia, and Malaysia. This fast-growing real estate company is developing and attempting to diversify its portfolio 
            into commercial development in Singapore and abroad while focusing on project quality. SingHaiyi strives to create a 
            trustworthy and trusted brand via business excellence and integrity. 
          </p>
          <p>
            The Vales, one of SingHaiyi's projects, was named Best Executive Condo Development, Best Executive Architectural Design, 
            Best Condo Interior Design, and Highly Recommended Executive Condo Landscape Architectural Design at the 8th annual PropertyGuru 
            Asia Property Awards (Singapore). In addition, the City Suites, another SingHaiyi Group Ltd project, was granted the prestigious 
            "CONQUAS STAR" by the Building Construction Authority in 2018.
          </p>
          <p>
            Mr Gordon Tang started the SingHaiyi Group in 1977, and it is a Singapore-based public firm. Property development, real estate 
            investing, and property management services are the fundamental businesses of the company. 
            The Group's Singapore properties are Parc Clematis, The Gazania, The Lilium, 9 Penang Road, City Suites, The Vales, CityLife@Tampines,
            and Pasir Ris One. Future homeowners of The Lilium may expect high-quality finishes because of SingHaiYi's experience and reputation 
            for developing high-quality residences.
          </p>
        </div>
      </section>
      <section  class="py-6 space-y-6">
          <div class="space-y-4 text-center">
            <br>
          <h3 class="text-xl font-semibold sm:text-2xl">Awards</h3>
          <br>
          <div>
            <img
              src="~assets/img/Awards.png"
              alt="SingHaiyi Huajiang Sun Pte. Ltd."
              class="mx-auto"
              width="350"
            />
          </div>
          <br>
          <!-- Start Award Statement -->
            <p class="transition text-theme-600 hover:text-gold-200 text-xl font-semibold sm:text-2xl">WINNER</p>
            <p>
              <b>✨Best New Private Condo Landscape Architectural Design (Singapore) • 2019 ✨</b>
            </p>
          <!-- -->
          <!-- Start Award Statement -->
            <p class="transition text-theme-600 hover:text-gold-200 text-xl font-semibold sm:text-2xl">HIGHLY COMMENDED</p>
            <p>
              <b>✨Best Boutique Condo Development (High Density) (Singapore) • 2019✨</b>
            </p>
            <p>
              <b>✨Best Boutique Condo Interior Design (Singapore) • 2019✨</b>
            </p>
            <p>
              <b>✨Best Boutique Landscape Architectural Design (Singapore) • 2019✨</b>
            </p>
            <p>
              <b>✨Best Residential Green Development (Singapore) • 2019✨</b>
            </p>
          <!-- -->
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
              alt="9 Penang Road"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">9 Penang Road</p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-2.jpg"
              alt="City Suites"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              City Suites
            </p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-3.jpg"
              alt="Par Clematis"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Par Clematis
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-4.png"
              alt="The Gazania"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">Ripple Bay</p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-5.jpg"
              alt="The Vales"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              The Vales
            </p>
          </div>
          <div class="space-y-2 text-center break-words">
            <img
              src="~assets/img/developer/track-record-6.png"
              alt="Hallmark Residences"
              class="mx-auto rounded shadow"
            />
            <p class="text-sm font-semibold sm:text-lg">
              Hallmark Residences
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
