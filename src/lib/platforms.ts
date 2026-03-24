export interface PlatformField {
  key: string
  label: string
  placeholder: string
  required: boolean
  description?: string
}

export interface PlatformConfig {
  id: string
  name: string
  icon: string
  color: string
  description: string
  fields: PlatformField[]
  buildUrl: (params: Record<string, string>) => string
  badgeUrl: string
  badgeText: string
}

const platforms: PlatformConfig[] = [
  {
    id: "vercel",
    name: "Vercel",
    icon: "▲",
    color: "#000000",
    description: "零配置部署你的项目到 Vercel",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 Git 仓库 URL",
      },
    ],
    buildUrl: (params) => {
      const url = new URL("https://vercel.com/new/clone")
      if (params.repositoryUrl) url.searchParams.set("repository-url", params.repositoryUrl)
      return url.toString()
    },
    badgeUrl: "https://vercel.com/button",
    badgeText: "Deploy with Vercel",
  },
  {
    id: "netlify",
    name: "Netlify",
    icon: "◆",
    color: "#00C7B7",
    description: "从 Git 模板一键创建 Netlify 站点",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 GitHub 仓库 URL",
      },
    ],
    buildUrl: (params) => {
      const url = new URL("https://app.netlify.com/start/deploy")
      if (params.repositoryUrl) url.searchParams.set("repository", params.repositoryUrl)
      return url.toString()
    },
    badgeUrl: "https://www.netlify.com/img/deploy/button.svg",
    badgeText: "Deploy to Netlify",
  },
  {
    id: "railway",
    name: "Railway",
    icon: "🚂",
    color: "#0B0D0E",
    description: "一键部署你的项目到 Railway",
    fields: [
      {
        key: "template",
        label: "模板名称",
        placeholder: "my-template 或 /username/template",
        required: true,
        description: "Railway 模板标识，例如 my-template 或 /username/template",
      },
    ],
    buildUrl: (params) => {
      if (!params.template) return ""
      const id = params.template.startsWith("/") ? params.template : params.template
      return `https://railway.app/template/${encodeURIComponent(id)}`
    },
    badgeUrl: "https://railway.app/button.svg",
    badgeText: "Deploy on Railway",
  },
  {
    id: "render",
    name: "Render",
    icon: "◉",
    color: "#46E3B7",
    description: "一键部署 Web 服务到 Render",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 Git 仓库 URL",
      },
      {
        key: "branch",
        label: "分支",
        placeholder: "main",
        required: false,
      },
      {
        key: "env",
        label: "环境变量",
        placeholder: "KEY1=value1,KEY2=value2",
        required: false,
        description: "逗号分隔的 key=value 键值对，用户部署时将被提示填写具体值",
      },
    ],
    buildUrl: (params) => {
      const url = new URL("https://render.com/deploy")
      if (params.repositoryUrl) url.searchParams.set("repo", params.repositoryUrl)
      if (params.branch) url.searchParams.set("branch", params.branch)
      if (params.env) url.searchParams.set("env", params.env)
      return url.toString()
    },
    badgeUrl: "https://render.com/images/deploy-to-render-button.svg",
    badgeText: "Deploy to Render",
  },
  {
    id: "zeabur",
    name: "Zeabur",
    icon: "⚡",
    color: "#7C3AED",
    description: "一键部署你的项目到 Zeabur",
    fields: [
      {
        key: "templateId",
        label: "模板 ID 或链接",
        placeholder: "https://zeabur.com/templates/my-template",
        required: true,
        description: "你的 Zeabur 模板链接或模板标识符",
      },
    ],
    buildUrl: (params) => {
      if (!params.templateId) return ""
      return params.templateId.startsWith("http")
        ? params.templateId
        : `https://zeabur.com/templates/${encodeURIComponent(params.templateId)}`
    },
    badgeUrl: "https://zeabur.com/button.svg",
    badgeText: "Deploy on Zeabur",
  },
  {
    id: "surge",
    name: "Surge",
    icon: "△",
    color: "#00C9FF",
    description: "部署静态站点到 Surge.sh",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 Git 仓库 URL",
      },
    ],
    buildUrl: (params) => {
      const url = new URL("https://surge.sh/")
      if (params.repositoryUrl) url.searchParams.set("repo", params.repositoryUrl)
      return url.toString()
    },
    badgeUrl: "https://surge.sh/dispatch-button.svg",
    badgeText: "Deploy to Surge",
  },
  {
    id: "edgeone",
    name: "EdgeOne Pages",
    icon: "☁",
    color: "#006EFF",
    description: "一键部署你的项目到腾讯云 EdgeOne Pages",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: false,
        description: "GitHub 仓库地址，支持子路径如 /tree/branch",
      },
      {
        key: "template",
        label: "模板名称",
        placeholder: "my-template",
        required: false,
        description: "通过 Pages 官方模板部署（与仓库地址二选一）",
      },
      {
        key: "projectName",
        label: "项目名称",
        placeholder: "my-project",
        required: false,
      },
      {
        key: "buildCommand",
        label: "构建命令",
        placeholder: "npm run build",
        required: false,
      },
      {
        key: "installCommand",
        label: "安装命令",
        placeholder: "npm install",
        required: false,
      },
      {
        key: "outputDirectory",
        label: "输出目录",
        placeholder: "./dist",
        required: false,
      },
      {
        key: "rootDirectory",
        label: "根目录",
        placeholder: "/",
        required: false,
      },
      {
        key: "env",
        label: "环境变量",
        placeholder: "KEY1,KEY2,KEY3",
        required: false,
        description: "逗号分隔的环境变量名称",
      },
      {
        key: "envDescription",
        label: "环境变量说明",
        placeholder: "环境变量相关描述",
        required: false,
      },
      {
        key: "envLink",
        label: "环境变量链接",
        placeholder: "https://example.com/docs",
        required: false,
        description: "与环境变量相关的文档链接",
      },
    ],
    buildUrl: (params) => {
      const url = new URL("https://console.cloud.tencent.com/edgeone/pages/new")
      const encode = (v: string) => encodeURIComponent(v)
      if (params.repositoryUrl) url.searchParams.set("repository-url", encode(params.repositoryUrl))
      if (params.template) url.searchParams.set("template", encode(params.template))
      if (params.projectName) url.searchParams.set("project-name", encode(params.projectName))
      if (params.buildCommand) url.searchParams.set("build-command", encode(params.buildCommand))
      if (params.installCommand) url.searchParams.set("install-command", encode(params.installCommand))
      if (params.outputDirectory) url.searchParams.set("output-directory", encode(params.outputDirectory))
      if (params.rootDirectory) url.searchParams.set("root-directory", encode(params.rootDirectory))
      if (params.env) url.searchParams.set("env", encode(params.env))
      if (params.envDescription) url.searchParams.set("env-description", encode(params.envDescription))
      if (params.envLink) url.searchParams.set("env-link", encode(params.envLink))
      return url.toString()
    },
    badgeUrl: "https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg",
    badgeText: "使用 EdgeOne Pages 部署",
  },
  {
    id: "cloudflare-workers",
    name: "Cloudflare Workers",
    icon: "⚡",
    color: "#F6821F",
    description: "一键部署你的项目到 Cloudflare Workers",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 GitHub 仓库 URL，仓库中需包含 wrangler.toml 配置",
      },
      {
        key: "branch",
        label: "分支",
        placeholder: "main",
        required: false,
        description: "指定部署的 Git 分支，默认为 main",
      },
    ],
    buildUrl: (params) => {
      if (!params.repositoryUrl) return ""
      const url = new URL("https://deploy.workers.cloudflare.com/")
      url.searchParams.set("url", params.repositoryUrl)
      if (params.branch) url.searchParams.set("branch", params.branch)
      return url.toString()
    },
    badgeUrl: "https://deploy.workers.cloudflare.com/button",
    badgeText: "Deploy to Cloudflare Workers",
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    icon: "📄",
    color: "#FB7044",
    description: "一键部署静态站点到 Cloudflare Pages",
    fields: [
      {
        key: "repositoryUrl",
        label: "仓库地址",
        placeholder: "https://github.com/username/repo",
        required: true,
        description: "你的 GitHub 仓库 URL",
      },
      {
        key: "branch",
        label: "分支",
        placeholder: "main",
        required: false,
        description: "指定部署的 Git 分支，默认为 main",
      },
      {
        key: "buildCommand",
        label: "构建命令",
        placeholder: "npm run build",
        required: false,
        description: "构建静态资源的命令，如 npm run build、pnpm build",
      },
      {
        key: "outputDirectory",
        label: "输出目录",
        placeholder: "dist",
        required: false,
        description: "构建产物的输出目录，如 dist、build、out",
      },
    ],
    buildUrl: (params) => {
      if (!params.repositoryUrl) return ""
      const url = new URL("https://deploy.workers.cloudflare.com/")
      url.searchParams.set("url", params.repositoryUrl)
      if (params.branch) url.searchParams.set("branch", params.branch)
      if (params.buildCommand) url.searchParams.set("build-command", params.buildCommand)
      if (params.outputDirectory) url.searchParams.set("build-output-directory", params.outputDirectory)
      return url.toString()
    },
    badgeUrl: "https://deploy.workers.cloudflare.com/button",
    badgeText: "Deploy to Cloudflare Pages",
  },
]

export default platforms
