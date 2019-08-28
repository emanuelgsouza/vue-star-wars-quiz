<template>
  <header class="header">
    <div class="header__body">
      <router-link class="header__logo" to="/">
        <span class="icon">
          <i class="fas fa-jedi"></i>
        </span>
        <span class="text">Planets Quiz</span>
      </router-link>

      <div class="header__steps">
        <Steps
          :steps="10"
          :actualStep="5"
        />
      </div>

      <div class="header__timer">
        <Timer />
      </div>
    </div>
  </header>
</template>

<script>
import Timer from '../../components/Timer'
import Steps from '../../components/Steps'

export default {
  name: 'Header',
  components: {
    Timer,
    Steps
  }
}
</script>

<style scoped>
.header {
  @apply mb-4 bg-white;
}

.header__body {
  max-width: 1200px;
  @apply flex justify-between px-4 py-4 mx-auto;
}

/* header logo */
.header__logo {
  @apply items-center text-black;
}

.header__logo .text {
  @apply hidden;
}

.header__logo .icon {
  @apply mr-4 text-3xl;
}

.header__steps {
  @apply justify-start;
}

.header__timer {
  flex: 1;
  @apply justify-end;
}

.header__steps,
.header__timer {
  @apply flex items-center text-black text-2xl;
}

/* responsivity */
@screen md {
  .header__logo {
    @apply flex;
  }

  .header__logo .text {
    @apply block text-xl;
  }

  .header__logo,
  .header__steps,
  .header__timer {
    flex: 1;
  }

  .header__steps {
    @apply justify-center;
  }
}
</style>
