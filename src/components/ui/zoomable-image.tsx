import { type ImgHTMLAttributes } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "@/lib/utils"

export interface ImageZoomProps extends ImgHTMLAttributes<HTMLImageElement> {
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>
  zoomProps?: UncontrolledProps
  className?: string
}

export function ImageZoom({
  zoomInProps,
  zoomProps,
  className,
  children,
  ...props
}: ImageZoomProps) {
  return (
    <Zoom
      wrapElement="span"
      {...zoomProps}
      zoomImg={{
        src: props.src,
        className: cn(
          "image-rendering-high-quality cursor-zoom-out", 
          zoomInProps?.className
        ),
        ...zoomInProps,
      }}
    >
      {children ?? (
        <img
          className={cn(
            "cursor-zoom-in rounded-md transition-all",
            className
          )}
          {...props}
        />
      )}
    </Zoom>
  )
}