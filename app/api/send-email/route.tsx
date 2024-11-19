import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: "...", // that needs a particular domain which i dont have
    to: "h.hassan.mansoor@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Mosh" />,
  });
  return NextResponse.json({});
}
