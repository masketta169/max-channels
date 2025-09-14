<template>
  <div class="admin-page">    
    <div class="admin-page__content">
        <!-- left side -->
        <nav class="admin-page__nav"> 
            <NuxtLink to="/logout" class="admin-page__nav-logout" @click="logout">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </NuxtLink>
            <ul class="admin-page__nav-list">
                <li class="admin-page__nav-item">
                    <NuxtLink to="/profile" class="admin-page__nav-link" :class="{'active': $route.path === '/profile'}">Личный кабинет</NuxtLink>
                </li>
                <li class="admin-page__nav-item">
                    <NuxtLink to="/profile/submissions" class="admin-page__nav-link" :class="{'active': $route.path === '/profile/submissions'}">Заявки</NuxtLink>
                </li>
            </ul>
        </nav>

        <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  &__title {
    font-size: 28px;
    font-weight: 600;
    margin: 0px;
    color: #081028;
    margin-bottom: 20px;

  }

  &__nav-logout {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 4;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 100vh;
    flex: 1 1 340px;
    flex-shrink: 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    min-width: 340px;
    height: 100%;
    background-color: #081028;
    padding: 40px 0px;
    border-right: 3px solid #0A1330;

  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 10px 20px;
    gap: 10px;
    list-style: none;
  }

  &__nav-item {
    width: 100%;
  }

  &__nav-item li {
    list-style: none;
  }

  &__nav-item a {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    color: #fff;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: transparent;
    box-sizing: border-box;
  }

  &__nav-item a:hover {
    background-color: #1a2038;
  }

  &__nav-item a:active {
    background-color: #0A1330;
  }

  &__nav-link.active {
    color: #fff;
    border-left: 4px solid #CB3CFF;
    background-color: #0A1330;
  }
}


</style>