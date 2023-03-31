import { defineComponent, ref } from 'vue'
import Logo from '@/assets/logo.png'
import test from './index.module.scss'
export default defineComponent({
  name: 'Test',
  setup (props, { slots }) {
    return () => (
      <>
        <div class={test['ms-container']}>
          <h1>This is a test</h1>
          <div class="child-vite-vue3-test-btn">
          </div>
          <img src={Logo} alt={'micro-app-logo'} />
          <a-button type="primary">Primary Button</a-button>
          {/* <UpCircleTwoTone spin={true}/> */}
        </div>
      </>
    )
  },
})
