// Library imports
import Dompurify from "dompurify"

//  types
interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  content: string
}
const RichTextRenderer = ({ content, className }: Props) => {
  const sanitizedContent = Dompurify.sanitize(content)
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={className}
    />
  )
}

export default RichTextRenderer
