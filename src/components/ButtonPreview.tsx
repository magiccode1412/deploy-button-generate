import { PlatformConfig } from "@/lib/platforms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, ExternalLink } from "lucide-react"
import { useState } from "react"

interface ButtonPreviewProps {
  platform: PlatformConfig
  deployUrl: string
  markdown: string
  html: string
}

export function ButtonPreview({ platform, deployUrl, markdown, html }: ButtonPreviewProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const hasUrl = deployUrl && deployUrl !== "" && !deployUrl.endsWith("/new") && !deployUrl.endsWith("/new?")

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <span>{platform.icon}</span>
          <span>{platform.name}</span> 按钮预览
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <p className="text-sm font-medium">预览</p>
          <div className="flex items-center gap-3 rounded-lg border p-4 bg-muted/30">
            {hasUrl ? (
              <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={platform.badgeUrl}
                  alt={platform.badgeText}
                  className="h-[28px] cursor-pointer"
                />
              </a>
            ) : (
              <div className="flex items-center justify-center h-[28px] px-4 rounded bg-muted text-sm text-muted-foreground">
                请填写必填项以预览
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">部署链接</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(deployUrl, "url")}
              disabled={!hasUrl}
            >
              {copied === "url" ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied === "url" ? "已复制" : "复制"}
            </Button>
          </div>
          <div className="rounded-lg border bg-muted/30 p-3">
            <code className="text-xs break-all block text-foreground">
              {hasUrl ? deployUrl : "https://..."}
            </code>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Markdown</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(markdown, "md")}
              disabled={!hasUrl}
            >
              {copied === "md" ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied === "md" ? "已复制" : "复制"}
            </Button>
          </div>
          <div className="rounded-lg border bg-muted/30 p-3">
            <code className="text-xs break-all block text-foreground">
              {hasUrl ? markdown : "[![Deploy](badge-url)](deploy-url)"}
            </code>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">HTML</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(html, "html")}
              disabled={!hasUrl}
            >
              {copied === "html" ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied === "html" ? "已复制" : "复制"}
            </Button>
          </div>
          <div className="rounded-lg border bg-muted/30 p-3">
            <code className="text-xs break-all block text-foreground">
              {hasUrl ? html : '<a href="..."><img src="..." /></a>'}
            </code>
          </div>
        </div>

        {hasUrl && (
          <Button variant="outline" className="w-full" asChild>
            <a href={deployUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              打开部署页面
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
