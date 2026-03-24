import { useState, useMemo } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PlatformForm } from "@/components/PlatformForm"
import { ButtonPreview } from "@/components/ButtonPreview"
import platforms from "@/lib/platforms"

export function DeployGenerator() {
  const [activePlatform, setActivePlatform] = useState(platforms[0].id)
  const [formValues, setFormValues] = useState<Record<string, Record<string, string>>>({})

  const currentPlatform = useMemo(
    () => platforms.find((p) => p.id === activePlatform) || platforms[0],
    [activePlatform]
  )

  const currentValues = formValues[activePlatform] || {}

  const handleFieldChange = (key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [activePlatform]: { ...prev[activePlatform], [key]: value },
    }))
  }

  const deployUrl = useMemo(() => {
    return currentPlatform.buildUrl(currentValues)
  }, [currentPlatform, currentValues])

  const markdown = useMemo(() => {
    if (!deployUrl || deployUrl.endsWith("/new") || deployUrl.endsWith("/new?")) return ""
    return `[![${currentPlatform.badgeText}](${currentPlatform.badgeUrl})](${deployUrl})`
  }, [currentPlatform, deployUrl])

  const html = useMemo(() => {
    if (!deployUrl || deployUrl.endsWith("/new") || deployUrl.endsWith("/new?")) return ""
    return `<a href="${deployUrl}" target="_blank"><img src="${currentPlatform.badgeUrl}" alt="${currentPlatform.badgeText}" /></a>`
  }, [currentPlatform, deployUrl])

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-3 pt-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Deploy Button Generator
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          为你的开源项目一键生成部署按钮。选择平台，填写参数，即可复制徽章链接、Markdown 或 HTML 代码。
        </p>
      </div>

      <Separator />

      {/* Platform Tabs */}
      <Tabs value={activePlatform} onValueChange={setActivePlatform}>
        <TabsList className="flex flex-wrap h-auto gap-1 p-1">
          {platforms.map((p) => (
            <TabsTrigger
              key={p.id}
              value={p.id}
              className="flex items-center gap-1.5 data-[state=active]:shadow-sm"
            >
              <span className="text-base">{p.icon}</span>
              <span className="hidden sm:inline">{p.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {platforms.map((platform) => (
          <TabsContent key={platform.id} value={platform.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              {/* Left: Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-lg">{platform.icon}</span>
                    <span>{platform.name}</span>
                  </CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <PlatformForm
                    platform={platform}
                    values={formValues[platform.id] || {}}
                    onChange={(key, value) => {
                      setFormValues((prev) => ({
                        ...prev,
                        [platform.id]: { ...prev[platform.id], [key]: value },
                      }))
                    }}
                  />
                </CardContent>
              </Card>

              {/* Right: Preview & Output */}
              <ButtonPreview
                platform={platform}
                deployUrl={
                  platform.id === activePlatform
                    ? deployUrl
                    : (platform.buildUrl(formValues[platform.id] || {}))
                }
                markdown={
                  platform.id === activePlatform
                    ? markdown
                    : (() => {
                        const url = platform.buildUrl(formValues[platform.id] || {})
                        if (!url || url.endsWith("/new") || url.endsWith("/new?")) return ""
                        return `[![${platform.badgeText}](${platform.badgeUrl})](${url})`
                      })()
                }
                html={
                  platform.id === activePlatform
                    ? html
                    : (() => {
                        const url = platform.buildUrl(formValues[platform.id] || {})
                        if (!url || url.endsWith("/new") || url.endsWith("/new?")) return ""
                        return `<a href="${url}" target="_blank"><img src="${platform.badgeUrl}" alt="${platform.badgeText}" /></a>`
                      })()
                }
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
