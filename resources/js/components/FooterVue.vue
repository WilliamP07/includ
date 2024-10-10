<template>
  <div data-app>
    <footer class="footer bg-gray mt-2 p-2">
      <div class="row">
        <div class="col-12 col-sm-12 text-center col-md-6">
          <a
            class="footer-text"
            href="https://es.pinterest.com/"
            target="_blank"
          >
            IncluD &#169; {{ year }}
          </a>
        </div>
        <div class="col-12 col-sm-12 text-center col-md-6">
          <div class="mya footer-text">Políticas de privacidad</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      year: new Date().getFullYear(),
    };
  },
};
</script>
