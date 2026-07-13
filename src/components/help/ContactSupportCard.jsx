import { FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa6";

function ContactSupportCard() {
  const channels = [
    {
      icon: FaPhone,
      label: "Call us",
      value: "1800-123-4567",
      hint: "Mon–Sun, 8am – 11pm",
    },
    {
      icon: FaEnvelope,
      label: "Email us",
      value: "support@jetbite.com",
      hint: "Replies within 24 hours",
    },
    {
      icon: FaCommentDots,
      label: "Live chat",
      value: "Chat with an agent",
      hint: "Fastest way to get help",
    },
  ];

  return (
    <div className="rounded-[28px] border border-slate-100 bg-white !p-6 shadow-sm sm:!p-7">
      <h3 className="text-lg font-bold text-slate-900">Contact Support</h3>
      <p className="!mt-1 text-sm text-slate-500">Reach us directly through any of these channels.</p>

      <div className="!mt-5 flex flex-col gap-4">
        {channels.map((c) => (
          <div key={c.label} className="flex items-center gap-3.5 rounded-2xl border border-slate-100 !p-3.5 transition hover:border-orange-200 hover:bg-orange-50/40" >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <c.icon className="text-sm" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.label}</p>
              <p className="truncate text-sm font-bold text-slate-800">{c.value}</p>
              <p className="text-xs text-slate-400">{c.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactSupportCard;