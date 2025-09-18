<template>
  <div class="admin-page">    
    <div class="admin-page__content">
        <!-- left side -->
        <nav class="admin-page__nav">
            <ul class="admin-page__nav-list">
                <li class="admin-page__nav-item">
                    <NuxtLink to="/admin/submissions" class="admin-page__nav-link" :class="{'active': $route.path === '/admin/submissions'}">Заявки</NuxtLink>
                </li>

                <li class="admin-page__nav-item">
                    <NuxtLink to="/admin/categories" class="admin-page__nav-link" :class="{'active': $route.path === '/admin/categories'}">Категории</NuxtLink>
                </li>

                <li class="admin-page__nav-item">
                    <NuxtLink to="/admin/recommend" class="admin-page__nav-link" :class="{'active': $route.path === '/admin/recommend'}">Рекомендации</NuxtLink>
                </li>

                <li class="admin-page__nav-item">
                    <NuxtLink to="/admin/resources" class="admin-page__nav-link" :class="{'active': $route.path === '/admin/resources'}">Ресурсы</NuxtLink>
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

  &__content {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 100%;
    flex: 1 1 340px;
    flex-shrink: 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 340px;
    height: 100%;
    background-color: #081028;
    padding: 40px 0px;
    border-right: 3px solid #0A1330;
    -webkit-box-shadow: 11px 0px 7px 9px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 11px 0px 7px 9px rgba(0, 0, 0, 0.2);
    box-shadow: 11px 0px 7px 9px rgba(0, 0, 0, 0.2);
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
    width: 100%;
    padding: 10px 20px;
  }

  &__nav-item {
    width: 100%;
  }

  &__nav-item a {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    color: #AEB9E1;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color:rgb(13, 24, 54);
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
  }
}


</style>