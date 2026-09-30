import { business, smsUrl, telUrl, whatsappUrl } from "@/lib/business"
import { ChatIcon, PhoneIcon, TextIcon } from "./Icons"

// Three ways to book, all one tap on a phone. Call is the loud one, full
// width; WhatsApp and Text share the row beneath.
export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-3">
      <a href={telUrl} className="btn btn-call w-full">
        <PhoneIcon />
        Call {business.phoneDisplay}
      </a>
      <div className="flex gap-3">
        <a href={whatsappUrl()} className="btn min-w-0 flex-1 max-[360px]:gap-2 max-[360px]:px-3" target="_blank" rel="noopener noreferrer">
          <ChatIcon />
          WhatsApp
        </a>
        <a href={smsUrl} className="btn min-w-0 flex-1 max-[360px]:gap-2 max-[360px]:px-3">
          <TextIcon />
          Text
        </a>
      </div>
    </div>
  )
}
