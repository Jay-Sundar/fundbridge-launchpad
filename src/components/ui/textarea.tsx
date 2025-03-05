
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean;
  maxCount?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showCount, maxCount, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(0);
    
    React.useEffect(() => {
      if (props.value) {
        setCharCount(String(props.value).length);
      }
    }, [props.value]);
    
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          onChange={(e) => {
            setCharCount(e.target.value.length);
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          {...props}
        />
        {showCount && maxCount && (
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {charCount}/{maxCount}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
