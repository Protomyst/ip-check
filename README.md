# IP 检测工具

一个现代化的 IP 信息检测工具，提供地理位置、网络状态和安全评估等多维度信息展示。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FProtomyst%2Fip-check)

## 🚀 快速部署

### Vercel 一键部署
1. 点击上方的 "Deploy with Vercel" 按钮
2. 使用 GitHub 账号登录 Vercel（如果还没有账号，请先注册）
3. 设置项目名称和其他选项
4. 点击 "Deploy" 开始部署

几分钟后，你的应用就会部署完成，并获得一个可访问的 URL。

## ✨ 特性

- 🌍 实时显示 IP 地理位置信息，包含交互式地图
- 🔒 提供网络安全状态评估
- 📊 展示详细的网络性能指标
- 🌓 支持亮色/暗色主题切换
- 🎨 现代化 UI 设计，带有流畅动画效果
- 📱 完全响应式布局，支持各类设备

## 🚀 技术栈

- Next.js - React 框架
- Material-UI - UI 组件库
- Leaflet - 交互式地图
- TypeScript - 类型支持
- Vercel Analytics - 性能分析

## 📦 安装

1. 克隆项目

```bash
git clone https://github.com/yourusername/ip-check.git
cd ip-check
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🔨 构建

```bash
npm run build
```

## 📝 环境变量

创建 `.env.local` 文件（如需要）：

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 🌟 主要功能

- IP 地理位置查询和可视化
- ASN 和网络组织信息
- 代理/VPN 检测
- 网络性能监测
- 安全风险评估

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请通过 Issue 系统反馈。