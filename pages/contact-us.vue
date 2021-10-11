<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Contact Us
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <form-book-appoinment />
      </div>
    </section>
  </div>
</template>

<script>
import FormBookAppoinment from '~/components/FormBookAppoinment.vue'
export default {
  components: { FormBookAppoinment },
}
</script>
