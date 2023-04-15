<template>
  <div class="top-actions">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="top-logo">Logo</router-link>
      <nav class="top-menu">
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <a>Just added</a>
          </li>
          <li>
            <router-link :to="{ name: 'TopBooks' }">Top books</router-link>
          </li>
          <li>
            <a>Upcoming</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="main">
    <div class="container">
      <RouterView v-slot="{ Component, route }">
        <!-- Use any custom transition and  to `fade` -->
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>

  <footer>
    <div class="container">
      <nav>
        <ul>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
$grayDark: #232321;
$containerWidth: 1024px;

body {
  background: #faf9f4;
  color: #232321;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grayDark;
}
.top-actions {
  margin: 20px auto;
  .container {
    max-width: $containerWidth;
    margin: auto;
    display: flex;
    align-items: center;
  }
}
.top-logo {
  padding: 10px 20px;
  background: #cccccc;
  color: $grayDark;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  width: 150px;
  text-align: center;
}
.top-menu {
  display: flex;
  margin-right: 0;
  margin-left: auto;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
  }
  a {
    padding: 10px 20px;
    background: transparent;
    color: $grayDark;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    &.router-link-active {
      background-color: #eac00a;
      color: #fff;
    }
  }
}
footer {
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  color: #fff;
  .container {
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 10px;
    margin: 0;

    li {
    }
    a {
      padding: 0;
    }
  }
}

.main {
  .container {
    background: #fff;
    border-radius: 10px 10px 0 0;
    max-width: $containerWidth;
    margin: auto;
    box-shadow: 0 5px 10px rgba(#000, 0.1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.zoom-in-enter-active,
.zoom-in-leave-active {
  transition: opacity 0.5s ease, transform 0.3s;
}

.zoom-in-enter-from,
.zoom-in-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
