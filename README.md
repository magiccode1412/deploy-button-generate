# DeployBTN - 一键部署按钮生成器

一个可视化的部署按钮生成工具，支持为你的项目快速生成各平台的一键部署按钮（Markdown / HTML），直接粘贴到 README 中即可使用。

## 支持的平台

| 平台 | 说明 |
|------|------|
| Vercel | 零配置部署 |
| Netlify | 从 Git 模板一键创建站点 |
| Railway | 一键部署到 Railway |
| Render | 一键部署 Web 服务 |
| Zeabur | 一键部署到 Zeabur |
| Surge | 部署静态站点 |
| EdgeOne Pages | 腾讯云 EdgeOne Pages |
| Cloudflare Workers | 一键部署 Workers |
| Cloudflare Pages | 一键部署静态站点 |

## 一键部署本项目

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/magiccode1412/deploy-button-generate)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/magiccode1412/deploy-button-generate)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/deploy-button-generate)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/magiccode1412/deploy-button-generate)

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/deploy-button-generate)

[![Deploy to Surge](https://surge.sh/dispatch-button.svg)](https://surge.sh/?repo=https://github.com/magiccode1412/deploy-button-generate)

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fmagiccode1412%2Fdeploy-button-generate)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/magiccode1412/deploy-button-generate)

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/magiccode1412/deploy-button-generate)

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 预览构建产物
pnpm preview
```

## 技术栈

- **React 19** + **TypeScript 6**
- **Vite 8** 构建工具
- **Tailwind CSS 4** 样式方案
- **shadcn/ui** 组件库
- **Radix UI** 无障碍基础组件
- **Lucide React** 图标库

## License

MIT
