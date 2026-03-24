import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlatformConfig } from "@/lib/platforms"

interface PlatformFormProps {
  platform: PlatformConfig
  values: Record<string, string>
  onChange: (key: string, value: string) => void
}

export function PlatformForm({ platform, values, onChange }: PlatformFormProps) {
  return (
    <div className="space-y-4">
      {platform.fields.map((field) => (
        <div key={field.key} className="space-y-2">
          <Label htmlFor={field.key} className="flex items-center gap-1">
            {field.label}
            {field.required && <span className="text-destructive">*</span>}
          </Label>
          <Input
            id={field.key}
            placeholder={field.placeholder}
            value={values[field.key] || ""}
            onChange={(e) => onChange(field.key, e.target.value)}
          />
          {field.description && (
            <p className="text-xs text-muted-foreground">{field.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
