import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' //导入包
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [
        vue(),
        // 增加下面的配置项,这样在运行时就能检查eslint规范
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
        svgLoader(),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
