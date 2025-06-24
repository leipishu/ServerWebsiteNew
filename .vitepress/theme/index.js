import DefaultTheme from 'vitepress/theme';
import './custom.css'; // 导入自定义样式

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      // 监听滚动事件
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.VPNavBar')
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      })
    }
  }
}