<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__section">
          <h3 class="footer__title">MAX Community</h3>
          <p class="footer__description">
              Лучший ресурс для поиска чатов, каналов и ботов для платформы MAX.
          </p>
        </div>
        
        <div class="footer__section">
          <h3 class="footer__title">Quick Links</h3>
          <ul class="footer__links">
            <li><NuxtLink to="/" class="footer__link">Главная</NuxtLink></li>
            <li><NuxtLink to="/about" class="footer__link">О проекте</NuxtLink></li>
            <!-- <li><NuxtLink to="/contact" class="footer__link">Контакты</NuxtLink></li> -->
          </ul>
        </div>
        
        <div class="footer__section">
          <h3 class="footer__title">Контакты</h3>
          <ul class="footer__contacts">
            <li>Email: learnscriptmail@gmail.com</li>
            <li>Telegram: @learnscrip</li> 
          </ul>
        </div>
      </div>
      
      <div class="footer__copyright">
        &copy; {{ new Date().getFullYear() }} MAX Community. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.footer {
  background: #09090B;
  color: $white;
  padding: 40px 20px 20px 20px;
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px -13px 19px 1px rgba($blue-darker, 0.5);
  -moz-box-shadow: 0px -13px 19px 1px rgba($blue-darker, 0.5);
  box-shadow: 0px -13px 19px 1px rgba($blue-darker, 0.5);
  border-top: 1px solid rgba($blue-darker, 0.5);
  
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  &__title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: $white;
  }
  
  &__description {
    color: $gray;
    line-height: 1.6;
  }
  
  &__links {
    list-style: none;
    padding: 0;
  }
  
  &__link {
    color: $gray;
    text-decoration: none;
    line-height: 2;
    transition: $transition;
    
    &:hover {
      color: $blue-light;
    }
  }
  
  &__contacts {
    list-style: none;
    padding: 0;
    color: $gray;
    line-height: 2;
  }
  
  &__copyright {
    text-align: center;
    color: $gray;
    font-size: 0.9rem;
  }
}
</style>